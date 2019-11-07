:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affixcan'
.. highlight: bash

bioconductor-affixcan
=====================

.. conda:recipe:: bioconductor-affixcan
   :replaces_section_title:

   A Functional Approach To Impute Genetically Regulated Expression

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/AffiXcan.html
   :license: GPL-3
   :recipe: /`bioconductor-affixcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affixcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affixcan/meta.yaml>`_

   Impute a GReX \(Genetically Regulated Expression\) for a set of genes in a sample of individuals\, using a method based on the Total Binding Affinity \(TBA\). Statistical models to impute GReX can be trained with a training dataset where the real total expression values are known.


.. conda:package:: bioconductor-affixcan

   |downloads_bioconductor-affixcan| |docker_bioconductor-affixcan|

   :versions: 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-multiassayexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-crayon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affixcan

   and update with::

      conda update bioconductor-affixcan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affixcan:<tag>

   (see `bioconductor-affixcan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affixcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affixcan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affixcan
   :alt:   (downloads)
.. |docker_bioconductor-affixcan| image:: https://quay.io/repository/biocontainers/bioconductor-affixcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affixcan
.. _`bioconductor-affixcan/tags`: https://quay.io/repository/biocontainers/bioconductor-affixcan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affixcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affixcan/README.html