.. title:: Package Recipe 'bioconductor-cnanorm'
.. highlight: bash


bioconductor-cnanorm
====================

.. conda:recipe:: bioconductor-cnanorm
   :replaces_section_title:

   Performs ratio\, GC content correction and normalization of data obtained using low coverage \(one read every 100\-10\,000 bp\) high troughput sequencing. It performs a \"discrete\" normalization looking for the ploidy of the genome. It will also provide tumour content if at least two ploidy states can be found.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNAnorm.html
   :license: GPL-2
   :recipe: /`bioconductor-cnanorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm/meta.yaml>`_
   :links: biotools: :biotools:`cnanorm`

   


.. conda:package:: bioconductor-cnanorm

   |downloads_bioconductor-cnanorm| |docker_bioconductor-cnanorm|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.1

   :depends: :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`libgfortran` >=3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cnanorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnanorm

   and update with::

      conda update bioconductor-cnanorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnanorm


.. |required_by_bioconductor-cnanorm| conda:required_by:: bioconductor-cnanorm
.. |downloads_bioconductor-cnanorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnanorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnanorm| image:: https://quay.io/repository/biocontainers/bioconductor-cnanorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnanorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html

