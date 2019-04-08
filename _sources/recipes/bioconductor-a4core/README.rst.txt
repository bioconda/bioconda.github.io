:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4core'
.. highlight: bash

bioconductor-a4core
===================

.. conda:recipe:: bioconductor-a4core
   :replaces_section_title:

   Automated Affymetrix Array Analysis Core Package

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/a4Core.html
   :license: GPL-3
   :recipe: /`bioconductor-a4core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4core/meta.yaml>`_
   :links: biotools: :biotools:`a4core`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-a4core

   |downloads_bioconductor-a4core| |docker_bioconductor-a4core|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-0, 1.24.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-glmnet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-a4core

   and update with::

      conda update bioconductor-a4core

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4core:<tag>

   (see `bioconductor-a4core/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4core| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4core.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-a4core| image:: https://quay.io/repository/biocontainers/bioconductor-a4core/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4core
.. _`bioconductor-a4core/tags`: https://quay.io/repository/biocontainers/bioconductor-a4core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4core/README.html