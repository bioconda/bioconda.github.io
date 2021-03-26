:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lca'
.. highlight: bash

lca
===

.. conda:recipe:: lca
   :replaces_section_title:
   :noindex:

   LCA \- Lowest Common Ancestor calculation tool

   :homepage: https://github.com/hildebra/LCA/
   :license: GPL-3.0-only
   :recipe: /`lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca/meta.yaml>`_

   


.. conda:package:: lca

   |downloads_lca| |docker_lca|

   :versions:
      
      

      ``0.21-1``,  ``0.21-0``,  ``0.18-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lca

   and update with::

      conda update lca

   or use the docker container::

      docker pull quay.io/biocontainers/lca:<tag>

   (see `lca/tags`_ for valid values for ``<tag>``)


.. |downloads_lca| image:: https://img.shields.io/conda/dn/bioconda/lca.svg?style=flat
   :target: https://anaconda.org/bioconda/lca
   :alt:   (downloads)
.. |docker_lca| image:: https://quay.io/repository/biocontainers/lca/status
   :target: https://quay.io/repository/biocontainers/lca
.. _`lca/tags`: https://quay.io/repository/biocontainers/lca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lca/README.html