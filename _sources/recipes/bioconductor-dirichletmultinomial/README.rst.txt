.. title:: Package Recipe 'bioconductor-dirichletmultinomial'
.. highlight: bash


bioconductor-dirichletmultinomial
=================================

.. conda:recipe:: bioconductor-dirichletmultinomial
   :replaces_section_title:

   Dirichlet\-multinomial mixture models can be used to describe variability in microbial metagenomic data. This package is an interface to code originally made available by Holmes\, Harris\, and Quince\, 2012\, PLoS ONE 7\(2\)\: 1\-15\, as discussed further in the man page for this package\, \?DirichletMultinomial.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DirichletMultinomial.html
   :license: LGPL-3
   :recipe: /`bioconductor-dirichletmultinomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dirichletmultinomial/meta.yaml>`_
   :links: biotools: :biotools:`dirichletmultinomial`, doi: :doi:`10.1371/journal.pone.0030126`

   


.. conda:package:: bioconductor-dirichletmultinomial

   |downloads_bioconductor-dirichletmultinomial| |docker_bioconductor-dirichletmultinomial|

   :versions: 1.24.0, 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`gsl` >=2.4,<2.5.0a0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`openblas` >=0.3.3,<0.3.4.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-dirichletmultinomial|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dirichletmultinomial

   and update with::

      conda update bioconductor-dirichletmultinomial

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dirichletmultinomial


.. |required_by_bioconductor-dirichletmultinomial| conda:required_by:: bioconductor-dirichletmultinomial
.. |downloads_bioconductor-dirichletmultinomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dirichletmultinomial.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dirichletmultinomial| image:: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dirichletmultinomial







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dirichletmultinomial/README.html

