.. title:: Package Recipe 'bioconductor-snpstats'
.. highlight: bash


bioconductor-snpstats
=====================

.. conda:recipe:: bioconductor-snpstats
   :replaces_section_title:

   Classes and statistical methods for large SNP association studies. This extends the earlier snpMatrix package\, allowing for uncertainty in genotypes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/snpStats.html
   :license: GPL-3
   :recipe: /`bioconductor-snpstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpstats/meta.yaml>`_
   :links: biotools: :biotools:`snpstats`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-snpstats

   |downloads_bioconductor-snpstats| |docker_bioconductor-snpstats|

   :versions: 1.32.0, 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-snpstats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snpstats

   and update with::

      conda update bioconductor-snpstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-snpstats


.. |required_by_bioconductor-snpstats| conda:required_by:: bioconductor-snpstats
.. |downloads_bioconductor-snpstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpstats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snpstats| image:: https://quay.io/repository/biocontainers/bioconductor-snpstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpstats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpstats/README.html

