.. title:: Package Recipe 'bioconductor-mirsponge'
.. highlight: bash


bioconductor-mirsponge
======================

.. conda:recipe:: bioconductor-mirsponge
   :replaces_section_title:

   This package provides several functions to study miRNA sponge \(also called ceRNA or miRNA decoy\)\, including popular methods for identifying miRNA sponge interactions\, and the integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of modules\, and conduct survival analysis of modules.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRsponge.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponge/meta.yaml>`_

   


.. conda:package:: bioconductor-mirsponge

   |downloads_bioconductor-mirsponge| |docker_bioconductor-mirsponge|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-reactomepa` >=1.26.0,<1.27.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-igraph`  :conda:package:`r-linkcomm`  :conda:package:`r-mcl`  :conda:package:`r-rcpp`  :conda:package:`r-survival`  :conda:package:`r-varhandle`  

   :required~by: |required_by_bioconductor-mirsponge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsponge

   and update with::

      conda update bioconductor-mirsponge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirsponge


.. |required_by_bioconductor-mirsponge| conda:required_by:: bioconductor-mirsponge
.. |downloads_bioconductor-mirsponge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirsponge| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponge/README.html

