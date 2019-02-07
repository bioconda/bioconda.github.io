.. title:: Package Recipe 'bioconductor-genomes'
.. highlight: bash


bioconductor-genomes
====================

.. conda:recipe:: bioconductor-genomes
   :replaces_section_title:

   Download genome and assembly reports from NCBI

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genomes.html
   :license: GPL-3
   :recipe: /`bioconductor-genomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes/meta.yaml>`_

   


.. conda:package:: bioconductor-genomes

   |downloads_bioconductor-genomes| |docker_bioconductor-genomes|

   :versions: 3.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-readr`  

   :required~by: |required_by_bioconductor-genomes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomes

   and update with::

      conda update bioconductor-genomes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomes


.. |required_by_bioconductor-genomes| conda:required_by:: bioconductor-genomes
.. |downloads_bioconductor-genomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomes| image:: https://quay.io/repository/biocontainers/bioconductor-genomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomes/README.html

