:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlemoleculefootprinting'
.. highlight: bash

bioconductor-singlemoleculefootprinting
=======================================

.. conda:recipe:: bioconductor-singlemoleculefootprinting
   :replaces_section_title:
   :noindex:

   Analysis tools for Single Molecule Footprinting \(SMF\) data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SingleMoleculeFootprinting.html
   :license: GPL-3
   :recipe: /`bioconductor-singlemoleculefootprinting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting/meta.yaml>`_

   SingleMoleculeFootprinting is an R package providing functions to analyze Single Molecule Footprinting \(SMF\) data. Following the workflow exemplified in its vignette\, the user will be able to perform basic data analysis of SMF data with minimal coding effort. Starting from an aligned bam file\, we show how to perform quality controls over sequencing libraries\, extract methylation information at the single molecule level accounting for the two possible kind of SMF experiments \(single enzyme or double enzyme\)\, classify single molecules based on their patterns of molecular occupancy\, plot SMF information at a given genomic location


.. conda:package:: bioconductor-singlemoleculefootprinting

   |downloads_bioconductor-singlemoleculefootprinting| |docker_bioconductor-singlemoleculefootprinting|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-quasr: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlemoleculefootprinting

   and update with::

      conda update bioconductor-singlemoleculefootprinting

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlemoleculefootprinting:<tag>

   (see `bioconductor-singlemoleculefootprinting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlemoleculefootprinting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlemoleculefootprinting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlemoleculefootprinting
   :alt:   (downloads)
.. |docker_bioconductor-singlemoleculefootprinting| image:: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting
.. _`bioconductor-singlemoleculefootprinting/tags`: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlemoleculefootprinting";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html