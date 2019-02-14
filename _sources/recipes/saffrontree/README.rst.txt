:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saffrontree'
.. highlight: bash

saffrontree
===========

.. conda:recipe:: saffrontree
   :replaces_section_title:

   SaffronTree\: Reference free rapid phylogenetic tree construction from raw read data

   :homepage: https://github.com/sanger-pathogens/saffrontree
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`saffrontree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saffrontree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saffrontree/meta.yaml>`_

   


.. conda:package:: saffrontree

   |downloads_saffrontree| |docker_saffrontree|

   :versions: 0.1.2-0
   
   :depends biopython: 
   
   :depends dendropy: >=4.1.0
   
   :depends kmc: >=2.3.0
   
   :depends pyfastaq: >=3.12.0
   
   :depends python: 3.5*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install saffrontree

   and update with::

      conda update saffrontree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/saffrontree:<tag>

   (see `saffrontree/tags`_ for valid values for ``<tag>``)


.. |downloads_saffrontree| image:: https://img.shields.io/conda/dn/bioconda/saffrontree.svg?style=flat
   :alt:   (downloads)
.. |docker_saffrontree| image:: https://quay.io/repository/biocontainers/saffrontree/status
   :target: https://quay.io/repository/biocontainers/saffrontree
.. _`saffrontree/tags`: https://quay.io/repository/biocontainers/saffrontree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saffrontree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saffrontree/README.html