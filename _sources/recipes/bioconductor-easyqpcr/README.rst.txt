:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easyqpcr'
.. highlight: bash

bioconductor-easyqpcr
=====================

.. conda:recipe:: bioconductor-easyqpcr
   :replaces_section_title:
   :noindex:

   EasyqpcR for low\-throughput real\-time quantitative PCR data analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/EasyqpcR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-easyqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyqpcr/meta.yaml>`_

   This package is based on the qBase algorithms published by Hellemans et al. in 2007. The EasyqpcR package allows you to import easily qPCR data files as described in the vignette. Thereafter\, you can calculate amplification efficiencies\, relative quantities and their standard errors\, normalization factors based on the best reference genes choosen \(using the SLqPCR package\)\, and then the normalized relative quantities\, the NRQs scaled to your control and their standard errors. This package has been created for low\-throughput qPCR data analysis.


.. conda:package:: bioconductor-easyqpcr

   |downloads_bioconductor-easyqpcr| |docker_bioconductor-easyqpcr|

   :versions:
      
      

      ``1.31.0-1``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gwidgetsrgtk2: 
   :depends r-matrixstats: 
   :depends r-plotrix: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easyqpcr

   and update with::

      conda update bioconductor-easyqpcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easyqpcr:<tag>

   (see `bioconductor-easyqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easyqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easyqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easyqpcr
   :alt:   (downloads)
.. |docker_bioconductor-easyqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-easyqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easyqpcr
.. _`bioconductor-easyqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-easyqpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easyqpcr";
        var versions = ["1.31.0","1.31.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easyqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easyqpcr/README.html