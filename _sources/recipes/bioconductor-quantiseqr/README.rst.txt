:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quantiseqr'
.. highlight: bash

bioconductor-quantiseqr
=======================

.. conda:recipe:: bioconductor-quantiseqr
   :replaces_section_title:
   :noindex:

   Quantification of the Tumor Immune contexture from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/quantiseqr.html
   :license: GPL-3
   :recipe: /`bioconductor-quantiseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantiseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantiseqr/meta.yaml>`_

   This package provides a streamlined workflow for the quanTIseq method\, developed to perform the quantification of the Tumor Immune contexture from RNA\-seq data. The quantification is performed against the TIL10 signature \(dissecting the contributions of ten immune cell types\)\, carefully crafted from a collection of human RNA\-seq samples. The TIL10 signature has been extensively validated using simulated\, flow cytometry\, and immunohistochemistry data.


.. conda:package:: bioconductor-quantiseqr

   |downloads_bioconductor-quantiseqr| |docker_bioconductor-quantiseqr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-limsolve: 
   :depends r-mass: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quantiseqr

   and update with::

      conda update bioconductor-quantiseqr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quantiseqr:<tag>

   (see `bioconductor-quantiseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quantiseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quantiseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quantiseqr
   :alt:   (downloads)
.. |docker_bioconductor-quantiseqr| image:: https://quay.io/repository/biocontainers/bioconductor-quantiseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quantiseqr
.. _`bioconductor-quantiseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-quantiseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quantiseqr";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quantiseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quantiseqr/README.html