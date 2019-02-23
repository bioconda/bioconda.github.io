:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nam'
.. highlight: bash

r-nam
=====

.. conda:recipe:: r-nam
   :replaces_section_title:

   Designed for association studies in nested association mapping \(NAM\) panels\, experimental and random panels. The method is described by Xavier et al. \(2015\) \<doi\:10.1093\/bioinformatics\/btv448\>. It includes tools for genome\-wide associations of multiple populations\, marker quality control\, population genetics analysis\, genome\-wide prediction\, solving mixed models and finding variance components through likelihood and Bayesian methods.

   :homepage: https://CRAN.R-project.org/package=NAM
   :license: GPL3 / GPL-3
   :recipe: /`r-nam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nam/meta.yaml>`_

   


.. conda:package:: r-nam

   |downloads_r-nam| |docker_r-nam|

   :versions: 1.6.4-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-randomforest: 
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nam

   and update with::

      conda update r-nam

   or use the docker container::

      docker pull quay.io/biocontainers/r-nam:<tag>

   (see `r-nam/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nam| image:: https://img.shields.io/conda/dn/bioconda/r-nam.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nam| image:: https://quay.io/repository/biocontainers/r-nam/status
   :target: https://quay.io/repository/biocontainers/r-nam
.. _`r-nam/tags`: https://quay.io/repository/biocontainers/r-nam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nam/README.html