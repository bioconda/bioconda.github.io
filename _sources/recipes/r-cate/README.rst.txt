.. title:: Package Recipe 'r-cate'
.. highlight: bash


r-cate
======

.. conda:recipe:: r-cate
   :replaces_section_title:

   Provides several methods for factor analysis in high dimension \(both n\,p \>\> 1\) and methods to adjust for possible confounders in multiple hypothesis testing.

   :homepage: https://CRAN.R-project.org/package=cate
   :license: GPL2 / GPL-2
   :recipe: /`r-cate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate/meta.yaml>`_

   


.. conda:package:: r-cate

   |downloads_r-cate| |docker_r-cate|

   :versions: 1.0.4

   :depends: :conda:package:`bioconductor-sva`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-esabcv`  :conda:package:`r-leapp`  :conda:package:`r-mass`  :conda:package:`r-ruv`  

   :required~by: |required_by_r-cate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cate

   and update with::

      conda update r-cate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-cate


.. |required_by_r-cate| conda:required_by:: r-cate
.. |downloads_r-cate| image:: https://img.shields.io/conda/dn/bioconda/r-cate.svg?style=flat
   :alt:   (downloads)
.. |docker_r-cate| image:: https://quay.io/repository/biocontainers/r-cate/status
   :target: https://quay.io/repository/biocontainers/r-cate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cate/README.html

