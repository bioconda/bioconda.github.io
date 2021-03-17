:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacgwasim'
.. highlight: bash

bacgwasim
=========

.. conda:recipe:: bacgwasim
   :replaces_section_title:
   :noindex:

   BacGWASim is a simulator for Bacterial Machine learning and Genome\-wide Association studies.


   :homepage: https://github.com/Morteza-M-Saber/BacGWASim
   :license: MIT
   :recipe: /`bacgwasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacgwasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacgwasim/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bth457`

   


.. conda:package:: bacgwasim

   |downloads_bacgwasim| |docker_bacgwasim|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bcftools: ``1.10.2``
   :depends ete3: 
   :depends gcta: 
   :depends haploview: 
   :depends numpy: 
   :depends openjdk: ``=8|10``
   :depends pandas: 
   :depends plink: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends simbac: 
   :depends snakemake: 
   :depends snp-sites: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bacgwasim

   and update with::

      conda update bacgwasim

   or use the docker container::

      docker pull quay.io/biocontainers/bacgwasim:<tag>

   (see `bacgwasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bacgwasim| image:: https://img.shields.io/conda/dn/bioconda/bacgwasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bacgwasim
   :alt:   (downloads)
.. |docker_bacgwasim| image:: https://quay.io/repository/biocontainers/bacgwasim/status
   :target: https://quay.io/repository/biocontainers/bacgwasim
.. _`bacgwasim/tags`: https://quay.io/repository/biocontainers/bacgwasim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacgwasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacgwasim/README.html