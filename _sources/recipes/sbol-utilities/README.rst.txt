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

      

   
   :depends biopython: 
   :depends nodejs: 
   :depends openjdk: 
   :depends openpyxl: 
   :depends pysbol2: ``v1.4.1.*``
   :depends pysbol3: ``>=1.1``
   :depends python: ``>=3.7``
   :depends python-graphviz: 
   :depends rdflib: ``>=6.2``
   :depends sbol_factory: ``>=1.1``
   :depends tyto: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sbol-utilities

   and update with::

      conda update sbol-utilities

   or use the docker container::

      docker pull quay.io/biocontainers/sbol-utilities:<tag>

   (see `sbol-utilities/tags`_ for valid values for ``<tag>``)


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