:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megahit'
.. highlight: bash

megahit
=======

.. conda:recipe:: megahit
   :replaces_section_title:

   MEGAHIT\: An ultra\-fast single\-node solution for large and complex
   metagenomics assembly via succinct de Bruijn graph

   :homepage: https://github.com/voutcn/megahit
   :license: GPL / GPL-3.0
   :recipe: /`megahit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megahit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megahit/meta.yaml>`_
   :links: biotools: :biotools:`megahit`, doi: :doi:`10.1093/bioinformatics/btv033`

   


.. conda:package:: megahit

   |downloads_megahit| |docker_megahit|

   :versions: 1.2.6-0, 1.1.3-0, 1.1.2-1, 1.1.2-0, 1.1.1-0, 1.0.6-1, 1.0.3-1, 1.0.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megahit

   and update with::

      conda update megahit

   or use the docker container::

      docker pull quay.io/biocontainers/megahit:<tag>

   (see `megahit/tags`_ for valid values for ``<tag>``)


.. |downloads_megahit| image:: https://img.shields.io/conda/dn/bioconda/megahit.svg?style=flat
   :target: https://anaconda.org/bioconda/megahit
   :alt:   (downloads)
.. |docker_megahit| image:: https://quay.io/repository/biocontainers/megahit/status
   :target: https://quay.io/repository/biocontainers/megahit
.. _`megahit/tags`: https://quay.io/repository/biocontainers/megahit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megahit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megahit/README.html