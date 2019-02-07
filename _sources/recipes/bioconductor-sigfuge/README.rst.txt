.. title:: Package Recipe 'bioconductor-sigfuge'
.. highlight: bash


bioconductor-sigfuge
====================

.. conda:recipe:: bioconductor-sigfuge
   :replaces_section_title:

   Algorithm for testing significance of clustering in RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SigFuge.html
   :license: GPL-3
   :recipe: /`bioconductor-sigfuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfuge/meta.yaml>`_
   :links: biotools: :biotools:`sigfuge`, doi: :doi:`10.1093/nar/gku521`

   


.. conda:package:: bioconductor-sigfuge

   |downloads_bioconductor-sigfuge| |docker_bioconductor-sigfuge|

   :versions: 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-matlab`  :conda:package:`r-reshape`  :conda:package:`r-sigclust`  

   :required~by: |required_by_bioconductor-sigfuge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigfuge

   and update with::

      conda update bioconductor-sigfuge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigfuge


.. |required_by_bioconductor-sigfuge| conda:required_by:: bioconductor-sigfuge
.. |downloads_bioconductor-sigfuge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfuge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigfuge| image:: https://quay.io/repository/biocontainers/bioconductor-sigfuge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfuge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfuge/README.html

