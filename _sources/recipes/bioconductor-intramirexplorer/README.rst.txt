.. title:: Package Recipe 'bioconductor-intramirexplorer'
.. highlight: bash


bioconductor-intramirexplorer
=============================

.. conda:recipe:: bioconductor-intramirexplorer
   :replaces_section_title:

   Intra\-miR\-ExploreR\, an integrative miRNA target prediction bioinformatics tool\, identifies targets combining expression and biophysical interactions of a given microRNA \(miR\). Using the tool\, we have identified targets for 92 intragenic miRs in D. melanogaster\, using available microarray expression data\, from Affymetrix 1 and Affymetrix2 microarray array platforms\, providing a global perspective of intragenic miR targets in Drosophila. Predicted targets are grouped according to biological functions using the DAVID Gene Ontology tool and are ranked based on a biologically relevant scoring system\, enabling the user to identify functionally relevant targets for a given miR.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IntramiRExploreR.html
   :license: GPL-2
   :recipe: /`bioconductor-intramirexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer/meta.yaml>`_

   


.. conda:package:: bioconductor-intramirexplorer

   |downloads_bioconductor-intramirexplorer| |docker_bioconductor-intramirexplorer|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-fgnet` >=3.16.0,<3.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph` >=1.0.1 :conda:package:`r-knitr` >=1.12.3 

   :required~by: |required_by_bioconductor-intramirexplorer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-intramirexplorer

   and update with::

      conda update bioconductor-intramirexplorer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-intramirexplorer


.. |required_by_bioconductor-intramirexplorer| conda:required_by:: bioconductor-intramirexplorer
.. |downloads_bioconductor-intramirexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intramirexplorer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-intramirexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html

