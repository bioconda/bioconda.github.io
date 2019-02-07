.. title:: Package Recipe 'bioconductor-rbm'
.. highlight: bash


bioconductor-rbm
================

.. conda:recipe:: bioconductor-rbm
   :replaces_section_title:

   Use A Resampling\-Based Empirical Bayes Approach to Assess Differential Expression in Two\-Color Microarrays and RNA\-Seq data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RBM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm/meta.yaml>`_
   :links: biotools: :biotools:`rbm`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rbm

   |downloads_bioconductor-rbm| |docker_bioconductor-rbm|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rbm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbm

   and update with::

      conda update bioconductor-rbm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rbm


.. |required_by_bioconductor-rbm| conda:required_by:: bioconductor-rbm
.. |downloads_bioconductor-rbm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbm| image:: https://quay.io/repository/biocontainers/bioconductor-rbm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbm/README.html

