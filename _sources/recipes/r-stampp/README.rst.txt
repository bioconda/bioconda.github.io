:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-stampp'
.. highlight: bash

r-stampp
========

.. conda:recipe:: r-stampp
   :replaces_section_title:

   Allows users to calculate pairwise Nei\'s Genetic Distances \(Nei 1972\)\, pairwise Fixation Indexes \(Fst\) \(Weir \& Cockerham 1984\) and also Genomic Relationship matrixes following Yang et al. \(2010\) in mixed and single ploidy populations. Bootstrapping across loci is implemented during Fst calculation to generate confidence intervals and p\-values around pairwise Fst values. StAMPP utilises SNP genotype data of any ploidy level \(with the ability to handle missing data\) and is coded to   utilise multithreading where available to allow efficient analysis of large datasets. StAMPP is able to handle genotype data from genlight objects  allowing integration with other packages such adegenet. Please refer to LW Pembleton\, NOI Cogan \& JW Forster\, 2013\, Molecular Ecology Resources\, 13\(5\)\, 946\-952. \<doi\:10.1111\/1755\-0998.12129\> for the appropriate citation and user manual. Thank you in advance.

   :homepage: https://CRAN.R-project.org/package=StAMPP
   :license: GPL3 / GPL-3
   :recipe: /`r-stampp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stampp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stampp/meta.yaml>`_

   


.. conda:package:: r-stampp

   |downloads_r-stampp| |docker_r-stampp|

   :versions: 1.5.1-3, 1.5.1-2, 1.5.1-0
   
   :depends r-adegenet: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-pegas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-stampp

   and update with::

      conda update r-stampp

   or use the docker container::

      docker pull quay.io/biocontainers/r-stampp:<tag>

   (see `r-stampp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-stampp| image:: https://img.shields.io/conda/dn/bioconda/r-stampp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-stampp| image:: https://quay.io/repository/biocontainers/r-stampp/status
   :target: https://quay.io/repository/biocontainers/r-stampp
.. _`r-stampp/tags`: https://quay.io/repository/biocontainers/r-stampp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-stampp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-stampp/README.html