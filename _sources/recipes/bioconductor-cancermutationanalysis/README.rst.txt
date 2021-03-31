:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancermutationanalysis'
.. highlight: bash

bioconductor-cancermutationanalysis
===================================

.. conda:recipe:: bioconductor-cancermutationanalysis
   :replaces_section_title:
   :noindex:

   Cancer mutation analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CancerMutationAnalysis.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-cancermutationanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancermutationanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancermutationanalysis/meta.yaml>`_
   :links: biotools: :biotools:`cancermutationanalysis`, doi: :doi:`10.1007/978-1-62703-721-1_7`

   This package implements gene and gene\-set level analysis methods for somatic mutation studies of cancer.  The gene\-level methods distinguish between driver genes \(which play an active role in tumorigenesis\) and passenger genes \(which are mutated in tumor samples\, but have no role in tumorigenesis\) and incorporate a two\-stage study design.  The gene\-set methods implement a patient\-oriented approach\, which calculates gene\-set scores for each sample\, then combines them across samples\; a gene\-oriented approach which uses the Wilcoxon test is also provided for comparison.


.. conda:package:: bioconductor-cancermutationanalysis

   |downloads_bioconductor-cancermutationanalysis| |docker_bioconductor-cancermutationanalysis|

   :versions:
      
      

      ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancermutationanalysis

   and update with::

      conda update bioconductor-cancermutationanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancermutationanalysis:<tag>

   (see `bioconductor-cancermutationanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancermutationanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancermutationanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancermutationanalysis
   :alt:   (downloads)
.. |docker_bioconductor-cancermutationanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis
.. _`bioconductor-cancermutationanalysis/tags`: https://quay.io/repository/biocontainers/bioconductor-cancermutationanalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancermutationanalysis/README.html