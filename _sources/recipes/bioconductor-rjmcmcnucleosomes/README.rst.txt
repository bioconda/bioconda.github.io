:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rjmcmcnucleosomes'
.. highlight: bash

bioconductor-rjmcmcnucleosomes
==============================

.. conda:recipe:: bioconductor-rjmcmcnucleosomes
   :replaces_section_title:

   This package does nucleosome positioning using informative Multinomial\-Dirichlet prior in a t\-mixture with reversible jump estimation of nucleosome positions for genome\-wide profiling.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RJMCMCNucleosomes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rjmcmcnucleosomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rjmcmcnucleosomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rjmcmcnucleosomes/meta.yaml>`_

   


.. conda:package:: bioconductor-rjmcmcnucleosomes

   |downloads_bioconductor-rjmcmcnucleosomes| |docker_bioconductor-rjmcmcnucleosomes|

   :versions: 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-consensusseeker: >=1.10.0,<1.11.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends gsl: >=2.4,<2.5.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends openblas: >=0.3.3,<0.3.4.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: >=0.12.5
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rjmcmcnucleosomes

   and update with::

      conda update bioconductor-rjmcmcnucleosomes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes:<tag>

   (see `bioconductor-rjmcmcnucleosomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rjmcmcnucleosomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rjmcmcnucleosomes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rjmcmcnucleosomes| image:: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes
.. _`bioconductor-rjmcmcnucleosomes/tags`: https://quay.io/repository/biocontainers/bioconductor-rjmcmcnucleosomes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rjmcmcnucleosomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rjmcmcnucleosomes/README.html