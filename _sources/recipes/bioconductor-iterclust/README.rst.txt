.. title:: Package Recipe 'bioconductor-iterclust'
.. highlight: bash


bioconductor-iterclust
======================

.. conda:recipe:: bioconductor-iterclust
   :replaces_section_title:

   A framework for performing clustering analysis iteratively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iterClust.html
   :license: file LICENSE
   :recipe: /`bioconductor-iterclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust/meta.yaml>`_

   


.. conda:package:: bioconductor-iterclust

   |downloads_bioconductor-iterclust| |docker_bioconductor-iterclust|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  

   :required~by: |required_by_bioconductor-iterclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterclust

   and update with::

      conda update bioconductor-iterclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iterclust


.. |required_by_bioconductor-iterclust| conda:required_by:: bioconductor-iterclust
.. |downloads_bioconductor-iterclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iterclust| image:: https://quay.io/repository/biocontainers/bioconductor-iterclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterclust/README.html

