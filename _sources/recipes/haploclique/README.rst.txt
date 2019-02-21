:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploclique'
.. highlight: bash

haploclique
===========

.. conda:recipe:: haploclique/1.3.1
   :replaces_section_title:

   Viral quasispecies assembly via maximal clique finding. A method to reconstruct viral haplotypes and detect large insertions and deletions from NGS data.

   :homepage: https://github.com/cbg-ethz/haploclique
   :license: GPL3 / GPLv3+
   :recipe: /`haploclique <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique>`_/`1.3.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique/1.3.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique/1.3.1/meta.yaml>`_

   


.. conda:package:: haploclique

   |downloads_haploclique| |docker_haploclique|

   :versions: 1.3.1-2, 1.3.1-1, 1.3.1-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haploclique

   and update with::

      conda update haploclique

   or use the docker container::

      docker pull quay.io/biocontainers/haploclique:<tag>

   (see `haploclique/tags`_ for valid values for ``<tag>``)


.. |downloads_haploclique| image:: https://img.shields.io/conda/dn/bioconda/haploclique.svg?style=flat
   :alt:   (downloads)
.. |docker_haploclique| image:: https://quay.io/repository/biocontainers/haploclique/status
   :target: https://quay.io/repository/biocontainers/haploclique
.. _`haploclique/tags`: https://quay.io/repository/biocontainers/haploclique?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploclique/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploclique/README.html