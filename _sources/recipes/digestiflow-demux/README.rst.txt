:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digestiflow-demux'
.. highlight: bash

digestiflow-demux
=================

.. conda:recipe:: digestiflow-demux
   :replaces_section_title:

   Digestiflow Command Line Client.

   :homepage: https://github.com/bihealth/digestiflow-demux
   :license: MIT
   :recipe: /`digestiflow-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux/meta.yaml>`_

   A command line client tool to perform semiautomatic demultiplexing of Illumina
   flowcells using data from Digestiflow Server.


.. conda:package:: digestiflow-demux

   |downloads_digestiflow-demux| |docker_digestiflow-demux|

   :versions: 0.3.0-0, 0.2.0-0, 0.1.0-0
   
   :depends attrs: >=18.2.0
   :depends coloredlogs: >=10.0
   :depends git: 
   :depends python: >=3.5
   :depends requests: 
   :depends snakemake: >=5.4.0
   :depends toml: >=0.10.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install digestiflow-demux

   and update with::

      conda update digestiflow-demux

   or use the docker container::

      docker pull quay.io/biocontainers/digestiflow-demux:<tag>

   (see `digestiflow-demux/tags`_ for valid values for ``<tag>``)


.. |downloads_digestiflow-demux| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-demux.svg?style=flat
   :target: https://anaconda.org/bioconda/digestiflow-demux
   :alt:   (downloads)
.. |docker_digestiflow-demux| image:: https://quay.io/repository/biocontainers/digestiflow-demux/status
   :target: https://quay.io/repository/biocontainers/digestiflow-demux
.. _`digestiflow-demux/tags`: https://quay.io/repository/biocontainers/digestiflow-demux?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-demux/README.html