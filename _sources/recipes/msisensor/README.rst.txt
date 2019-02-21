:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor'
.. highlight: bash

msisensor
=========

.. conda:recipe:: msisensor
   :replaces_section_title:

   MSIsensor is a C\+\+ program to detect replication slippage variants at microsatellite regions\, and differentiate them as somatic or germline.

   :homepage: https://github.com/ding-lab/msisensor
   :license: MIT
   :recipe: /`msisensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor/meta.yaml>`_

   


.. conda:package:: msisensor

   |downloads_msisensor| |docker_msisensor|

   :versions: 0.5-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends ncurses: >=6.1,<6.2.0a0
   
   :depends openmp: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msisensor

   and update with::

      conda update msisensor

   or use the docker container::

      docker pull quay.io/biocontainers/msisensor:<tag>

   (see `msisensor/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor| image:: https://img.shields.io/conda/dn/bioconda/msisensor.svg?style=flat
   :alt:   (downloads)
.. |docker_msisensor| image:: https://quay.io/repository/biocontainers/msisensor/status
   :target: https://quay.io/repository/biocontainers/msisensor
.. _`msisensor/tags`: https://quay.io/repository/biocontainers/msisensor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor/README.html