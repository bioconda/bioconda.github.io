:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normqpcr'
.. highlight: bash

bioconductor-normqpcr
=====================

.. conda:recipe:: bioconductor-normqpcr
   :replaces_section_title:

   Functions for the selection of optimal reference genes and the normalisation of real\-time quantitative PCR data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NormqPCR.html
   :license: LGPL-3
   :recipe: /`bioconductor-normqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr/meta.yaml>`_

   


.. conda:package:: bioconductor-normqpcr

   |downloads_bioconductor-normqpcr| |docker_bioconductor-normqpcr|

   :versions: 1.28.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-readqpcr: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-qpcr: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-normqpcr

   and update with::

      conda update bioconductor-normqpcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normqpcr:<tag>

   (see `bioconductor-normqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normqpcr
   :alt:   (downloads)
.. |docker_bioconductor-normqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-normqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normqpcr
.. _`bioconductor-normqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-normqpcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html