:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxpancreas'
.. highlight: bash

bioconductor-metagxpancreas
===========================

.. conda:recipe:: bioconductor-metagxpancreas
   :replaces_section_title:
   :noindex:

   Transcriptomic Pancreatic Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/MetaGxPancreas.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxpancreas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas/meta.yaml>`_

   A collection of pancreatic Cancer transcriptomic datasets that are part of the MetaGxData package compendium. This package contains multiple pancreas cancer datasets that have been downloaded from various resources and turned into SummarizedExperiment objects. The details of how the authors normalized the data can be found in the experiment data section of the objects. Additionally\, the location the data was obtained from can be found in the url variables of the experiment data portion of each SE.


.. conda:package:: bioconductor-metagxpancreas

   |downloads_bioconductor-metagxpancreas| |docker_bioconductor-metagxpancreas|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-impute: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagxpancreas

   and update with::

      conda update bioconductor-metagxpancreas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxpancreas:<tag>

   (see `bioconductor-metagxpancreas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxpancreas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxpancreas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxpancreas
   :alt:   (downloads)
.. |docker_bioconductor-metagxpancreas| image:: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas
.. _`bioconductor-metagxpancreas/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxpancreas";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html