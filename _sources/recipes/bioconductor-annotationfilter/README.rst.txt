.. title:: Package Recipe 'bioconductor-annotationfilter'
.. highlight: bash


bioconductor-annotationfilter
=============================

.. conda:recipe:: bioconductor-annotationfilter
   :replaces_section_title:

   This package provides class and other infrastructure to implement filters for manipulating Bioconductor annotation resources. The filters will be used by ensembldb\, Organism.dplyr\, and other packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AnnotationFilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfilter/meta.yaml>`_

   


.. conda:package:: bioconductor-annotationfilter

   |downloads_bioconductor-annotationfilter| |docker_bioconductor-annotationfilter|

   :versions: 1.6.0, 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lazyeval`  

   :required~by: |required_by_bioconductor-annotationfilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationfilter

   and update with::

      conda update bioconductor-annotationfilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annotationfilter


.. |required_by_bioconductor-annotationfilter| conda:required_by:: bioconductor-annotationfilter
.. |downloads_bioconductor-annotationfilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annotationfilter| image:: https://quay.io/repository/biocontainers/bioconductor-annotationfilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationfilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationfilter/README.html

