:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowdensity'
.. highlight: bash

bioconductor-flowdensity
========================

.. conda:recipe:: bioconductor-flowdensity
   :replaces_section_title:

   This package provides tools for automated sequential gating analogous to the manual gating strategy based on the density of the data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/flowDensity.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowdensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity/meta.yaml>`_
   :links: biotools: :biotools:`flowdensity`, doi: :doi:`10.1093/bioinformatics/btu677`

   


.. conda:package:: bioconductor-flowdensity

   |downloads_bioconductor-flowdensity| |docker_bioconductor-flowdensity|

   :versions: 1.18.0-1, 1.16.1-0, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.6.0-0
   
   :depends bioconductor-flowcore: >=1.50.0,<1.51.0
   :depends bioconductor-flowworkspace: >=3.32.0,<3.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-car: 
   :depends r-gplots: 
   :depends r-rfoc: 
   :depends r-rgeos: 
   :depends r-sp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowdensity

   and update with::

      conda update bioconductor-flowdensity

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowdensity:<tag>

   (see `bioconductor-flowdensity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowdensity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowdensity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowdensity
   :alt:   (downloads)
.. |docker_bioconductor-flowdensity| image:: https://quay.io/repository/biocontainers/bioconductor-flowdensity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowdensity
.. _`bioconductor-flowdensity/tags`: https://quay.io/repository/biocontainers/bioconductor-flowdensity?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html