.. title:: Package Recipe 'bioconductor-dfp'
.. highlight: bash


bioconductor-dfp
================

.. conda:recipe:: bioconductor-dfp
   :replaces_section_title:

   This package provides a supervised technique able to identify differentially expressed genes\, based on the construction of \\emph\{Fuzzy Patterns\} \(FPs\). The Fuzzy Patterns are built by means of applying 3 Membership Functions to discretized gene expression values.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DFP.html
   :license: GPL-2
   :recipe: /`bioconductor-dfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfp/meta.yaml>`_
   :links: biotools: :biotools:`dfp`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-dfp

   |downloads_bioconductor-dfp| |docker_bioconductor-dfp|

   :versions: 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-dfp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dfp

   and update with::

      conda update bioconductor-dfp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dfp


.. |required_by_bioconductor-dfp| conda:required_by:: bioconductor-dfp
.. |downloads_bioconductor-dfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dfp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dfp| image:: https://quay.io/repository/biocontainers/bioconductor-dfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dfp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dfp/README.html

