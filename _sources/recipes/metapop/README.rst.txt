:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapop'
.. highlight: bash

metapop
=======

.. conda:recipe:: metapop
   :replaces_section_title:
   :noindex:

   A pipeline for the macro\- and micro\-diversity analyses and visualization of metagenomic\-derived populations

   :homepage: https://https://github.com/metaGmetapop/metapop
   :license: GPL / GPL-2.0
   :recipe: /`metapop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapop/meta.yaml>`_

   


.. conda:package:: metapop

   |downloads_metapop| |docker_metapop|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bcftools: ``1.9.*``
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends r-base: 
   :depends r-bit64: 
   :depends r-compositions: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
   :depends r-vegan: 
   :depends samtools: ``1.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metapop

   and update with::

      conda update metapop

   or use the docker container::

      docker pull quay.io/biocontainers/metapop:<tag>

   (see `metapop/tags`_ for valid values for ``<tag>``)


.. |downloads_metapop| image:: https://img.shields.io/conda/dn/bioconda/metapop.svg?style=flat
   :target: https://anaconda.org/bioconda/metapop
   :alt:   (downloads)
.. |docker_metapop| image:: https://quay.io/repository/biocontainers/metapop/status
   :target: https://quay.io/repository/biocontainers/metapop
.. _`metapop/tags`: https://quay.io/repository/biocontainers/metapop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapop/README.html