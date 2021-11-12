:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yamss'
.. highlight: bash

bioconductor-yamss
==================

.. conda:recipe:: bioconductor-yamss
   :replaces_section_title:
   :noindex:

   Tools for high\-throughput metabolomics

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/yamss.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yamss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yamss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yamss/meta.yaml>`_
   :links: biotools: :biotools:`yamss`

   Tools to analyze and visualize high\-throughput metabolomics data aquired using chromatography\-mass spectrometry. These tools preprocess data in a way that enables reliable and powerful differential analysis.


.. conda:package:: bioconductor-yamss

   |downloads_bioconductor-yamss| |docker_bioconductor-yamss|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-ebimage: ``>=4.36.0,<4.37.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-mzr: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yamss

   and update with::

      conda update bioconductor-yamss

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yamss:<tag>

   (see `bioconductor-yamss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yamss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yamss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yamss
   :alt:   (downloads)
.. |docker_bioconductor-yamss| image:: https://quay.io/repository/biocontainers/bioconductor-yamss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yamss
.. _`bioconductor-yamss/tags`: https://quay.io/repository/biocontainers/bioconductor-yamss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yamss";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yamss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yamss/README.html