:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scatedata'
.. highlight: bash

bioconductor-scatedata
======================

.. conda:recipe:: bioconductor-scatedata
   :replaces_section_title:
   :noindex:

   Data for SCATE \(Single\-cell ATAC\-seq Signal Extraction and Enhancement\)

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/SCATEData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scatedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatedata/meta.yaml>`_

   SCATEData is an ExperimentHub package for SCATE which is a software tool for extracting and enhancing the sparse and discrete Single\-cell ATAC\-seq Signal.


.. conda:package:: bioconductor-scatedata

   |downloads_bioconductor-scatedata| |docker_bioconductor-scatedata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.6-0``

      

   
   :depends bioconductor-data-packages: ``>=20221109``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scatedata

   and update with::

      conda update bioconductor-scatedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scatedata:<tag>

   (see `bioconductor-scatedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scatedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scatedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scatedata
   :alt:   (downloads)
.. |docker_bioconductor-scatedata| image:: https://quay.io/repository/biocontainers/bioconductor-scatedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scatedata
.. _`bioconductor-scatedata/tags`: https://quay.io/repository/biocontainers/bioconductor-scatedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scatedata";
        var versions = ["1.8.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scatedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scatedata/README.html