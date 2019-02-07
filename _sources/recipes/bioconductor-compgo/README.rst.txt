.. title:: Package Recipe 'bioconductor-compgo'
.. highlight: bash


bioconductor-compgo
===================

.. conda:recipe:: bioconductor-compgo
   :replaces_section_title:

   This package contains functions to accomplish several tasks. It is able to download full genome databases from UCSC\, import .bed files easily\, annotate these .bed file regions with genes \(plus distance\) from aforementioned database dumps\, interface with DAVID to create functional annotation and gene ontology enrichment charts based on gene lists \(such as those generated from input .bed files\) and finally visualise and compare these enrichments using either directed acyclic graphs or scatterplots.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CompGO.html
   :license: GPL-2
   :recipe: /`bioconductor-compgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compgo/meta.yaml>`_

   


.. conda:package:: bioconductor-compgo

   |downloads_bioconductor-compgo| |docker_bioconductor-compgo|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-compgo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compgo

   and update with::

      conda update bioconductor-compgo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-compgo


.. |required_by_bioconductor-compgo| conda:required_by:: bioconductor-compgo
.. |downloads_bioconductor-compgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compgo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compgo| image:: https://quay.io/repository/biocontainers/bioconductor-compgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compgo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compgo/README.html

