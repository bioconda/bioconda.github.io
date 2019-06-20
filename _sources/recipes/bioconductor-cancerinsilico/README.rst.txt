:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancerinsilico'
.. highlight: bash

bioconductor-cancerinsilico
===========================

.. conda:recipe:: bioconductor-cancerinsilico
   :replaces_section_title:

   The CancerInSilico package provides an R interface for running mathematical models of tumor progresson and generating gene expression data from the results. This package has the underlying models implemented in C\+\+ and the output and analysis features implemented in R.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CancerInSilico.html
   :license: GPL-2
   :recipe: /`bioconductor-cancerinsilico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerinsilico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerinsilico/meta.yaml>`_
   :links: biotools: :biotools:`cancerinsilico`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cancerinsilico

   |downloads_bioconductor-cancerinsilico| |docker_bioconductor-cancerinsilico|

   :versions: 2.4.0-0, 2.2.1-0, 2.2.0-0, 2.0.0-0, 1.4.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerinsilico

   and update with::

      conda update bioconductor-cancerinsilico

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancerinsilico:<tag>

   (see `bioconductor-cancerinsilico/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancerinsilico| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerinsilico.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancerinsilico
   :alt:   (downloads)
.. |docker_bioconductor-cancerinsilico| image:: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico
.. _`bioconductor-cancerinsilico/tags`: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerinsilico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerinsilico/README.html