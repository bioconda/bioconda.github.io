:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srprism'
.. highlight: bash

srprism
=======

.. conda:recipe:: srprism
   :replaces_section_title:
   :noindex:

   SRPRISM \- Short Read Alignment Tool

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/srprism/
   :license: Public Domain
   :recipe: /`srprism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism/meta.yaml>`_

   


.. conda:package:: srprism

   |downloads_srprism| |docker_srprism|

   :versions:
      
      

      ``2.4.24-3``,  ``2.4.24-2``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srprism

   and update with::

      conda update srprism

   or use the docker container::

      docker pull quay.io/biocontainers/srprism:<tag>

   (see `srprism/tags`_ for valid values for ``<tag>``)


.. |downloads_srprism| image:: https://img.shields.io/conda/dn/bioconda/srprism.svg?style=flat
   :target: https://anaconda.org/bioconda/srprism
   :alt:   (downloads)
.. |docker_srprism| image:: https://quay.io/repository/biocontainers/srprism/status
   :target: https://quay.io/repository/biocontainers/srprism
.. _`srprism/tags`: https://quay.io/repository/biocontainers/srprism?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srprism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srprism/README.html