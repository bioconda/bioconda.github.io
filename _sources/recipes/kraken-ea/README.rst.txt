:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken-ea'
.. highlight: bash

kraken-ea
=========

.. conda:recipe:: kraken-ea
   :replaces_section_title:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies. This is a modified version allowing for splitting of fastq files based on read classifications.

   :homepage: https://github.com/ExpressionAnalysis/kraken/tree/v0.10.5-beta-ea.2
   :license: GPLv3
   :recipe: /`kraken-ea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-ea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken-ea/meta.yaml>`_

   


.. conda:package:: kraken-ea

   |downloads_kraken-ea| |docker_kraken-ea|

   :versions: 0.10.5ea.3-3, 0.10.5ea.3-2, 0.10.5ea.3-1, 0.10.5ea.3-0
   
   :depends jellyfish: 1.1.11.*
   
   :depends libgcc-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kraken-ea

   and update with::

      conda update kraken-ea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kraken-ea:<tag>

   (see `kraken-ea/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken-ea| image:: https://img.shields.io/conda/dn/bioconda/kraken-ea.svg?style=flat
   :alt:   (downloads)
.. |docker_kraken-ea| image:: https://quay.io/repository/biocontainers/kraken-ea/status
   :target: https://quay.io/repository/biocontainers/kraken-ea
.. _`kraken-ea/tags`: https://quay.io/repository/biocontainers/kraken-ea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken-ea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken-ea/README.html