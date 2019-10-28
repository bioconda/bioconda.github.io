:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpiphy'
.. highlight: bash

snpiphy
=======

.. conda:recipe:: snpiphy
   :replaces_section_title:

   An automated snp phylogeny pipeline

   :homepage: https://github.com/bogemad/snpiphy
   :license: GPL / GPLv3
   :recipe: /`snpiphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy/meta.yaml>`_

   


.. conda:package:: snpiphy

   |downloads_snpiphy| |docker_snpiphy|

   :versions: 0.3-1, 0.3-0, 0.2-0, 0.1-1, 0.1-0
   
   :depends biopython: 
   :depends gubbins: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3
   :depends snippy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpiphy

   and update with::

      conda update snpiphy

   or use the docker container::

      docker pull quay.io/biocontainers/snpiphy:<tag>

   (see `snpiphy/tags`_ for valid values for ``<tag>``)


.. |downloads_snpiphy| image:: https://img.shields.io/conda/dn/bioconda/snpiphy.svg?style=flat
   :target: https://anaconda.org/bioconda/snpiphy
   :alt:   (downloads)
.. |docker_snpiphy| image:: https://quay.io/repository/biocontainers/snpiphy/status
   :target: https://quay.io/repository/biocontainers/snpiphy
.. _`snpiphy/tags`: https://quay.io/repository/biocontainers/snpiphy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpiphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpiphy/README.html