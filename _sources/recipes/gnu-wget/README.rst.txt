:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnu-wget'
.. highlight: bash

gnu-wget
========

.. conda:recipe:: gnu-wget
   :replaces_section_title:
   :noindex:

   Retrieve files using HTTP\, HTTPS and FTP

   :homepage: http://www.gnu.org/software/wget/
   :license: GPLv3
   :recipe: /`gnu-wget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget/meta.yaml>`_

   


.. conda:package:: gnu-wget

   |downloads_gnu-wget| |docker_gnu-wget|

   :versions:
      
      

      ``1.18-4``,  ``1.18-3``,  ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libidn2: ``>=2,<3.0a0``
   :depends libunistring: ``>=0,<1.0a0``
   :depends openssl: ``>=1.0.2n,<1.0.3a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnu-wget

   and update with::

      conda update gnu-wget

   or use the docker container::

      docker pull quay.io/biocontainers/gnu-wget:<tag>

   (see `gnu-wget/tags`_ for valid values for ``<tag>``)


.. |downloads_gnu-wget| image:: https://img.shields.io/conda/dn/bioconda/gnu-wget.svg?style=flat
   :target: https://anaconda.org/bioconda/gnu-wget
   :alt:   (downloads)
.. |docker_gnu-wget| image:: https://quay.io/repository/biocontainers/gnu-wget/status
   :target: https://quay.io/repository/biocontainers/gnu-wget
.. _`gnu-wget/tags`: https://quay.io/repository/biocontainers/gnu-wget?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-wget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-wget/README.html