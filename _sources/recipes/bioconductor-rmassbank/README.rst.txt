:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmassbank'
.. highlight: bash

bioconductor-rmassbank
======================

.. conda:recipe:: bioconductor-rmassbank
   :replaces_section_title:

   Workflow to process tandem MS files and build MassBank records

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RMassBank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank/meta.yaml>`_

   Workflow to process tandem MS files and build MassBank records. Functions include automated extraction of tandem MS spectra\, formula assignment to tandem MS fragments\, recalibration of tandem MS spectra with assigned fragments\, spectrum cleanup\, automated retrieval of compound information from Internet databases\, and export to MassBank records.


.. conda:package:: bioconductor-rmassbank

   |downloads_bioconductor-rmassbank| |docker_bioconductor-rmassbank|

   :versions: 2.13.0-0, 2.12.0-1, 2.10.1-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-msnbase: >=2.12.0,<2.13.0
   :depends bioconductor-mzr: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openbabel: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-digest: 
   :depends r-httr: 
   :depends r-rcdk: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-xml: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmassbank

   and update with::

      conda update bioconductor-rmassbank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmassbank:<tag>

   (see `bioconductor-rmassbank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmassbank
   :alt:   (downloads)
.. |docker_bioconductor-rmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-rmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmassbank
.. _`bioconductor-rmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-rmassbank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html