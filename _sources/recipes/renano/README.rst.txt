:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'renano'
.. highlight: bash

renano
======

.. conda:recipe:: renano
   :replaces_section_title:
   :noindex:

   RENANO is a FASTQ lossless reference\-based compression algorithm especially designed for nanopore sequencing FASTQ files.

   :homepage: https://github.com/guilledufort/RENANO
   :license: MIT / MIT License
   :recipe: /`renano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renano/meta.yaml>`_

   


.. conda:package:: renano

   |downloads_renano| |docker_renano|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install renano

   and update with::

      conda update renano

   or use the docker container::

      docker pull quay.io/biocontainers/renano:<tag>

   (see `renano/tags`_ for valid values for ``<tag>``)


.. |downloads_renano| image:: https://img.shields.io/conda/dn/bioconda/renano.svg?style=flat
   :target: https://anaconda.org/bioconda/renano
   :alt:   (downloads)
.. |docker_renano| image:: https://quay.io/repository/biocontainers/renano/status
   :target: https://quay.io/repository/biocontainers/renano
.. _`renano/tags`: https://quay.io/repository/biocontainers/renano?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/renano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/renano/README.html