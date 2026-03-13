:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrpipe'
.. highlight: bash

pyrpipe
=======

.. conda:recipe:: pyrpipe
   :replaces_section_title:
   :noindex:

   pyrpipe is a lightweight python package for RNA\-Seq workflows.

   :homepage: https://github.com/urmi-21/pyrpipe
   :documentation: https://pyrpipe.readthedocs.io/en/latest/?badge=latest
   
   :license: MIT / MIT
   :recipe: /`pyrpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe/meta.yaml>`_

   


.. conda:package:: pyrpipe

   |downloads_pyrpipe| |docker_pyrpipe|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on colorama: 
   :depends on dill: 
   :depends on importlib_resources: 
   :depends on jinja2: 
   :depends on multiqc: 
   :depends on psutil: 
   :depends on python: ``>=3``
   :depends on pyyaml: 
   :depends on seaborn: 
   :depends on weasyprint: 

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

    pixi global install pyrpipe

to add into an existing workspace instead, run::

    pixi add pyrpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyrpipe

Alternatively, to install into a new environment, run::

    conda create -n envname pyrpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyrpipe:<tag>

(see `pyrpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyrpipe| image:: https://img.shields.io/conda/dn/bioconda/pyrpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrpipe
   :alt:   (downloads)
.. |docker_pyrpipe| image:: https://quay.io/repository/biocontainers/pyrpipe/status
   :target: https://quay.io/repository/biocontainers/pyrpipe
.. _`pyrpipe/tags`: https://quay.io/repository/biocontainers/pyrpipe?tab=tags


.. raw:: html

    <script>
        var package = "pyrpipe";
        var versions = ["0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrpipe/README.html