.. title:: Package Recipe 'bioconductor-logitt'
.. highlight: bash


bioconductor-logitt
===================

.. conda:recipe:: bioconductor-logitt
   :replaces_section_title:

   The logitT library implements the Logit\-t algorithm introduced in \-\-A high performance test of differential gene expression for oligonucleotide arrays\-\- by William J Lemon\, Sandya Liyanarachchi and Ming You for use with Affymetrix data stored in an AffyBatch object in R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/logitT.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-logitt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logitt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logitt/meta.yaml>`_
   :links: biotools: :biotools:`logitt`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-logitt

   |downloads_bioconductor-logitt| |docker_bioconductor-logitt|

   :versions: 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-logitt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-logitt

   and update with::

      conda update bioconductor-logitt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-logitt


.. |required_by_bioconductor-logitt| conda:required_by:: bioconductor-logitt
.. |downloads_bioconductor-logitt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-logitt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-logitt| image:: https://quay.io/repository/biocontainers/bioconductor-logitt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-logitt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-logitt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-logitt/README.html

