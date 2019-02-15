:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atac'
.. highlight: bash

atac
====

.. conda:recipe:: atac
   :replaces_section_title:

   ATAC is a computational process for comparative mapping between two genome assemblies\, or between two different genomes

   :homepage: http://kmer.sourceforge.net/wiki/index.php/Overview_of_the_ATAC_process
   :license: GPL
   :recipe: /`atac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atac/meta.yaml>`_
   :links: biotools: :biotools:`atac`

   


.. conda:package:: atac

   |downloads_atac| |docker_atac|

   :versions: 2008-1, 2008-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atac

   and update with::

      conda update atac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/atac:<tag>

   (see `atac/tags`_ for valid values for ``<tag>``)


.. |downloads_atac| image:: https://img.shields.io/conda/dn/bioconda/atac.svg?style=flat
   :alt:   (downloads)
.. |docker_atac| image:: https://quay.io/repository/biocontainers/atac/status
   :target: https://quay.io/repository/biocontainers/atac
.. _`atac/tags`: https://quay.io/repository/biocontainers/atac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atac/README.html