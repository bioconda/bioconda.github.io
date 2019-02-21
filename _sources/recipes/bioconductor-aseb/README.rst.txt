:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aseb'
.. highlight: bash

bioconductor-aseb
=================

.. conda:recipe:: bioconductor-aseb
   :replaces_section_title:

   ASEB is an R package to predict lysine sites that can be acetylated by a specific KAT\-family.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ASEB.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-aseb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb/meta.yaml>`_
   :links: biotools: :biotools:`aseb`, doi: :doi:`10.1093/nar/gks437`

   


.. conda:package:: bioconductor-aseb

   |downloads_bioconductor-aseb| |docker_bioconductor-aseb|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aseb

   and update with::

      conda update bioconductor-aseb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aseb:<tag>

   (see `bioconductor-aseb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aseb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aseb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-aseb| image:: https://quay.io/repository/biocontainers/bioconductor-aseb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aseb
.. _`bioconductor-aseb/tags`: https://quay.io/repository/biocontainers/bioconductor-aseb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aseb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aseb/README.html