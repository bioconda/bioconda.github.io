:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcm'
.. highlight: bash

bioconductor-rcm
================

.. conda:recipe:: bioconductor-rcm
   :replaces_section_title:

   Combine ideas of log\-linear analysis of contingency table\, flexible response function estimation and empirical Bayes dispersion estimation for explorative visualization of microbiome datasets. The package includes unconstrained as well as constrained analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RCM.html
   :license: GPL-2
   :recipe: /`bioconductor-rcm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcm/meta.yaml>`_

   


.. conda:package:: bioconductor-rcm

   |downloads_bioconductor-rcm| |docker_bioconductor-rcm|

   :versions: 1.0.0-1
   
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-phyloseq: >=1.28.0,<1.29.0
   :depends r-alabama: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: >=2.2.1.9000
   :depends r-mass: 
   :depends r-nleqslv: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tensor: 
   :depends r-tseries: 
   :depends r-vegan: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcm

   and update with::

      conda update bioconductor-rcm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcm:<tag>

   (see `bioconductor-rcm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcm
   :alt:   (downloads)
.. |docker_bioconductor-rcm| image:: https://quay.io/repository/biocontainers/bioconductor-rcm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcm
.. _`bioconductor-rcm/tags`: https://quay.io/repository/biocontainers/bioconductor-rcm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcm/README.html