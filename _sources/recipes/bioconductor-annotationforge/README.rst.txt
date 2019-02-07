.. title:: Package Recipe 'bioconductor-annotationforge'
.. highlight: bash


bioconductor-annotationforge
============================

.. conda:recipe:: bioconductor-annotationforge
   :replaces_section_title:

   Provides code for generating Annotation packages and their databases.  Packages produced are intended to be used with AnnotationDbi.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AnnotationForge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge/meta.yaml>`_
   :links: biotools: :biotools:`annotationforge`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-annotationforge

   |downloads_bioconductor-annotationforge| |docker_bioconductor-annotationforge|

   :versions: 1.24.0, 1.22.2, 1.20.0, 1.18.2, 1.14.2, 1.14.0, 1.12.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-rcurl`  :conda:package:`r-rsqlite`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-annotationforge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationforge

   and update with::

      conda update bioconductor-annotationforge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annotationforge


.. |required_by_bioconductor-annotationforge| conda:required_by:: bioconductor-annotationforge
.. |downloads_bioconductor-annotationforge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationforge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annotationforge| image:: https://quay.io/repository/biocontainers/bioconductor-annotationforge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationforge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html

