:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mqtl.nmr'
.. highlight: bash

bioconductor-mqtl.nmr
=====================

.. conda:recipe:: bioconductor-mqtl.nmr
   :replaces_section_title:

   mQTL.NMR provides a complete mQTL analysis pipeline for 1H NMR data. Distinctive features include normalisation using most\-used approaches\, peak alignment using RSPA approach\, dimensionality reduction using SRV and binning approaches\, and mQTL analysis for animal and human cohorts.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/mQTL.NMR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mqtl.nmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqtl.nmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mqtl.nmr/meta.yaml>`_
   :links: biotools: :biotools:`mqtl.nmr`, doi: :doi:`10.1021/acs.analchem.5b00145`

   


.. conda:package:: bioconductor-mqtl.nmr

   |downloads_bioconductor-mqtl.nmr| |docker_bioconductor-mqtl.nmr|

   :versions: 1.14.0-0, 1.12.0-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-genabel: 
   
   :depends r-mass: 
   
   :depends r-outliers: 
   
   :depends r-qtl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mqtl.nmr

   and update with::

      conda update bioconductor-mqtl.nmr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mqtl.nmr:<tag>

   (see `bioconductor-mqtl.nmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mqtl.nmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mqtl.nmr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mqtl.nmr| image:: https://quay.io/repository/biocontainers/bioconductor-mqtl.nmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mqtl.nmr
.. _`bioconductor-mqtl.nmr/tags`: https://quay.io/repository/biocontainers/bioconductor-mqtl.nmr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mqtl.nmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mqtl.nmr/README.html