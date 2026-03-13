:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'memote'
.. highlight: bash

memote
======

.. conda:recipe:: memote
   :replaces_section_title:
   :noindex:

   the genome\-scale metabolic model test suite

   :homepage: https://memote.readthedocs.io/
   :license: Apache-2.0
   :recipe: /`memote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/memote/meta.yaml>`_

   


.. conda:package:: memote

   |downloads_memote| |docker_memote|

   :versions:
      
      

      ``0.17.0-0``

      

   
   :depends on click: 
   :depends on click-configfile: 
   :depends on click-log: 
   :depends on cobra: ``>=0.28``
   :depends on cookiecutter: 
   :depends on depinfo: ``>=2.2``
   :depends on future: 
   :depends on git: 
   :depends on gitpython: 
   :depends on importlib_resources: 
   :depends on jinja2: 
   :depends on jsonschema: 
   :depends on numpy: 
   :depends on numpydoc: 
   :depends on optlang: ``>=1.8``
   :depends on pandas: 
   :depends on pandera: 
   :depends on pygithub: ``<2``
   :depends on pylru: 
   :depends on pytest: 
   :depends on python: ``>=3.9,<=3.11``
   :depends on requests: 
   :depends on ruamel.yaml: 
   :depends on six: 
   :depends on sqlalchemy: 
   :depends on sympy: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install memote

to add into an existing workspace instead, run::

    pixi add memote

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install memote

Alternatively, to install into a new environment, run::

    conda create -n envname memote

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/memote:<tag>

(see `memote/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_memote| image:: https://img.shields.io/conda/dn/bioconda/memote.svg?style=flat
   :target: https://anaconda.org/bioconda/memote
   :alt:   (downloads)
.. |docker_memote| image:: https://quay.io/repository/biocontainers/memote/status
   :target: https://quay.io/repository/biocontainers/memote
.. _`memote/tags`: https://quay.io/repository/biocontainers/memote?tab=tags


.. raw:: html

    <script>
        var package = "memote";
        var versions = ["0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/memote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/memote/README.html