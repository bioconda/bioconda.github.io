:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamsnap'
.. highlight: bash

bamsnap
=======

.. conda:recipe:: bamsnap
   :replaces_section_title:
   :noindex:

   A converter from .bam to .png for specific genomic region.

   :homepage: https://github.com/danielmsk/bamsnap
   :license: MIT / MIT
   :recipe: /`bamsnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsnap/meta.yaml>`_

   


.. conda:package:: bamsnap

   |downloads_bamsnap| |docker_bamsnap|

   :versions:
      
      

      ``0.2.17-0``

      

   
   :depends pillow: ``>=2.0.0``
   :depends pyfaidx: ``>=0.5.3.1``
   :depends pysam: ``>=0.15.0``
   :depends pytabix: ``>=0.0.2``
   :depends python: ``>=3.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamsnap

   and update with::

      conda update bamsnap

   or use the docker container::

      docker pull quay.io/biocontainers/bamsnap:<tag>

   (see `bamsnap/tags`_ for valid values for ``<tag>``)


.. |downloads_bamsnap| image:: https://img.shields.io/conda/dn/bioconda/bamsnap.svg?style=flat
   :target: https://anaconda.org/bioconda/bamsnap
   :alt:   (downloads)
.. |docker_bamsnap| image:: https://quay.io/repository/biocontainers/bamsnap/status
   :target: https://quay.io/repository/biocontainers/bamsnap
.. _`bamsnap/tags`: https://quay.io/repository/biocontainers/bamsnap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamsnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamsnap/README.html