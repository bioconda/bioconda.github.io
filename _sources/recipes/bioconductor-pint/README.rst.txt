.. title:: Package Recipe 'bioconductor-pint'
.. highlight: bash


bioconductor-pint
=================

.. conda:recipe:: bioconductor-pint
   :replaces_section_title:

   Pairwise data integration for functional genomics\, including tools for DNA\/RNA\/miRNA dependency screens.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pint.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-pint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pint/meta.yaml>`_
   :links: biotools: :biotools:`pint`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-pint

   |downloads_bioconductor-pint| |docker_bioconductor-pint|

   :versions: 1.32.0, 1.30.0, 1.28.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dmt`  :conda:package:`r-matrix`  :conda:package:`r-mvtnorm`  

   :required~by: |required_by_bioconductor-pint|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pint

   and update with::

      conda update bioconductor-pint

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pint


.. |required_by_bioconductor-pint| conda:required_by:: bioconductor-pint
.. |downloads_bioconductor-pint| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pint.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pint| image:: https://quay.io/repository/biocontainers/bioconductor-pint/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pint







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pint/README.html

