:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doubletrouble'
.. highlight: bash

bioconductor-doubletrouble
==========================

.. conda:recipe:: bioconductor-doubletrouble
   :replaces_section_title:
   :noindex:

   Identification and classification of duplicated genes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/doubletrouble.html
   :license: GPL-3
   :recipe: /`bioconductor-doubletrouble <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doubletrouble/meta.yaml>`_

   doubletrouble aims to identify duplicated genes from whole\-genome protein sequences and classify them based on their modes of duplication. The duplication modes are i. segmental duplication \(SD\)\; ii. tandem duplication \(TD\)\; iii. proximal duplication \(PD\)\; iv. transposed duplication \(TRD\) and\; v. dispersed duplication \(DD\). Transposon\-derived duplicates \(TRD\) can be further subdivided into rTRD \(retrotransposon\-derived duplication\) and dTRD \(DNA transposon\-derived duplication\). If users want a simpler classification scheme\, duplicates can also be classified into SD\- and SSD\-derived \(small\-scale duplication\) gene pairs. Besides classifying gene pairs\, users can also classify genes\, so that each gene is assigned a unique mode of duplication. Users can also calculate substitution rates per substitution site \(i.e.\, Ka and Ks\) from duplicate pairs\, find peaks in Ks distributions with Gaussian Mixture Models \(GMMs\)\, and classify gene pairs into age groups based on Ks peaks.


.. conda:package:: bioconductor-doubletrouble

   |downloads_bioconductor-doubletrouble| |docker_bioconductor-doubletrouble|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-msa2dist: ``>=1.6.0,<1.7.0``
   :depends bioconductor-syntenet: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-doubletrouble

   and update with::

      mamba update bioconductor-doubletrouble

  To create a new environment, run::

      mamba create --name myenvname bioconductor-doubletrouble

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.2.1","1.0.0"];
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