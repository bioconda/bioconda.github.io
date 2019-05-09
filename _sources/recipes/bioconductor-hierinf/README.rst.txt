:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hierinf'
.. highlight: bash

bioconductor-hierinf
====================

.. conda:recipe:: bioconductor-hierinf
   :replaces_section_title:

   Tools to perform hierarchical inference for one or multiple studies \/ data sets based on high\-dimensional multivariate \(generalised\) linear models. A possible application is to perform hierarchical inference for GWA studies to find significant groups or single SNPs \(if the signal is strong\) in a data\-driven and automated procedure. The method is based on an efficient hierarchical multiple testing correction and controls the FWER. The functions can easily be run in parallel.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hierinf.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-hierinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hierinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hierinf/meta.yaml>`_

   


.. conda:package:: bioconductor-hierinf

   |downloads_bioconductor-hierinf| |docker_bioconductor-hierinf|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fmsb: 
   :depends r-glmnet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hierinf

   and update with::

      conda update bioconductor-hierinf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hierinf:<tag>

   (see `bioconductor-hierinf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hierinf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hierinf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hierinf| image:: https://quay.io/repository/biocontainers/bioconductor-hierinf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hierinf
.. _`bioconductor-hierinf/tags`: https://quay.io/repository/biocontainers/bioconductor-hierinf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hierinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hierinf/README.html