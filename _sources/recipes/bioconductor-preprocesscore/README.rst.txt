:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-preprocesscore'
.. highlight: bash

bioconductor-preprocesscore
===========================

.. conda:recipe:: bioconductor-preprocesscore
   :replaces_section_title:

   A library of core preprocessing routines.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/preprocessCore.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-preprocesscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preprocesscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preprocesscore/meta.yaml>`_
   :links: biotools: :biotools:`preprocesscore`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-preprocesscore

   |downloads_bioconductor-preprocesscore| |docker_bioconductor-preprocesscore|

   :versions: 1.44.0-0, 1.42.0-0, 1.40.0-0, 1.38.1-0, 1.34.0-0, 1.32.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-preprocesscore

   and update with::

      conda update bioconductor-preprocesscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-preprocesscore:<tag>

   (see `bioconductor-preprocesscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-preprocesscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-preprocesscore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-preprocesscore| image:: https://quay.io/repository/biocontainers/bioconductor-preprocesscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-preprocesscore
.. _`bioconductor-preprocesscore/tags`: https://quay.io/repository/biocontainers/bioconductor-preprocesscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-preprocesscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-preprocesscore/README.html