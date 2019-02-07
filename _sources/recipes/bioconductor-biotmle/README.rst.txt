.. title:: Package Recipe 'bioconductor-biotmle'
.. highlight: bash


bioconductor-biotmle
====================

.. conda:recipe:: bioconductor-biotmle
   :replaces_section_title:

   This package facilitates the discovery of biomarkers from biological sequencing data \(e.g.\, microarrays\, RNA\-seq\) based on the associations of potential biomarkers with exposure and outcome variables by implementing an estimation procedure that combines a generalization of moderated statistics with targeted minimum loss\-based estimates \(TMLE\) of parameters defined via causal inference \(e.g.\, Average Treatment Effect\) whose estimators admit asymptotically linear representations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biotmle.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle/meta.yaml>`_

   


.. conda:package:: bioconductor-biotmle

   |downloads_bioconductor-biotmle| |docker_bioconductor-biotmle|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dofuture`  :conda:package:`r-dplyr`  :conda:package:`r-future`  :conda:package:`r-ggplot2`  :conda:package:`r-ggsci`  :conda:package:`r-superheat`  :conda:package:`r-tmle`  

   :required~by: |required_by_bioconductor-biotmle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotmle

   and update with::

      conda update bioconductor-biotmle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biotmle


.. |required_by_bioconductor-biotmle| conda:required_by:: bioconductor-biotmle
.. |downloads_bioconductor-biotmle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmle.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biotmle| image:: https://quay.io/repository/biocontainers/bioconductor-biotmle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmle/README.html

