:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-dists'
.. highlight: bash

snp-dists
=========

.. conda:recipe:: snp-dists
   :replaces_section_title:

   Convert a FASTA alignment to SNP distance matrix

   :homepage: https://github.com/tseemann/snp-dists
   :license: GPL3
   :recipe: /`snp-dists <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-dists>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-dists/meta.yaml>`_

   


.. conda:package:: snp-dists

   |downloads_snp-dists| |docker_snp-dists|

   :versions: 0.7.0-0, 0.6.3-1, 0.6.3-0, 0.6.2-0, 0.6-1, 0.6-0, 0.5-0, 0.2-2, 0.2-1, 0.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-dists

   and update with::

      conda update snp-dists

   or use the docker container::

      docker pull quay.io/biocontainers/snp-dists:<tag>

   (see `snp-dists/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-dists| image:: https://img.shields.io/conda/dn/bioconda/snp-dists.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-dists
   :alt:   (downloads)
.. |docker_snp-dists| image:: https://quay.io/repository/biocontainers/snp-dists/status
   :target: https://quay.io/repository/biocontainers/snp-dists
.. _`snp-dists/tags`: https://quay.io/repository/biocontainers/snp-dists?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-dists/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-dists/README.html