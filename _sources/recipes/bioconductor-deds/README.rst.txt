.. title:: Package Recipe 'bioconductor-deds'
.. highlight: bash


bioconductor-deds
=================

.. conda:recipe:: bioconductor-deds
   :replaces_section_title:

   This library contains functions that calculate various statistics of differential expression for microarray data\, including t statistics\, fold change\, F statistics\, SAM\, moderated t and F statistics and B statistics. It also implements a new methodology called DEDS \(Differential Expression via Distance Summary\)\, which selects differentially expressed genes by integrating and summarizing a set of statistics using a weighted distance approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DEDS.html
   :license: LGPL
   :recipe: /`bioconductor-deds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deds/meta.yaml>`_
   :links: biotools: :biotools:`deds`, doi: :doi:`10.1016/j.compbiomed.2013.12.002`

   


.. conda:package:: bioconductor-deds

   |downloads_bioconductor-deds| |docker_bioconductor-deds|

   :versions: 1.56.0, 1.54.0, 1.52.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-deds|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deds

   and update with::

      conda update bioconductor-deds

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deds


.. |required_by_bioconductor-deds| conda:required_by:: bioconductor-deds
.. |downloads_bioconductor-deds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deds.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deds| image:: https://quay.io/repository/biocontainers/bioconductor-deds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deds







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deds/README.html

