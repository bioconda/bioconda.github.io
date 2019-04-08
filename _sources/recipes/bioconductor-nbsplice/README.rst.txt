:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nbsplice'
.. highlight: bash

bioconductor-nbsplice
=====================

.. conda:recipe:: bioconductor-nbsplice
   :replaces_section_title:

   The package proposes a differential splicing evaluation method based on isoform quantification. It applies generalized linear models with negative binomial distribution to infer changes in isoform relative expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NBSplice.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-nbsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbsplice/meta.yaml>`_

   


.. conda:package:: bioconductor-nbsplice

   |downloads_bioconductor-nbsplice| |docker_bioconductor-nbsplice|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-car: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-mppa: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nbsplice

   and update with::

      conda update bioconductor-nbsplice

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nbsplice:<tag>

   (see `bioconductor-nbsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nbsplice| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nbsplice.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nbsplice| image:: https://quay.io/repository/biocontainers/bioconductor-nbsplice/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nbsplice
.. _`bioconductor-nbsplice/tags`: https://quay.io/repository/biocontainers/bioconductor-nbsplice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nbsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nbsplice/README.html