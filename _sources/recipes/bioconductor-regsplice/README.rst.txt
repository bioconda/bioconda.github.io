:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regsplice'
.. highlight: bash

bioconductor-regsplice
======================

.. conda:recipe:: bioconductor-regsplice
   :replaces_section_title:

   Statistical methods for detection of differential splicing \(differential exon usage\) in RNA\-seq and exon microarray data\, using L1\-regularization \(lasso\) to improve power.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/regsplice.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-regsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regsplice/meta.yaml>`_
   :links: biotools: :biotools:`regsplice`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-regsplice

   |downloads_bioconductor-regsplice| |docker_bioconductor-regsplice|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-glmnet: 
   :depends r-pbapply: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regsplice

   and update with::

      conda update bioconductor-regsplice

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regsplice:<tag>

   (see `bioconductor-regsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regsplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regsplice
   :alt:   (downloads)
.. |docker_bioconductor-regsplice| image:: https://quay.io/repository/biocontainers/bioconductor-regsplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regsplice
.. _`bioconductor-regsplice/tags`: https://quay.io/repository/biocontainers/bioconductor-regsplice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regsplice/README.html