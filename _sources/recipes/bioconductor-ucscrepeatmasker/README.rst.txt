:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucscrepeatmasker'
.. highlight: bash

bioconductor-ucscrepeatmasker
=============================

.. conda:recipe:: bioconductor-ucscrepeatmasker
   :replaces_section_title:
   :noindex:

   UCSC RepeatMasker AnnotationHub resource metadata

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/UCSCRepeatMasker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ucscrepeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucscrepeatmasker/meta.yaml>`_

   Store UCSC RepeatMasker AnnotationHub resource metadata. Provide provenance and citation information for UCSC RepeatMasker AnnotationHub resources. Illustrate in a vignette how to access those resources.


.. conda:package:: bioconductor-ucscrepeatmasker

   |downloads_bioconductor-ucscrepeatmasker| |docker_bioconductor-ucscrepeatmasker|

   :versions:
      
      

      ``3.15.2-1``,  ``3.15.2-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ucscrepeatmasker

   and update with::

      conda update bioconductor-ucscrepeatmasker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ucscrepeatmasker:<tag>

   (see `bioconductor-ucscrepeatmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ucscrepeatmasker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucscrepeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucscrepeatmasker
   :alt:   (downloads)
.. |docker_bioconductor-ucscrepeatmasker| image:: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker
.. _`bioconductor-ucscrepeatmasker/tags`: https://quay.io/repository/biocontainers/bioconductor-ucscrepeatmasker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucscrepeatmasker";
        var versions = ["3.15.2","3.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucscrepeatmasker/README.html