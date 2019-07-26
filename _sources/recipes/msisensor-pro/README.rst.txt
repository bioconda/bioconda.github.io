:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor-pro'
.. highlight: bash

msisensor-pro
=============

.. conda:recipe:: msisensor-pro
   :replaces_section_title:

   Microsatellite Instability \(MSI\) detection using high\-throughput sequencing data.

   :homepage: https://github.com/xjtu-omics/msisensor-pro
   :license: MIT
   :recipe: /`msisensor-pro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-pro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-pro/meta.yaml>`_

   


.. conda:package:: msisensor-pro

   |downloads_msisensor-pro| |docker_msisensor-pro|

   :versions: 0.1.1-0, 0.0.1-0
   
   :depends libcxx: >=4.0.1
   :depends llvm-openmp: 
   :depends ncurses: >=6.1,<6.2.0a0
   :depends openmp: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msisensor-pro

   and update with::

      conda update msisensor-pro

   or use the docker container::

      docker pull quay.io/biocontainers/msisensor-pro:<tag>

   (see `msisensor-pro/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor-pro| image:: https://img.shields.io/conda/dn/bioconda/msisensor-pro.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor-pro
   :alt:   (downloads)
.. |docker_msisensor-pro| image:: https://quay.io/repository/biocontainers/msisensor-pro/status
   :target: https://quay.io/repository/biocontainers/msisensor-pro
.. _`msisensor-pro/tags`: https://quay.io/repository/biocontainers/msisensor-pro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor-pro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor-pro/README.html