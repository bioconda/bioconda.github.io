:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedtbdata'
.. highlight: bash

bioconductor-curatedtbdata
==========================

.. conda:recipe:: bioconductor-curatedtbdata
   :replaces_section_title:
   :noindex:

   Curation of existing 49 tuberculosis transcriptomic studies

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/curatedTBData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-curatedtbdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedtbdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedtbdata/meta.yaml>`_

   The curatedTBData is an R package that provides standardized\, curated tuberculosis\(TB\) transcriptomic studies. The initial release of the package contains 49 studies. The curatedTBData package allows users to access tuberculosis trancriptomic efficiently and to make efficient comparison for different TB gene signatures across multiple datasets.


.. conda:package:: bioconductor-curatedtbdata

   |downloads_bioconductor-curatedtbdata| |docker_bioconductor-curatedtbdata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedtbdata

   and update with::

      conda update bioconductor-curatedtbdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedtbdata:<tag>

   (see `bioconductor-curatedtbdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedtbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedtbdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedtbdata
   :alt:   (downloads)
.. |docker_bioconductor-curatedtbdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedtbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedtbdata
.. _`bioconductor-curatedtbdata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedtbdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedtbdata";
        var versions = ["1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedtbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedtbdata/README.html