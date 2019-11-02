:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stroma4'
.. highlight: bash

bioconductor-stroma4
====================

.. conda:recipe:: bioconductor-stroma4
   :replaces_section_title:

   This package estimates four stromal properties identified in TNBC patients in each patient of a gene expression datasets. These stromal property assignments can be combined to subtype patients. These four stromal properties were identified in Triple negative breast cancer \(TNBC\) patients and represent the presence of different cells in the stroma\: T\-cells \(T\)\, B\-cells \(B\)\, stromal infiltrating epithelial cells \(E\)\, and desmoplasia \(D\). Additionally this package can also be used to estimate generative properties for the Lehmann subtypes\, an alternative TNBC subtyping scheme \(PMID\: 21633166\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/STROMA4.html
   :license: GPL-3
   :recipe: /`bioconductor-stroma4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4/meta.yaml>`_

   


.. conda:package:: bioconductor-stroma4

   |downloads_bioconductor-stroma4| |docker_bioconductor-stroma4|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.1-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stroma4

   and update with::

      conda update bioconductor-stroma4

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stroma4:<tag>

   (see `bioconductor-stroma4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stroma4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stroma4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stroma4
   :alt:   (downloads)
.. |docker_bioconductor-stroma4| image:: https://quay.io/repository/biocontainers/bioconductor-stroma4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stroma4
.. _`bioconductor-stroma4/tags`: https://quay.io/repository/biocontainers/bioconductor-stroma4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stroma4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stroma4/README.html