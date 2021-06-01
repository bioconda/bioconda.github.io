:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dirichletmultinomial'
.. highlight: bash

bioconductor-dirichletmultinomial
=================================

.. conda:recipe:: bioconductor-dirichletmultinomial
   :replaces_section_title:
   :noindex:

   Dirichlet\-Multinomial Mixture Model Machine Learning for Microbiome Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DirichletMultinomial.html
   :license: LGPL-3
   :recipe: /`bioconductor-dirichletmultinomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial/meta.yaml>`_
   :links: biotools: :biotools:`dirichletmultinomial`, doi: :doi:`10.1371/journal.pone.0030126`

   Dirichlet\-multinomial mixture models can be used to describe variability in microbial metagenomic data. This package is an interface to code originally made available by Holmes\, Harris\, and Quince\, 2012\, PLoS ONE 7\(2\)\: 1\-15\, as discussed further in the man page for this package\, \?DirichletMultinomial.


.. conda:package:: bioconductor-dirichletmultinomial

   |downloads_bioconductor-dirichletmultinomial| |docker_bioconductor-dirichletmultinomial|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.1-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dirichletmultinomial

   and update with::

      conda update bioconductor-dirichletmultinomial

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dirichletmultinomial:<tag>

   (see `bioconductor-dirichletmultinomial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dirichletmultinomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dirichletmultinomial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dirichletmultinomial
   :alt:   (downloads)
.. |docker_bioconductor-dirichletmultinomial| image:: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial
.. _`bioconductor-dirichletmultinomial/tags`: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html