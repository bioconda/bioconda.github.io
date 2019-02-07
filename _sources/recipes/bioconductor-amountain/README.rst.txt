.. title:: Package Recipe 'bioconductor-amountain'
.. highlight: bash


bioconductor-amountain
======================

.. conda:recipe:: bioconductor-amountain
   :replaces_section_title:

   A pure data\-driven gene network\, weighted gene co\-expression network \(WGCN\) could be constructed only from expression profile. Different layers in such networks may represent different time points\, multiple conditions or various species. AMOUNTAIN aims to search active modules in multi\-layer WGCN using a continuous optimization approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AMOUNTAIN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-amountain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain/meta.yaml>`_
   :links: biotools: :biotools:`amountain`, doi: :doi:`10.1101/056952`

   


.. conda:package:: bioconductor-amountain

   |downloads_bioconductor-amountain| |docker_bioconductor-amountain|

   :versions: 1.8.0, 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`gsl` >=2.4,<2.5.0a0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`openblas` >=0.3.3,<0.3.4.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-amountain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amountain

   and update with::

      conda update bioconductor-amountain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-amountain


.. |required_by_bioconductor-amountain| conda:required_by:: bioconductor-amountain
.. |downloads_bioconductor-amountain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amountain.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-amountain| image:: https://quay.io/repository/biocontainers/bioconductor-amountain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amountain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amountain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amountain/README.html

