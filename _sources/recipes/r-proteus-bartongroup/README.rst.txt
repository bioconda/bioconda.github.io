:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-proteus-bartongroup'
.. highlight: bash

r-proteus-bartongroup
=====================

.. conda:recipe:: r-proteus-bartongroup
   :replaces_section_title:
   :noindex:

   R package for analysing proteomics data

   :homepage: https://github.com/bartongroup/Proteus
   :license: MIT / MIT
   :recipe: /`r-proteus-bartongroup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup/meta.yaml>`_

   Proteus is an R package for downstream analysis of MaxQuant output.
   The input for Proteus is the evidence file. Evidence data are aggregated
   into peptides and then into proteins. Proteus offers many visualisation
   and data analysis tools both at peptide and protein level. In particular
   it allows simple differential expression using limma.



.. conda:package:: r-proteus-bartongroup

   |downloads_r-proteus-bartongroup| |docker_r-proteus-bartongroup|

   :versions:
      
      

      ``0.2.16-1``,  ``0.2.16-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggdendro: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-proteus-bartongroup

   and update with::

      conda update r-proteus-bartongroup

   or use the docker container::

      docker pull quay.io/biocontainers/r-proteus-bartongroup:<tag>

   (see `r-proteus-bartongroup/tags`_ for valid values for ``<tag>``)


.. |downloads_r-proteus-bartongroup| image:: https://img.shields.io/conda/dn/bioconda/r-proteus-bartongroup.svg?style=flat
   :target: https://anaconda.org/bioconda/r-proteus-bartongroup
   :alt:   (downloads)
.. |docker_r-proteus-bartongroup| image:: https://quay.io/repository/biocontainers/r-proteus-bartongroup/status
   :target: https://quay.io/repository/biocontainers/r-proteus-bartongroup
.. _`r-proteus-bartongroup/tags`: https://quay.io/repository/biocontainers/r-proteus-bartongroup?tab=tags


.. raw:: html

    <script>
        var package = "r-proteus-bartongroup";
        var versions = ["0.2.16","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html