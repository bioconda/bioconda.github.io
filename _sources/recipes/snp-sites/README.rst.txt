:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-sites'
.. highlight: bash

snp-sites
=========

.. conda:recipe:: snp-sites
   :replaces_section_title:

   Finds SNP sites from a multi\-FASTA alignment file.

   :homepage: https://github.com/sanger-pathogens/snp-sites
   :license: GPL / GPL-3.0
   :recipe: /`snp-sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-sites/meta.yaml>`_

   


.. conda:package:: snp-sites

   |downloads_snp-sites| |docker_snp-sites|

   :versions: 2.4.1-1, 2.4.1-0, 2.4.0-3, 2.4.0-0, 2.3.3-1, 2.3.3-0, 2.3.2-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-sites

   and update with::

      conda update snp-sites

   or use the docker container::

      docker pull quay.io/biocontainers/snp-sites:<tag>

   (see `snp-sites/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-sites| image:: https://img.shields.io/conda/dn/bioconda/snp-sites.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-sites
   :alt:   (downloads)
.. |docker_snp-sites| image:: https://quay.io/repository/biocontainers/snp-sites/status
   :target: https://quay.io/repository/biocontainers/snp-sites
.. _`snp-sites/tags`: https://quay.io/repository/biocontainers/snp-sites?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-sites/README.html