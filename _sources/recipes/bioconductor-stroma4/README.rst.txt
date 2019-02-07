.. title:: Package Recipe 'bioconductor-stroma4'
.. highlight: bash


bioconductor-stroma4
====================

.. conda:recipe:: bioconductor-stroma4
   :replaces_section_title:

   This package estimates four stromal properties identified in TNBC patients in each patient of a gene expression datasets. These stromal property assignments can be combined to subtype patients. These four stromal properties were identified in Triple negative breast cancer \(TNBC\) patients and represent the presence of different cells in the stroma\: T\-cells \(T\)\, B\-cells \(B\)\, stromal infiltrating epithelial cells \(E\)\, and desmoplasia \(D\). Additionally this package can also be used to estimate generative properties for the Lehmann subtypes\, an alternative TNBC subtyping scheme \(PMID\: 21633166\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/STROMA4.html
   :license: GPL-3
   :recipe: /`bioconductor-stroma4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4/meta.yaml>`_

   


.. conda:package:: bioconductor-stroma4

   |downloads_bioconductor-stroma4| |docker_bioconductor-stroma4|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-stroma4|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stroma4

   and update with::

      conda update bioconductor-stroma4

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-stroma4


.. |required_by_bioconductor-stroma4| conda:required_by:: bioconductor-stroma4
.. |downloads_bioconductor-stroma4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stroma4.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-stroma4| image:: https://quay.io/repository/biocontainers/bioconductor-stroma4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stroma4







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stroma4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stroma4/README.html

