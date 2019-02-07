.. title:: Package Recipe 'bioconductor-spidermir'
.. highlight: bash


bioconductor-spidermir
======================

.. conda:recipe:: bioconductor-spidermir
   :replaces_section_title:

   The aims of SpidermiR are \: i\) facilitate the network open\-access data retrieval from GeneMania data\, ii\) prepare the data using the appropriate gene nomenclature\, iii\) integration of miRNA data in a specific network\, iv\) provide different standard analyses and v\) allow the user to visualize the results. In more detail\, the package provides multiple methods for query\, prepare and download network data \(GeneMania\)\, and the integration with validated and predicted miRNA data \(mirWalk\, miR2Disease\,miRTar\, miRTarBase\, miRandola\,Pharmaco\-miR\,DIANA\, Miranda\, PicTar and TargetScan\) and the use of standard analysis \(igraph\) and visualization methods \(networkD3\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SpidermiR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-spidermir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spidermir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spidermir/meta.yaml>`_
   :links: biotools: :biotools:`spidermir`, doi: :doi:`10.3390/ijms18020274`

   


.. conda:package:: bioconductor-spidermir

   |downloads_bioconductor-spidermir| |docker_bioconductor-spidermir|

   :versions: 1.12.0, 1.10.0, 1.8.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-mirnatap` >=1.16.0,<1.17.0 :conda:package:`bioconductor-mirnatap.db` >=0.99.0,<0.100.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-tcgabiolinks` >=2.10.0,<2.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gdata`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-httr`  :conda:package:`r-igraph`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-networkd3`  :conda:package:`r-visnetwork`  

   :required~by: |required_by_bioconductor-spidermir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spidermir

   and update with::

      conda update bioconductor-spidermir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-spidermir


.. |required_by_bioconductor-spidermir| conda:required_by:: bioconductor-spidermir
.. |downloads_bioconductor-spidermir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spidermir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-spidermir| image:: https://quay.io/repository/biocontainers/bioconductor-spidermir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spidermir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spidermir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spidermir/README.html

