:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggpa'
.. highlight: bash

bioconductor-ggpa
=================

.. conda:recipe:: bioconductor-ggpa
   :replaces_section_title:
   :noindex:

   graph\-GPA\: A graphical model for prioritizing GWAS results and investigating pleiotropic architecture

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GGPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ggpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggpa/meta.yaml>`_

   Genome\-wide association studies \(GWAS\) is a widely used tool for identification of genetic variants associated with phenotypes and diseases\, though complex diseases featuring many genetic variants with small effects present difficulties for traditional these studies. By leveraging pleiotropy\, the statistical power of a single GWAS can be increased. This package provides functions for fitting graph\-GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy. \'GGPA\' package provides user\-friendly interface to fit graph\-GPA models\, implement association mapping\, and generate a phenotype graph.


.. conda:package:: bioconductor-ggpa

   |downloads_bioconductor-ggpa| |docker_bioconductor-ggpa|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggally: 
   :depends r-matrixstats: 
   :depends r-network: 
   :depends r-rcpp: ``>=0.11.3``
   :depends r-rcpparmadillo: 
   :depends r-scales: 
   :depends r-sna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggpa

   and update with::

      conda update bioconductor-ggpa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggpa:<tag>

   (see `bioconductor-ggpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggpa
   :alt:   (downloads)
.. |docker_bioconductor-ggpa| image:: https://quay.io/repository/biocontainers/bioconductor-ggpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggpa
.. _`bioconductor-ggpa/tags`: https://quay.io/repository/biocontainers/bioconductor-ggpa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggpa/README.html