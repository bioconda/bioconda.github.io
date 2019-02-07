.. title:: Package Recipe 'bioconductor-diffcyt'
.. highlight: bash


bioconductor-diffcyt
====================

.. conda:recipe:: bioconductor-diffcyt
   :replaces_section_title:

   Statistical methods for differential discovery analyses in high\-dimensional cytometry data \(including flow cytometry\, mass cytometry or CyTOF\, and oligonucleotide\-tagged cytometry\)\, based on \(i\) high\-resolution clustering and \(ii\) empirical Bayes moderated tests adapted from transcriptomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/diffcyt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffcyt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcyt/meta.yaml>`_

   


.. conda:package:: bioconductor-diffcyt

   |downloads_bioconductor-diffcyt| |docker_bioconductor-diffcyt|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowsom` >=1.14.0,<1.15.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-dplyr`  :conda:package:`r-lme4`  :conda:package:`r-magrittr`  :conda:package:`r-multcomp`  :conda:package:`r-reshape2`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-diffcyt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffcyt

   and update with::

      conda update bioconductor-diffcyt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diffcyt


.. |required_by_bioconductor-diffcyt| conda:required_by:: bioconductor-diffcyt
.. |downloads_bioconductor-diffcyt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffcyt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffcyt| image:: https://quay.io/repository/biocontainers/bioconductor-diffcyt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffcyt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffcyt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffcyt/README.html

