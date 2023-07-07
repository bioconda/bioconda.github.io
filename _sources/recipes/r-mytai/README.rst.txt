:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mytai'
.. highlight: bash

r-mytai
=======

.. conda:recipe:: r-mytai
   :replaces_section_title:
   :noindex:

   Investigate the evolution of biological processes by capturing evolutionary signatures in transcriptomes \(Drost et al. \(2017\) \<doi\:10.1093\/bioinformatics\/btx835\>\). The aim of this tool is to provide a transcriptome analysis environment to quantify the average evolutionary age of genes contributing to a transcriptome of interest \(Drost et al. \(2016\) \<doi\:10.1101\/051565\>\).

   :homepage: https://github.com/drostlab/myTAI
   :license: GPL / GPLv3
   :recipe: /`r-mytai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai/meta.yaml>`_

   


.. conda:package:: r-mytai

   |downloads_r-mytai| |docker_r-mytai|

   :versions:
      
      

      ``0.9.3-0``

      

   
   :depends bioconductor-edger: 
   :depends fribidi: ``>=1.0.10,<2.0a0``
   :depends harfbuzz: ``>=6.0.0,<7.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: ``>=1.0.8``
   :depends r-dplyr: ``>=0.3.0``
   :depends r-fitdistrplus: ``>=1.0_2``
   :depends r-foreach: ``>=1.4.2``
   :depends r-ggplot2: ``>=1.0.1``
   :depends r-gridextra: 
   :depends r-nortest: ``>=1.0_2``
   :depends r-r.utils: ``>=2.12.2``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcpparmadillo: 
   :depends r-readr: ``>=0.2.2``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-scales: 
   :depends r-taxize: ``>=0.6.0``
   :depends r-textshaping: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mytai

   and update with::

      conda update r-mytai

   or use the docker container::

      docker pull quay.io/biocontainers/r-mytai:<tag>

   (see `r-mytai/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mytai| image:: https://img.shields.io/conda/dn/bioconda/r-mytai.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mytai
   :alt:   (downloads)
.. |docker_r-mytai| image:: https://quay.io/repository/biocontainers/r-mytai/status
   :target: https://quay.io/repository/biocontainers/r-mytai
.. _`r-mytai/tags`: https://quay.io/repository/biocontainers/r-mytai?tab=tags


.. raw:: html

    <script>
        var package = "r-mytai";
        var versions = ["0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mytai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mytai/README.html