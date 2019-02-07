.. title:: Package Recipe 'bioconductor-cancermutationanalysis'
.. highlight: bash


bioconductor-cancermutationanalysis
===================================

.. conda:recipe:: bioconductor-cancermutationanalysis
   :replaces_section_title:

   This package implements gene and gene\-set level analysis methods for somatic mutation studies of cancer.  The gene\-level methods distinguish between driver genes \(which play an active role in tumorigenesis\) and passenger genes \(which are mutated in tumor samples\, but have no role in tumorigenesis\) and incorporate a two\-stage study design.  The gene\-set methods implement a patient\-oriented approach\, which calculates gene\-set scores for each sample\, then combines them across samples\; a gene\-oriented approach which uses the Wilcoxon test is also provided for comparison.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CancerMutationAnalysis.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-cancermutationanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancermutationanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancermutationanalysis/meta.yaml>`_
   :links: biotools: :biotools:`cancermutationanalysis`, doi: :doi:`10.1007/978-1-62703-721-1_7`

   


.. conda:package:: bioconductor-cancermutationanalysis

   |downloads_bioconductor-cancermutationanalysis| |docker_bioconductor-cancermutationanalysis|

   :versions: 1.24.0, 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cancermutationanalysis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancermutationanalysis

   and update with::

      conda update bioconductor-cancermutationanalysis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cancermutationanalysis


.. |required_by_bioconductor-cancermutationanalysis| conda:required_by:: bioconductor-cancermutationanalysis
.. |downloads_bioconductor-cancermutationanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancermutationanalysis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cancermutationanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html

