:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimutacionsdata'
.. highlight: bash

bioconductor-epimutacionsdata
=============================

.. conda:recipe:: bioconductor-epimutacionsdata
   :replaces_section_title:
   :noindex:

   Data for epimutacions package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/epimutacionsData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epimutacionsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacionsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacionsdata/meta.yaml>`_

   This package includes the data necessary to run functions and examples in epimutacions package. Collection of DNA methylation data. The package contains 2 datasets\: \(1\) Control \( GEO\: GSE104812\)\, \(GEO\: GSE97362\) case samples\; and \(2\) reference panel \(GEO\: GSE127824\). It also contains candidate regions to be epimutations in 450k methylation arrays.


.. conda:package:: bioconductor-epimutacionsdata

   |downloads_bioconductor-epimutacionsdata| |docker_bioconductor-epimutacionsdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221111``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epimutacionsdata

   and update with::

      conda update bioconductor-epimutacionsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epimutacionsdata:<tag>

   (see `bioconductor-epimutacionsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epimutacionsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimutacionsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimutacionsdata
   :alt:   (downloads)
.. |docker_bioconductor-epimutacionsdata| image:: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata
.. _`bioconductor-epimutacionsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimutacionsdata";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimutacionsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimutacionsdata/README.html