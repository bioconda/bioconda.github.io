:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocode'
.. highlight: bash

biocode
=======

.. conda:recipe:: biocode
   :replaces_section_title:
   :noindex:

   Bioinformatics code libraries and scripts.

   :homepage: https://github.com/jorvis/biocode
   :license: MIT / MIT
   :recipe: /`biocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode/meta.yaml>`_

   


.. conda:package:: biocode

   |downloads_biocode| |docker_biocode|

   :versions:
      
      

      ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``

      

   
   :depends on biopython: 
   :depends on jinja2: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.6``
   :depends on python-igraph: 
   :depends on setuptools: 
   :depends on taxadb: 

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

    pixi global install biocode

to add into an existing workspace instead, run::

    pixi add biocode

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biocode

Alternatively, to install into a new environment, run::

    conda create -n envname biocode

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biocode:<tag>

(see `biocode/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biocode| image:: https://img.shields.io/conda/dn/bioconda/biocode.svg?style=flat
   :target: https://anaconda.org/bioconda/biocode
   :alt:   (downloads)
.. |docker_biocode| image:: https://quay.io/repository/biocontainers/biocode/status
   :target: https://quay.io/repository/biocontainers/biocode
.. _`biocode/tags`: https://quay.io/repository/biocontainers/biocode?tab=tags


.. raw:: html

    <script>
        var package = "biocode";
        var versions = ["0.12.1","0.12.0","0.11.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocode/README.html