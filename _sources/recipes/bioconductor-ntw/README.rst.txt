:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ntw'
.. highlight: bash

bioconductor-ntw
================

.. conda:recipe:: bioconductor-ntw
   :replaces_section_title:

   Predict gene network using an Ordinary Differential Equation \(ODE\) based method

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/NTW.html
   :license: GPL-2
   :recipe: /`bioconductor-ntw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw/meta.yaml>`_
   :links: biotools: :biotools:`ntw`, doi: :doi:`10.1093/bioinformatics/btq629`

   This package predicts the gene\-gene interaction network and identifies the direct transcriptional targets of the perturbation using an ODE \(Ordinary Differential Equation\) based method.


.. conda:package:: bioconductor-ntw

   |downloads_bioconductor-ntw| |docker_bioconductor-ntw|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-1, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ntw

   and update with::

      conda update bioconductor-ntw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ntw:<tag>

   (see `bioconductor-ntw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ntw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ntw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ntw
   :alt:   (downloads)
.. |docker_bioconductor-ntw| image:: https://quay.io/repository/biocontainers/bioconductor-ntw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ntw
.. _`bioconductor-ntw/tags`: https://quay.io/repository/biocontainers/bioconductor-ntw?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ntw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ntw/README.html