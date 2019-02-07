.. title:: Package Recipe 'bioconductor-remp'
.. highlight: bash


bioconductor-remp
=================

.. conda:recipe:: bioconductor-remp
   :replaces_section_title:

   Machine learning\-based tools to predict DNA methylation of locus\-specific repetitive elements \(RE\) by learning surrounding genetic and epigenetic information. These tools provide genomewide and single\-base resolution of DNA methylation prediction on RE that are difficult to measure using array\-based or sequencing\-based platforms\, which enables epigenome\-wide association study \(EWAS\) and differentially methylated region \(DMR\) analysis on RE.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/REMP.html
   :license: GPL-3
   :recipe: /`bioconductor-remp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp/meta.yaml>`_

   


.. conda:package:: bioconductor-remp

   |downloads_bioconductor-remp| |docker_bioconductor-remp|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-remp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-remp

   and update with::

      conda update bioconductor-remp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-remp


.. |required_by_bioconductor-remp| conda:required_by:: bioconductor-remp
.. |downloads_bioconductor-remp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-remp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-remp| image:: https://quay.io/repository/biocontainers/bioconductor-remp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-remp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-remp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-remp/README.html

