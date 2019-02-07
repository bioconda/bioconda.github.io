.. title:: Package Recipe 'bioconductor-reportingtools'
.. highlight: bash


bioconductor-reportingtools
===========================

.. conda:recipe:: bioconductor-reportingtools
   :replaces_section_title:

   The ReportingTools software package enables users to easily display reports of analysis results generated from sources such as microarray and sequencing data.  The package allows users to create HTML pages that may be viewed on a web browser such as Safari\, or in other formats readable by programs such as Excel.  Users can generate tables with sortable and filterable columns\, make and display plots\, and link table entries to other data sources such as NCBI or larger plots within the HTML page.  Using the package\, users can also produce a table of contents page to link various reports together for a particular project that can be viewed in a web browser.  For more examples\, please visit our site\: http\:\/\/ research\-pub.gene.com\/ReportingTools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ReportingTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-reportingtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reportingtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reportingtools/meta.yaml>`_
   :links: biotools: :biotools:`reportingtools`

   


.. conda:package:: bioconductor-reportingtools

   |downloads_bioconductor-reportingtools| |docker_bioconductor-reportingtools|

   :versions: 2.22.0, 2.20.0, 2.17.3

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-gostats` >=2.48.0,<2.49.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-pfam.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-hwriter`  :conda:package:`r-knitr`  :conda:package:`r-lattice`  :conda:package:`r-r.utils`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-reportingtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reportingtools

   and update with::

      conda update bioconductor-reportingtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-reportingtools


.. |required_by_bioconductor-reportingtools| conda:required_by:: bioconductor-reportingtools
.. |downloads_bioconductor-reportingtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reportingtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-reportingtools| image:: https://quay.io/repository/biocontainers/bioconductor-reportingtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reportingtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reportingtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reportingtools/README.html

