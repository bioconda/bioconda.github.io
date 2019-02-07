.. title:: Package Recipe 'r-swamp'
.. highlight: bash


r-swamp
=======

.. conda:recipe:: r-swamp
   :replaces_section_title:

   Collection of functions to connect the structure of the data with the information on the samples. Three types of associations are covered\: 1. linear model of principal components. 2. hierarchical clustering analysis. 3. distribution of features\-sample annotation associations. Additionally\, the inter\-relation between sample annotations can be analyzed. Simple methods are provided for the correction of batch effects and removal of principal components.

   :homepage: https://CRAN.R-project.org/package=swamp
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-swamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp/meta.yaml>`_

   


.. conda:package:: r-swamp

   |downloads_r-swamp| |docker_r-swamp|

   :versions: 1.4.1, 1.3.1

   :depends: :conda:package:`bioconductor-impute`  :conda:package:`r-amap`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-mass`  

   :required~by: |required_by_r-swamp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-swamp

   and update with::

      conda update r-swamp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-swamp


.. |required_by_r-swamp| conda:required_by:: r-swamp
.. |downloads_r-swamp| image:: https://img.shields.io/conda/dn/bioconda/r-swamp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-swamp| image:: https://quay.io/repository/biocontainers/r-swamp/status
   :target: https://quay.io/repository/biocontainers/r-swamp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-swamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-swamp/README.html

