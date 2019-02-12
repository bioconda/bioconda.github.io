:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itsx'
.. highlight: bash

itsx
====

.. conda:recipe:: itsx
   :replaces_section_title:

   ITSx is an open source software utility to extract the highly variable ITS1 and ITS2 subregions from ITS sequences\, which is commonly used as a molecular barcode for e.g. fungi.

   :homepage: http://microbiology.se/software/itsx/
   :license: GNU General Public License v3.0
   :recipe: /`itsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsx/meta.yaml>`_

   


.. conda:package:: itsx

   |downloads_itsx| |docker_itsx|

   :versions: 1.1b-1, 1.1b-0
   
   :depends hmmer: >=3.1b2
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install itsx

   and update with::

      conda update itsx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/itsx:<tag>

   (see `itsx/tags`_ for valid values for ``<tag>``)


.. |downloads_itsx| image:: https://img.shields.io/conda/dn/bioconda/itsx.svg?style=flat
   :alt:   (downloads)
.. |docker_itsx| image:: https://quay.io/repository/biocontainers/itsx/status
   :target: https://quay.io/repository/biocontainers/itsx
.. _`itsx/tags`: https://quay.io/repository/biocontainers/itsx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsx/README.html