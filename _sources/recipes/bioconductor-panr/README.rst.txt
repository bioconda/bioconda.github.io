:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panr'
.. highlight: bash

bioconductor-panr
=================

.. conda:recipe:: bioconductor-panr
   :replaces_section_title:

   This package provides S4 classes and methods for inferring functional gene networks with edges encoding posterior beliefs of gene association types and nodes encoding perturbation effects.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PANR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panr/meta.yaml>`_
   :links: biotools: :biotools:`panr`, doi: :doi:`10.1371/journal.pcbi.1002566`

   


.. conda:package:: bioconductor-panr

   |downloads_bioconductor-panr| |docker_bioconductor-panr|

   :versions: 1.30.0-0, 1.28.1-0, 1.28.0-0, 1.26.0-0, 1.24.0-0
   
   :depends bioconductor-reder: >=1.32.0,<1.33.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-pvclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panr

   and update with::

      conda update bioconductor-panr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panr:<tag>

   (see `bioconductor-panr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panr
   :alt:   (downloads)
.. |docker_bioconductor-panr| image:: https://quay.io/repository/biocontainers/bioconductor-panr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panr
.. _`bioconductor-panr/tags`: https://quay.io/repository/biocontainers/bioconductor-panr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panr/README.html