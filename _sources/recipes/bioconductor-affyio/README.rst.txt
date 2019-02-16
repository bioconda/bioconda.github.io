:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyio'
.. highlight: bash

bioconductor-affyio
===================

.. conda:recipe:: bioconductor-affyio
   :replaces_section_title:

   Routines for parsing Affymetrix data files based upon file format information. Primary focus is on accessing the CEL and CDF file formats.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affyio.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-affyio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyio/meta.yaml>`_
   :links: biotools: :biotools:`affyio`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-affyio

   |downloads_bioconductor-affyio| |docker_bioconductor-affyio|

   :versions: 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0, 1.42.0-0, 1.40.0-1, 1.40.0-0
   
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyio

   and update with::

      conda update bioconductor-affyio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affyio:<tag>

   (see `bioconductor-affyio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyio.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affyio| image:: https://quay.io/repository/biocontainers/bioconductor-affyio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyio
.. _`bioconductor-affyio/tags`: https://quay.io/repository/biocontainers/bioconductor-affyio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyio/README.html