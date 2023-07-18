:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signifinder'
.. highlight: bash

bioconductor-signifinder
========================

.. conda:recipe:: bioconductor-signifinder
   :replaces_section_title:
   :noindex:

   Implementations of transcriptional cancer signatures

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/signifinder.html
   :license: AGPL-3
   :recipe: /`bioconductor-signifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder/meta.yaml>`_

   signifinder is an R package for computing and exploring a compendium of tumor signatures. It allows computing signatures scores providing the only gene expression values and returns a single\-sample score. Currently\, signifinder contains 46 distinct signatures collected from the literature.


.. conda:package:: bioconductor-signifinder

   |downloads_bioconductor-signifinder| |docker_bioconductor-signifinder|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-consensusov: ``>=1.22.0,<1.23.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dgeobj.utils: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-maxstat: 
   :depends r-openair: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signifinder

   and update with::

      conda update bioconductor-signifinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signifinder:<tag>

   (see `bioconductor-signifinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signifinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signifinder
   :alt:   (downloads)
.. |docker_bioconductor-signifinder| image:: https://quay.io/repository/biocontainers/bioconductor-signifinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signifinder
.. _`bioconductor-signifinder/tags`: https://quay.io/repository/biocontainers/bioconductor-signifinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signifinder";
        var versions = ["1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signifinder/README.html