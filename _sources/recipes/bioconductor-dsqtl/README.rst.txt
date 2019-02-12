:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dsqtl'
.. highlight: bash

bioconductor-dsqtl
==================

.. conda:recipe:: bioconductor-dsqtl
   :replaces_section_title:

   dsQTL\, excerpt from Degner et al. 2012 Nature letter on DNA variants associated with DnaseI hypersensitivity

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/dsQTL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dsqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dsqtl/meta.yaml>`_

   


.. conda:package:: bioconductor-dsqtl

   |downloads_bioconductor-dsqtl| |docker_bioconductor-dsqtl|

   :versions: 0.20.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-ggbase: >=3.44.0,<3.45.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dsqtl

   and update with::

      conda update bioconductor-dsqtl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dsqtl:<tag>

   (see `bioconductor-dsqtl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dsqtl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dsqtl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dsqtl| image:: https://quay.io/repository/biocontainers/bioconductor-dsqtl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dsqtl
.. _`bioconductor-dsqtl/tags`: https://quay.io/repository/biocontainers/bioconductor-dsqtl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dsqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dsqtl/README.html