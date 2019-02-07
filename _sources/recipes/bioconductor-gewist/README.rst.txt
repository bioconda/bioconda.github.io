.. title:: Package Recipe 'bioconductor-gewist'
.. highlight: bash


bioconductor-gewist
===================

.. conda:recipe:: bioconductor-gewist
   :replaces_section_title:

   This \'GEWIST\' package provides statistical tools to efficiently optimize SNP prioritization for gene\-gene and gene\-environment interactions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GEWIST.html
   :license: GPL-2
   :recipe: /`bioconductor-gewist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gewist/meta.yaml>`_
   :links: biotools: :biotools:`gewist`, doi: :doi:`10.1002/gepi.20624`

   


.. conda:package:: bioconductor-gewist

   |downloads_bioconductor-gewist| |docker_bioconductor-gewist|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-car`  

   :required~by: |required_by_bioconductor-gewist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gewist

   and update with::

      conda update bioconductor-gewist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gewist


.. |required_by_bioconductor-gewist| conda:required_by:: bioconductor-gewist
.. |downloads_bioconductor-gewist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gewist.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gewist| image:: https://quay.io/repository/biocontainers/bioconductor-gewist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gewist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gewist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gewist/README.html

