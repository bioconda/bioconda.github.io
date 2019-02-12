.. title:: Package Recipe 'bioconductor-transview'
.. highlight: bash


bioconductor-transview
======================

.. conda:recipe:: bioconductor-transview
   :replaces_section_title:

   This package provides efficient tools to generate\, access and display read densities of sequencing based data sets such as from RNA\-Seq and ChIP\-Seq.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TransView.html
   :license: GPL-3
   :recipe: /`bioconductor-transview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview/meta.yaml>`_
   :links: biotools: :biotools:`transview`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-transview

   |downloads_bioconductor-transview| |docker_bioconductor-transview|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  

   :required~by: |required_by_bioconductor-transview|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transview

   and update with::

      conda update bioconductor-transview

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-transview


.. |required_by_bioconductor-transview| conda:required_by:: bioconductor-transview
.. |downloads_bioconductor-transview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transview.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-transview| image:: https://quay.io/repository/biocontainers/bioconductor-transview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transview







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transview/README.html

