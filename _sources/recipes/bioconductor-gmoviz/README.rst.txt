:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmoviz'
.. highlight: bash

bioconductor-gmoviz
===================

.. conda:recipe:: bioconductor-gmoviz
   :replaces_section_title:
   :noindex:

   Seamless visualization of complex genomic variations in GMOs and edited cell lines

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/gmoviz.html
   :license: GPL-3
   :recipe: /`bioconductor-gmoviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmoviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmoviz/meta.yaml>`_

   Genetically modified organisms \(GMOs\) and cell lines are widely used models in all kinds of biological research. As part of characterising these models\, DNA sequencing technology and bioinformatics analyses are used systematically to study their genomes. Therefore\, large volumes of data are generated and various algorithms are applied to analyse this data\, which introduces a challenge on representing all findings in an informative and concise manner. \`gmoviz\` provides users with an easy way to visualise and facilitate the explanation of complex genomic editing events on a larger\, biologically\-relevant scale.


.. conda:package:: bioconductor-gmoviz

   |downloads_bioconductor-gmoviz| |docker_bioconductor-gmoviz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-colorspace: 
   :depends r-gridbase: 
   :depends r-pracma: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gmoviz

   and update with::

      conda update bioconductor-gmoviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmoviz:<tag>

   (see `bioconductor-gmoviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmoviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmoviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmoviz
   :alt:   (downloads)
.. |docker_bioconductor-gmoviz| image:: https://quay.io/repository/biocontainers/bioconductor-gmoviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmoviz
.. _`bioconductor-gmoviz/tags`: https://quay.io/repository/biocontainers/bioconductor-gmoviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmoviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmoviz/README.html