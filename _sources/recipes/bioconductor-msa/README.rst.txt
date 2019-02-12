.. title:: Package Recipe 'bioconductor-msa'
.. highlight: bash


bioconductor-msa
================

.. conda:recipe:: bioconductor-msa
   :replaces_section_title:

   The \'msa\' package provides a unified R\/Bioconductor interface to the multiple sequence alignment algorithms ClustalW\, ClustalOmega\, and Muscle. All three algorithms are integrated in the package\, therefore\, they do not depend on any external software tools and are available for all major platforms. The multiple sequence alignment algorithms are complemented by a function for pretty\-printing multiple sequence alignments using the LaTeX package TeXshade.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/msa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa/meta.yaml>`_

   


.. conda:package:: bioconductor-msa

   |downloads_bioconductor-msa| |docker_bioconductor-msa|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.11.1 

   :required~by: |required_by_bioconductor-msa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msa

   and update with::

      conda update bioconductor-msa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msa


.. |required_by_bioconductor-msa| conda:required_by:: bioconductor-msa
.. |downloads_bioconductor-msa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msa| image:: https://quay.io/repository/biocontainers/bioconductor-msa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa/README.html

