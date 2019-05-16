:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireewas'
.. highlight: bash

bioconductor-hireewas
=====================

.. conda:recipe:: bioconductor-hireewas
   :replaces_section_title:

   In epigenome\-wide association studies\, the measured signals for each sample are a mixture of methylation profiles from different cell types. The current approaches to the association detection only claim whether a cytosine\-phosphate\-guanine \(CpG\) site is associated with the phenotype or not\, but they cannot determine the cell type in which the risk\-CpG site is affected by the phenotype. We propose a solid statistical method\, HIgh REsolution \(HIRE\)\, which not only substantially improves the power of association detection at the aggregated level as compared to the existing methods but also enables the detection of risk\-CpG sites for individual cell types. The \"HIREewas\" R package is to implement HIRE model in R.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/HIREewas.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hireewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas/meta.yaml>`_

   


.. conda:package:: bioconductor-hireewas

   |downloads_bioconductor-hireewas| |docker_bioconductor-hireewas|

   :versions: 1.2.0-0, 1.0.2-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :depends r-quadprog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hireewas

   and update with::

      conda update bioconductor-hireewas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hireewas:<tag>

   (see `bioconductor-hireewas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hireewas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireewas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireewas
   :alt:   (downloads)
.. |docker_bioconductor-hireewas| image:: https://quay.io/repository/biocontainers/bioconductor-hireewas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireewas
.. _`bioconductor-hireewas/tags`: https://quay.io/repository/biocontainers/bioconductor-hireewas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireewas/README.html