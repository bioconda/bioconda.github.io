:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rama'
.. highlight: bash

bioconductor-rama
=================

.. conda:recipe:: bioconductor-rama
   :replaces_section_title:

   Robust estimation of cDNA microarray intensities with replicates. The package uses a Bayesian hierarchical model for the robust estimation. Outliers are modeled explicitly using a t\-distribution\, and the model also addresses classical issues such as design effects\, normalization\, transformation\, and nonconstant variance.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rama.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rama/meta.yaml>`_
   :links: biotools: :biotools:`rama`, doi: :doi:`10.1198/016214505000001096`

   


.. conda:package:: bioconductor-rama

   |downloads_bioconductor-rama| |docker_bioconductor-rama|

   :versions: 1.58.0-1, 1.58.0-0, 1.56.0-1, 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rama

   and update with::

      conda update bioconductor-rama

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rama:<tag>

   (see `bioconductor-rama/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rama| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rama.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rama
   :alt:   (downloads)
.. |docker_bioconductor-rama| image:: https://quay.io/repository/biocontainers/bioconductor-rama/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rama
.. _`bioconductor-rama/tags`: https://quay.io/repository/biocontainers/bioconductor-rama?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rama/README.html