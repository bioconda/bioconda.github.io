:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-les'
.. highlight: bash

bioconductor-les
================

.. conda:recipe:: bioconductor-les
   :replaces_section_title:

   The \'les\' package estimates Loci of Enhanced Significance \(LES\) in tiling microarray data. These are regions of regulation such as found in differential transcription\, CHiP\-chip\, or DNA modification analysis. The package provides a universal framework suitable for identifying differential effects in tiling microarray data sets\, and is independent of the underlying statistics at the level of single probes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/les.html
   :license: GPL-3
   :recipe: /`bioconductor-les <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les/meta.yaml>`_
   :links: biotools: :biotools:`les`, doi: :doi:`10.1089/cmb.2008.0226`

   


.. conda:package:: bioconductor-les

   |downloads_bioconductor-les| |docker_bioconductor-les|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-boot: 
   :depends r-fdrtool: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-les

   and update with::

      conda update bioconductor-les

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-les:<tag>

   (see `bioconductor-les/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-les| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-les.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-les| image:: https://quay.io/repository/biocontainers/bioconductor-les/status
   :target: https://quay.io/repository/biocontainers/bioconductor-les
.. _`bioconductor-les/tags`: https://quay.io/repository/biocontainers/bioconductor-les?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-les/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-les/README.html