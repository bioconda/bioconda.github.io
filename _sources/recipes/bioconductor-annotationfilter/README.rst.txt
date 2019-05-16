:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationfilter'
.. highlight: bash

bioconductor-annotationfilter
=============================

.. conda:recipe:: bioconductor-annotationfilter
   :replaces_section_title:

   This package provides class and other infrastructure to implement filters for manipulating Bioconductor annotation resources. The filters will be used by ensembldb\, Organism.dplyr\, and other packages.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AnnotationFilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationfilter/meta.yaml>`_

   


.. conda:package:: bioconductor-annotationfilter

   |downloads_bioconductor-annotationfilter| |docker_bioconductor-annotationfilter|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lazyeval: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationfilter

   and update with::

      conda update bioconductor-annotationfilter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationfilter:<tag>

   (see `bioconductor-annotationfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationfilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationfilter
   :alt:   (downloads)
.. |docker_bioconductor-annotationfilter| image:: https://quay.io/repository/biocontainers/bioconductor-annotationfilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationfilter
.. _`bioconductor-annotationfilter/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationfilter/README.html