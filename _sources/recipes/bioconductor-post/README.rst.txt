.. title:: Package Recipe 'bioconductor-post'
.. highlight: bash


bioconductor-post
=================

.. conda:recipe:: bioconductor-post
   :replaces_section_title:

   Perform orthogonal projection of high dimensional data of a set\, and statistical modeling of phenotye with projected vectors as predictor.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/POST.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-post <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-post>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-post/meta.yaml>`_

   


.. conda:package:: bioconductor-post

   |downloads_bioconductor-post| |docker_bioconductor-post|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-compquadform`  :conda:package:`r-matrix`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-post|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-post

   and update with::

      conda update bioconductor-post

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-post


.. |required_by_bioconductor-post| conda:required_by:: bioconductor-post
.. |downloads_bioconductor-post| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-post.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-post| image:: https://quay.io/repository/biocontainers/bioconductor-post/status
   :target: https://quay.io/repository/biocontainers/bioconductor-post







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-post/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-post/README.html

