:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatslobd'
.. highlight: bash

bioconductor-msstatslobd
========================

.. conda:recipe:: bioconductor-msstatslobd
   :replaces_section_title:
   :noindex:

   Assay characterization\: estimation of limit of blanc\(LoB\) and limit of detection\(LOD\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSstatsLOBD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatslobd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd/meta.yaml>`_

   The MSstatsLOBD package allows calculation and visualization of limit of blac \(LOB\) and limit of detection \(LOD\). We define the LOB as the highest apparent concentration of a peptide expected when replicates of a blank sample containing no peptides are measured. The LOD is defined as the measured concentration value for which the probability of falsely claiming the absence of a peptide in the sample is 0.05\, given a probability 0.05 of falsely claiming its presence. These functionalities were previously a part of the MSstats package. The methodology is described in Galitzine \(2018\) \<doi\:10.1074\/mcp.RA117.000322\>.


.. conda:package:: bioconductor-msstatslobd

   |downloads_bioconductor-msstatslobd| |docker_bioconductor-msstatslobd|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-minpack.lm: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatslobd

   and update with::

      conda update bioconductor-msstatslobd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatslobd:<tag>

   (see `bioconductor-msstatslobd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatslobd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatslobd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatslobd
   :alt:   (downloads)
.. |docker_bioconductor-msstatslobd| image:: https://quay.io/repository/biocontainers/bioconductor-msstatslobd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatslobd
.. _`bioconductor-msstatslobd/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatslobd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatslobd";
        var versions = ["1.8.0","1.6.0","1.6.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html