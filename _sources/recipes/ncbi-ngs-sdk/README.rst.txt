:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-ngs-sdk'
.. highlight: bash

ncbi-ngs-sdk
============

.. conda:recipe:: ncbi-ngs-sdk
   :replaces_section_title:

   NGS is a new\, domain\-specific API for accessing reads\, alignments and pileups produced from Next Generation Sequencing.

   :homepage: https://github.com/ncbi/ngs
   :license: Public Domain
   :recipe: /`ncbi-ngs-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk/meta.yaml>`_

   


.. conda:package:: ncbi-ngs-sdk

   |downloads_ncbi-ngs-sdk| |docker_ncbi-ngs-sdk|

   :versions: 2.10.1-0, 2.10.0-0, 2.9.3-0, 2.9.1-0, 2.9.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libiconv: >=1.15,<1.16.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends libxml2: >=2.9.10,<2.10.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-ngs-sdk

   and update with::

      conda update ncbi-ngs-sdk

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-ngs-sdk:<tag>

   (see `ncbi-ngs-sdk/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-ngs-sdk| image:: https://img.shields.io/conda/dn/bioconda/ncbi-ngs-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-ngs-sdk
   :alt:   (downloads)
.. |docker_ncbi-ngs-sdk| image:: https://quay.io/repository/biocontainers/ncbi-ngs-sdk/status
   :target: https://quay.io/repository/biocontainers/ncbi-ngs-sdk
.. _`ncbi-ngs-sdk/tags`: https://quay.io/repository/biocontainers/ncbi-ngs-sdk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html