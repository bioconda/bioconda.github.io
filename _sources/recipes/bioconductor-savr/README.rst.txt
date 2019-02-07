.. title:: Package Recipe 'bioconductor-savr'
.. highlight: bash


bioconductor-savr
=================

.. conda:recipe:: bioconductor-savr
   :replaces_section_title:

   Parse Illumina Sequence Analysis Viewer \(SAV\) files\, access data\, and generate QC plots.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/savR.html
   :license: AGPL-3
   :recipe: /`bioconductor-savr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-savr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-savr/meta.yaml>`_
   :links: biotools: :biotools:`savr`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-savr

   |downloads_bioconductor-savr| |docker_bioconductor-savr|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-savr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-savr

   and update with::

      conda update bioconductor-savr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-savr


.. |required_by_bioconductor-savr| conda:required_by:: bioconductor-savr
.. |downloads_bioconductor-savr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-savr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-savr| image:: https://quay.io/repository/biocontainers/bioconductor-savr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-savr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-savr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-savr/README.html

