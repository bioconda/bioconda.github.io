.. title:: Package Recipe 'bioconductor-flowdensity'
.. highlight: bash


bioconductor-flowdensity
========================

.. conda:recipe:: bioconductor-flowdensity
   :replaces_section_title:

   This package provides tools for automated sequential gating analogous to the manual gating strategy based on the density of the data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowDensity.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowdensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity/meta.yaml>`_
   :links: biotools: :biotools:`flowdensity`, doi: :doi:`10.1093/bioinformatics/btu677`

   


.. conda:package:: bioconductor-flowdensity

   |downloads_bioconductor-flowdensity| |docker_bioconductor-flowdensity|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0, 1.6.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowworkspace` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-car`  :conda:package:`r-gplots`  :conda:package:`r-rfoc`  :conda:package:`r-rgeos`  :conda:package:`r-sp`  

   :required~by: |required_by_bioconductor-flowdensity|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowdensity

   and update with::

      conda update bioconductor-flowdensity

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowdensity


.. |required_by_bioconductor-flowdensity| conda:required_by:: bioconductor-flowdensity
.. |downloads_bioconductor-flowdensity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowdensity.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowdensity| image:: https://quay.io/repository/biocontainers/bioconductor-flowdensity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowdensity







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html

