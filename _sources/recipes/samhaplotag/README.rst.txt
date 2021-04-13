:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samhaplotag'
.. highlight: bash

samhaplotag
===========

.. conda:recipe:: samhaplotag
   :replaces_section_title:
   :noindex:

   Processes haplotag barcodes in SAM format.

   :homepage: https://github.com/wtsi-hpag/SamHaplotag
   :license: MIT / MIT
   :recipe: /`samhaplotag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samhaplotag/meta.yaml>`_

   Converts BC\/QT barcode SAM tags into haplotag RX\, QX and BX tags. Also contains a tool for converting barcodes from haplotag to 10x in fastq format. 


.. conda:package:: samhaplotag

   |downloads_samhaplotag| |docker_samhaplotag|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samhaplotag

   and update with::

      conda update samhaplotag

   or use the docker container::

      docker pull quay.io/biocontainers/samhaplotag:<tag>

   (see `samhaplotag/tags`_ for valid values for ``<tag>``)


.. |downloads_samhaplotag| image:: https://img.shields.io/conda/dn/bioconda/samhaplotag.svg?style=flat
   :target: https://anaconda.org/bioconda/samhaplotag
   :alt:   (downloads)
.. |docker_samhaplotag| image:: https://quay.io/repository/biocontainers/samhaplotag/status
   :target: https://quay.io/repository/biocontainers/samhaplotag
.. _`samhaplotag/tags`: https://quay.io/repository/biocontainers/samhaplotag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samhaplotag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samhaplotag/README.html