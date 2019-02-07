.. title:: Package Recipe 'bioconductor-rrho'
.. highlight: bash


bioconductor-rrho
=================

.. conda:recipe:: bioconductor-rrho
   :replaces_section_title:

   The package is aimed at inference on the amount of agreement in two sorted lists using the Rank\-Rank Hypergeometric Overlap test.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RRHO.html
   :license: GPL-2
   :recipe: /`bioconductor-rrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrho/meta.yaml>`_
   :links: biotools: :biotools:`rrho`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rrho

   |downloads_bioconductor-rrho| |docker_bioconductor-rrho|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-venndiagram`  

   :required~by: |required_by_bioconductor-rrho|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrho

   and update with::

      conda update bioconductor-rrho

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rrho


.. |required_by_bioconductor-rrho| conda:required_by:: bioconductor-rrho
.. |downloads_bioconductor-rrho| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrho.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rrho| image:: https://quay.io/repository/biocontainers/bioconductor-rrho/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrho







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrho/README.html

