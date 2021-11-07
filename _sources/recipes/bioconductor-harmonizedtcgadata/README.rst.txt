:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harmonizedtcgadata'
.. highlight: bash

bioconductor-harmonizedtcgadata
===============================

.. conda:recipe:: bioconductor-harmonizedtcgadata
   :replaces_section_title:
   :noindex:

   Processed Harmonized TCGA Data of Five Selected Cancer Types

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/HarmonizedTCGAData.html
   :license: GPL-3
   :recipe: /`bioconductor-harmonizedtcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizedtcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harmonizedtcgadata/meta.yaml>`_

   This package contains the processed harmonized TCGA data of five cancer types used in \"Tianle Ma and Aidong Zhang\, Integrate Multi\-omic Data Using Affinity Network Fusion \(ANF\) for Cancer Patient Clustering\".


.. conda:package:: bioconductor-harmonizedtcgadata

   |downloads_bioconductor-harmonizedtcgadata| |docker_bioconductor-harmonizedtcgadata|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harmonizedtcgadata

   and update with::

      conda update bioconductor-harmonizedtcgadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harmonizedtcgadata:<tag>

   (see `bioconductor-harmonizedtcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harmonizedtcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harmonizedtcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harmonizedtcgadata
   :alt:   (downloads)
.. |docker_bioconductor-harmonizedtcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata
.. _`bioconductor-harmonizedtcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-harmonizedtcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harmonizedtcgadata";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harmonizedtcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harmonizedtcgadata/README.html