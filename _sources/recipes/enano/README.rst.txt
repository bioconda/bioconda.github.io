:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enano'
.. highlight: bash

enano
=====

.. conda:recipe:: enano
   :replaces_section_title:
   :noindex:

   ENANO is a FASTQ compression tool especially designed for nanopore sequencing FASTQ files.

   :homepage: https://github.com/guilledufort/EnanoFASTQ
   :license: MIT / MIT License
   :recipe: /`enano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enano/meta.yaml>`_

   


.. conda:package:: enano

   |downloads_enano| |docker_enano|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install enano

   and update with::

      conda update enano

   or use the docker container::

      docker pull quay.io/biocontainers/enano:<tag>

   (see `enano/tags`_ for valid values for ``<tag>``)


.. |downloads_enano| image:: https://img.shields.io/conda/dn/bioconda/enano.svg?style=flat
   :target: https://anaconda.org/bioconda/enano
   :alt:   (downloads)
.. |docker_enano| image:: https://quay.io/repository/biocontainers/enano/status
   :target: https://quay.io/repository/biocontainers/enano
.. _`enano/tags`: https://quay.io/repository/biocontainers/enano?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enano/README.html