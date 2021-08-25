:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioimagedbs'
.. highlight: bash

bioconductor-bioimagedbs
========================

.. conda:recipe:: bioconductor-bioimagedbs
   :replaces_section_title:
   :noindex:

   Bio\- and biomedical imaging dataset for machine learning and deep learning \(for ExperimentHub\)

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/BioImageDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioimagedbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioimagedbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioimagedbs/meta.yaml>`_

   The package provides a bioimage dataset for the image analysis using machine learning and deep learning. The dataset includes microscopy imaging data with supervised labels. The data is provided as R list data that can be loaded to Keras\/tensorflow in R.


.. conda:package:: bioconductor-bioimagedbs

   |downloads_bioconductor-bioimagedbs| |docker_bioconductor-bioimagedbs|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-ebimage: ``>=4.34.0,<4.35.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-markdown: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioimagedbs

   and update with::

      conda update bioconductor-bioimagedbs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioimagedbs:<tag>

   (see `bioconductor-bioimagedbs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioimagedbs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioimagedbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioimagedbs
   :alt:   (downloads)
.. |docker_bioconductor-bioimagedbs| image:: https://quay.io/repository/biocontainers/bioconductor-bioimagedbs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioimagedbs
.. _`bioconductor-bioimagedbs/tags`: https://quay.io/repository/biocontainers/bioconductor-bioimagedbs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioimagedbs";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioimagedbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioimagedbs/README.html