:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svaba'
.. highlight: bash

svaba
=====

.. conda:recipe:: svaba
   :replaces_section_title:
   :noindex:

   Structural variation and indel detection by local assembly

   :homepage: https://github.com/walaj/svaba
   :license: GPLv3
   :recipe: /`svaba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svaba/meta.yaml>`_

   


.. conda:package:: svaba

   |downloads_svaba| |docker_svaba|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends xz: ``>=5.2.4,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svaba

   and update with::

      conda update svaba

   or use the docker container::

      docker pull quay.io/biocontainers/svaba:<tag>

   (see `svaba/tags`_ for valid values for ``<tag>``)


.. |downloads_svaba| image:: https://img.shields.io/conda/dn/bioconda/svaba.svg?style=flat
   :target: https://anaconda.org/bioconda/svaba
   :alt:   (downloads)
.. |docker_svaba| image:: https://quay.io/repository/biocontainers/svaba/status
   :target: https://quay.io/repository/biocontainers/svaba
.. _`svaba/tags`: https://quay.io/repository/biocontainers/svaba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svaba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svaba/README.html