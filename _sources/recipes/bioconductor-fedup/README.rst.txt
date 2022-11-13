:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fedup'
.. highlight: bash

bioconductor-fedup
==================

.. conda:recipe:: bioconductor-fedup
   :replaces_section_title:
   :noindex:

   Fisher\'s Test for Enrichment and Depletion of User\-Defined Pathways

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/fedup.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fedup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fedup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fedup/meta.yaml>`_

   An R package that tests for enrichment and depletion of user\-defined pathways using a Fisher\'s exact test. The method is designed for versatile pathway annotation formats \(eg. gmt\, txt\, xlsx\) to allow the user to run pathway analysis on custom annotations. This package is also integrated with Cytoscape to provide network\-based pathway visualization that enhances the interpretability of the results.


.. conda:package:: bioconductor-fedup

   |downloads_bioconductor-fedup| |docker_bioconductor-fedup|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rcy3: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-openxlsx: 
   :depends r-rcolorbrewer: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fedup

   and update with::

      conda update bioconductor-fedup

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fedup:<tag>

   (see `bioconductor-fedup/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fedup| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fedup.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fedup
   :alt:   (downloads)
.. |docker_bioconductor-fedup| image:: https://quay.io/repository/biocontainers/bioconductor-fedup/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fedup
.. _`bioconductor-fedup/tags`: https://quay.io/repository/biocontainers/bioconductor-fedup?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fedup";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fedup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fedup/README.html