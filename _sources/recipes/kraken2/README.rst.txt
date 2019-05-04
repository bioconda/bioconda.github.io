:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kraken2'
.. highlight: bash

kraken2
=======

.. conda:recipe:: kraken2
   :replaces_section_title:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: http://ccb.jhu.edu/software/kraken/
   :license: GPLv3
   :recipe: /`kraken2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken2/meta.yaml>`_
   :links: biotools: :biotools:`kraken2`, doi: :doi:`10.1186/gb-2014-15-3-r46`

   


.. conda:package:: kraken2

   |downloads_kraken2| |docker_kraken2|

   :versions: 2.0.8_beta-0, 2.0.7_beta-3, 2.0.7_beta-2, 2.0.7_beta-1, 2.0.7_beta-0
   
   :depends blast: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends rsync: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kraken2

   and update with::

      conda update kraken2

   or use the docker container::

      docker pull quay.io/biocontainers/kraken2:<tag>

   (see `kraken2/tags`_ for valid values for ``<tag>``)


.. |downloads_kraken2| image:: https://img.shields.io/conda/dn/bioconda/kraken2.svg?style=flat
   :alt:   (downloads)
.. |docker_kraken2| image:: https://quay.io/repository/biocontainers/kraken2/status
   :target: https://quay.io/repository/biocontainers/kraken2
.. _`kraken2/tags`: https://quay.io/repository/biocontainers/kraken2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken2/README.html