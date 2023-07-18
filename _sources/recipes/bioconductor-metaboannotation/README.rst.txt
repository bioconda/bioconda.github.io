:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaboannotation'
.. highlight: bash

bioconductor-metaboannotation
=============================

.. conda:recipe:: bioconductor-metaboannotation
   :replaces_section_title:
   :noindex:

   Utilities for Annotation of Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MetaboAnnotation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaboannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaboannotation/meta.yaml>`_

   High level functions to assist in annotation of \(metabolomics\) data sets. These include functions to perform simple tentative annotations based on mass matching but also functions to consider m\/z and retention times for annotation of LC\-MS features given that respective reference values are available. In addition\, the function provides high\-level functions to simplify matching of LC\-MS\/MS spectra against spectral libraries and objects and functionality to represent and manage such matched data.


.. conda:package:: bioconductor-metaboannotation

   |downloads_bioconductor-metaboannotation| |docker_bioconductor-metaboannotation|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-compounddb: ``>=1.4.0,<1.5.0``
   :depends bioconductor-metabocoreutils: ``>=1.8.0,<1.9.0``
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-protgenerics: ``>=1.32.0,<1.33.0``
   :depends bioconductor-qfeatures: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spectra: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaboannotation

   and update with::

      conda update bioconductor-metaboannotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaboannotation:<tag>

   (see `bioconductor-metaboannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaboannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaboannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaboannotation
   :alt:   (downloads)
.. |docker_bioconductor-metaboannotation| image:: https://quay.io/repository/biocontainers/bioconductor-metaboannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaboannotation
.. _`bioconductor-metaboannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-metaboannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaboannotation";
        var versions = ["1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaboannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaboannotation/README.html