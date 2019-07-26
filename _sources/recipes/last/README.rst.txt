:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'last'
.. highlight: bash

last
====

.. conda:recipe:: last
   :replaces_section_title:

   LAST finds similar regions between sequences\, and aligns them. It is designed for comparing large datasets to each other \(e.g. vertebrate genomes and\/or large numbers of DNA reads\).

   :homepage: http://last.cbrc.jp/
   :license: GPL / GPLv3
   :recipe: /`last <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last/meta.yaml>`_
   :links: biotools: :biotools:`last`

   


.. conda:package:: last

   |downloads_last| |docker_last|

   :versions: 982-0, 963-1, 963-0, 941-2, 941-0, 876-0, 874-2, 874-1, 874-0, 847-0, 719-2, 719-1, 638-6, 638-5, 638-4, 638-3, 638-2, 638-1, 490-4, 490-3, 490-2, 490-1
   
   :depends future: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends parallel: 
   :depends pillow: 
   :depends python: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install last

   and update with::

      conda update last

   or use the docker container::

      docker pull quay.io/biocontainers/last:<tag>

   (see `last/tags`_ for valid values for ``<tag>``)


.. |downloads_last| image:: https://img.shields.io/conda/dn/bioconda/last.svg?style=flat
   :target: https://anaconda.org/bioconda/last
   :alt:   (downloads)
.. |docker_last| image:: https://quay.io/repository/biocontainers/last/status
   :target: https://quay.io/repository/biocontainers/last
.. _`last/tags`: https://quay.io/repository/biocontainers/last?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/last/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/last/README.html