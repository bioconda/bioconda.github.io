:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lighter'
.. highlight: bash

lighter
=======

.. conda:recipe:: lighter
   :replaces_section_title:

   Lighter is a kmer\-based error correction method for whole genome sequencing data

   :homepage: https://github.com/mourisl/Lighter
   :license: GPLv3
   :recipe: /`lighter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter/meta.yaml>`_
   :links: biotools: :biotools:`Lighter`

   


.. conda:package:: lighter

   |downloads_lighter| |docker_lighter|

   :versions: 1.1.2-1, 1.1.2-0, 1.1.1-4, 1.1.1-3, 1.1.1-2, 1.1.1-1, 1.1.1-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lighter

   and update with::

      conda update lighter

   or use the docker container::

      docker pull quay.io/biocontainers/lighter:<tag>

   (see `lighter/tags`_ for valid values for ``<tag>``)


.. |downloads_lighter| image:: https://img.shields.io/conda/dn/bioconda/lighter.svg?style=flat
   :alt:   (downloads)
.. |docker_lighter| image:: https://quay.io/repository/biocontainers/lighter/status
   :target: https://quay.io/repository/biocontainers/lighter
.. _`lighter/tags`: https://quay.io/repository/biocontainers/lighter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lighter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lighter/README.html