:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbol-utilities'
.. highlight: bash

sbol-utilities
==============

.. conda:recipe:: sbol-utilities
   :replaces_section_title:
   :noindex:

   Collection of scripts and functions for manipulating SBOL 3 data that can be run from the command line or as functions in Python.

   :homepage: https://github.com/SynBioDex/SBOL-utilities
   :license: MIT
   :recipe: /`sbol-utilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbol-utilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbol-utilities/meta.yaml>`_

   


.. conda:package:: sbol-utilities

   |downloads_sbol-utilities| |docker_sbol-utilities|

   :versions:
      
      

      ``1.0a17-0``,  ``1.0a16-0``

      

   
   :depends on biopython: 
   :depends on nodejs: 
   :depends on openjdk: 
   :depends on openpyxl: 
   :depends on pysbol2: ``v1.4.1.*``
   :depends on pysbol3: ``>=1.1``
   :depends on python: ``>=3.7``
   :depends on python-graphviz: 
   :depends on rdflib: ``>=6.2``
   :depends on sbol_factory: ``>=1.1``
   :depends on tyto: ``>=1.4``

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

    pixi global install sbol-utilities

to add into an existing workspace instead, run::

    pixi add sbol-utilities

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sbol-utilities

Alternatively, to install into a new environment, run::

    conda create -n envname sbol-utilities

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sbol-utilities:<tag>

(see `sbol-utilities/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sbol-utilities| image:: https://img.shields.io/conda/dn/bioconda/sbol-utilities.svg?style=flat
   :target: https://anaconda.org/bioconda/sbol-utilities
   :alt:   (downloads)
.. |docker_sbol-utilities| image:: https://quay.io/repository/biocontainers/sbol-utilities/status
   :target: https://quay.io/repository/biocontainers/sbol-utilities
.. _`sbol-utilities/tags`: https://quay.io/repository/biocontainers/sbol-utilities?tab=tags


.. raw:: html

    <script>
        var package = "sbol-utilities";
        var versions = ["1.0a17","1.0a16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbol-utilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbol-utilities/README.html