:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin'
.. highlight: bash

pangolin
========

.. conda:recipe:: pangolin
   :replaces_section_title:

   Phylogenetic Assignment of Named Global Outbreak LINeages

   :homepage: https://github.com/hCoV-2019/pangolin
   :license: GPL-3.0
   :recipe: /`pangolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin/meta.yaml>`_

   


.. conda:package:: pangolin

   |downloads_pangolin| |docker_pangolin|

   :versions: 1.1.14-0, 1.1.13-0, 1.1.11-0, 1.1.5-0, 1.1-0
   
   :depends biopython: 
   :depends dendropy: >=4.4.0
   :depends iqtree: <2
   :depends mafft: 
   :depends pandas: 
   :depends pip: 
   :depends python: >=3.6
   :depends pytools: 2020.1.*
   :depends snakemake-minimal: 5.13.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pangolin

   and update with::

      conda update pangolin

   or use the docker container::

      docker pull quay.io/biocontainers/pangolin:<tag>

   (see `pangolin/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolin| image:: https://img.shields.io/conda/dn/bioconda/pangolin.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin
   :alt:   (downloads)
.. |docker_pangolin| image:: https://quay.io/repository/biocontainers/pangolin/status
   :target: https://quay.io/repository/biocontainers/pangolin
.. _`pangolin/tags`: https://quay.io/repository/biocontainers/pangolin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin/README.html