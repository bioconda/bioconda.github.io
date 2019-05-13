:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ippd'
.. highlight: bash

bioconductor-ippd
=================

.. conda:recipe:: bioconductor-ippd
   :replaces_section_title:

   The package provides functionality to extract isotopic peak patterns from raw mass spectra. This is done by fitting a large set of template basis functions to the raw spectrum using either nonnegative least squares or least absolute deviation fittting. The package offers a flexible function which tries to estimate model parameters in a way tailored to the peak shapes in the data. The package also provides functionality to process LCMS runs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IPPD.html
   :license: GPL (version 2 or later)
   :recipe: /`bioconductor-ippd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ippd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ippd/meta.yaml>`_
   :links: biotools: :biotools:`ippd`, doi: :doi:`10.1186/1471-2105-13-291`

   


.. conda:package:: bioconductor-ippd

   |downloads_bioconductor-ippd| |docker_bioconductor-ippd|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bitops: 
   :depends r-digest: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ippd

   and update with::

      conda update bioconductor-ippd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ippd:<tag>

   (see `bioconductor-ippd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ippd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ippd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ippd
   :alt:   (downloads)
.. |docker_bioconductor-ippd| image:: https://quay.io/repository/biocontainers/bioconductor-ippd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ippd
.. _`bioconductor-ippd/tags`: https://quay.io/repository/biocontainers/bioconductor-ippd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ippd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ippd/README.html