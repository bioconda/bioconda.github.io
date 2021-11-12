:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pi'
.. highlight: bash

bioconductor-pi
===============

.. conda:recipe:: bioconductor-pi
   :replaces_section_title:
   :noindex:

   Leveraging Genetic Evidence to Prioritise Drug Targets at the Gene and Pathway Level

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Pi.html
   :license: GPL-3
   :recipe: /`bioconductor-pi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pi/meta.yaml>`_

   Priority index or Pi is developed as a genomic\-led target prioritisation system. It integrates functional genomic predictors\, knowledge of network connectivity and immune ontologies to prioritise potential drug targets at the gene and pathway level.


.. conda:package:: bioconductor-pi

   |downloads_bioconductor-pi| |docker_bioconductor-pi|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-suprahex: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-dnet: 
   :depends r-dplyr: 
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-osfr: 
   :depends r-plot3d: 
   :depends r-purrr: 
   :depends r-randomforest: 
   :depends r-rcircos: 
   :depends r-readr: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pi

   and update with::

      conda update bioconductor-pi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pi:<tag>

   (see `bioconductor-pi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pi
   :alt:   (downloads)
.. |docker_bioconductor-pi| image:: https://quay.io/repository/biocontainers/bioconductor-pi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pi
.. _`bioconductor-pi/tags`: https://quay.io/repository/biocontainers/bioconductor-pi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pi";
        var versions = ["2.6.0","2.4.0","2.2.0","2.0.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pi/README.html