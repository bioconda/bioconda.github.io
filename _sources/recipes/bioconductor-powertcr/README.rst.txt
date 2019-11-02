:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-powertcr'
.. highlight: bash

bioconductor-powertcr
=====================

.. conda:recipe:: bioconductor-powertcr
   :replaces_section_title:

   This package provides a model for the clone size distribution of the TCR repertoire. Further\, it permits comparative analysis of TCR repertoire libraries based on theoretical model fits.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/powerTCR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-powertcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powertcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powertcr/meta.yaml>`_

   


.. conda:package:: bioconductor-powertcr

   |downloads_bioconductor-powertcr| |docker_bioconductor-powertcr|

   :versions: 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cubature: 
   :depends r-doparallel: 
   :depends r-evmix: 
   :depends r-foreach: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-tcr: 
   :depends r-truncdist: 
   :depends r-vegan: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-powertcr

   and update with::

      conda update bioconductor-powertcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-powertcr:<tag>

   (see `bioconductor-powertcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-powertcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-powertcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-powertcr
   :alt:   (downloads)
.. |docker_bioconductor-powertcr| image:: https://quay.io/repository/biocontainers/bioconductor-powertcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-powertcr
.. _`bioconductor-powertcr/tags`: https://quay.io/repository/biocontainers/bioconductor-powertcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-powertcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-powertcr/README.html