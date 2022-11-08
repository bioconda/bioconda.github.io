:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cliprofiler'
.. highlight: bash

bioconductor-cliprofiler
========================

.. conda:recipe:: bioconductor-cliprofiler
   :replaces_section_title:
   :noindex:

   A package for the CLIP data visualization

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cliProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cliprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliprofiler/meta.yaml>`_

   An easy and fast way to visualize and profile the high\-throughput IP data. This package generates the meta gene profile and other profiles. These profiles could provide valuable information for understanding the IP experiment results.


.. conda:package:: bioconductor-cliprofiler

   |downloads_bioconductor-cliprofiler| |docker_bioconductor-cliprofiler|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cliprofiler

   and update with::

      conda update bioconductor-cliprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cliprofiler:<tag>

   (see `bioconductor-cliprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cliprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cliprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cliprofiler
   :alt:   (downloads)
.. |docker_bioconductor-cliprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-cliprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cliprofiler
.. _`bioconductor-cliprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-cliprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cliprofiler";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cliprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cliprofiler/README.html