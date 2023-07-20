:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doubletrouble'
.. highlight: bash

bioconductor-doubletrouble
==========================

.. conda:recipe:: bioconductor-doubletrouble
   :replaces_section_title:
   :noindex:

   Identification and classification of duplicated genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/doubletrouble.html
   :license: GPL-3
   :recipe: /`bioconductor-doubletrouble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble/meta.yaml>`_

   doubletrouble aims to identify duplicated genes from whole\-genome protein sequences and classify them based on their modes of duplication. The duplication modes are\: i. whole\-genome duplication \(WGD\)\; ii. tandem duplication \(TD\)\; iii. proximal duplication \(PD\)\; iv. transposed duplication \(TRD\) and\; v. dispersed duplication \(DD\). If users want a simpler classification scheme\, duplicates can also be classified into WGD\- and SSD\-derived \(small\-scale duplication\) gene pairs. Besides classifying gene pairs\, users can also classify genes\, so that each gene is assigned a unique mode of duplication. Users can also calculate substitution rates per substitution site \(i.e.\, Ka and Ks\) from duplicate pairs\, find peaks in Ks distributions with Gaussian Mixture Models \(GMMs\)\, and classify gene pairs into age groups based on Ks peaks.


.. conda:package:: bioconductor-doubletrouble

   |downloads_bioconductor-doubletrouble| |docker_bioconductor-doubletrouble|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-msa2dist: ``>=1.4.0,<1.5.0``
   :depends bioconductor-syntenet: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doubletrouble

   and update with::

      conda update bioconductor-doubletrouble

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doubletrouble:<tag>

   (see `bioconductor-doubletrouble/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doubletrouble| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doubletrouble.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doubletrouble
   :alt:   (downloads)
.. |docker_bioconductor-doubletrouble| image:: https://quay.io/repository/biocontainers/bioconductor-doubletrouble/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doubletrouble
.. _`bioconductor-doubletrouble/tags`: https://quay.io/repository/biocontainers/bioconductor-doubletrouble?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doubletrouble";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doubletrouble/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doubletrouble/README.html