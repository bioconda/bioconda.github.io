:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-healthycontrolspresencechecker'
.. highlight: bash

bioconductor-healthycontrolspresencechecker
===========================================

.. conda:recipe:: bioconductor-healthycontrolspresencechecker
   :replaces_section_title:
   :noindex:

   Dowloads A Gene Expression Dataset From GEO And Checks If It Contains Data Of Healthy Controls Or Not

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/healthyControlsPresenceChecker.html
   :license: GPL-3
   :recipe: /`bioconductor-healthycontrolspresencechecker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker/meta.yaml>`_

   A function that reads in the GEO accession code of a gene expression dataset\, retrieves its data from GEO\, and checks if data of healthy controls are present in the dataset. It returns true if healthy controls data are found\, and false otherwise. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>.


.. conda:package:: bioconductor-healthycontrolspresencechecker

   |downloads_bioconductor-healthycontrolspresencechecker| |docker_bioconductor-healthycontrolspresencechecker|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-geneexpressionfromgeo: 
   :depends r-magrittr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-healthycontrolspresencechecker

   and update with::

      conda update bioconductor-healthycontrolspresencechecker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-healthycontrolspresencechecker:<tag>

   (see `bioconductor-healthycontrolspresencechecker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-healthycontrolspresencechecker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-healthycontrolspresencechecker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-healthycontrolspresencechecker
   :alt:   (downloads)
.. |docker_bioconductor-healthycontrolspresencechecker| image:: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker
.. _`bioconductor-healthycontrolspresencechecker/tags`: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-healthycontrolspresencechecker";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html