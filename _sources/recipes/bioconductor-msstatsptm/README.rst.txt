:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsptm'
.. highlight: bash

bioconductor-msstatsptm
=======================

.. conda:recipe:: bioconductor-msstatsptm
   :replaces_section_title:
   :noindex:

   Statistical Characterization of Post\-translational Modifications

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MSstatsPTM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsptm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm/meta.yaml>`_

   MSstatsPTM provides general statistical methods for quantitative characterization of post\-translational modifications \(PTMs\). Supports DDA\, DIA\, and tandem mass tag \(TMT\) labeling. Typically\, the analysis involves the quantification of PTM sites \(i.e.\, modified residues\) and their corresponding proteins\, as well as the integration of the quantification results. MSstatsPTM provides functions for summarization\, estimation of PTM site abundance\, and detection of changes in PTMs across experimental conditions.


.. conda:package:: bioconductor-msstatsptm

   |downloads_bioconductor-msstatsptm| |docker_bioconductor-msstatsptm|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-msstats: ``>=4.2.0,<4.3.0``
   :depends bioconductor-msstatsconvert: ``>=1.4.0,<1.5.0``
   :depends bioconductor-msstatstmt: ``>=2.2.0,<2.3.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-rcpp: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsptm

   and update with::

      conda update bioconductor-msstatsptm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsptm:<tag>

   (see `bioconductor-msstatsptm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsptm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsptm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsptm
   :alt:   (downloads)
.. |docker_bioconductor-msstatsptm| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsptm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsptm
.. _`bioconductor-msstatsptm/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsptm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsptm";
        var versions = ["1.4.2","1.4.0","1.2.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html