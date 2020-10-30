:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregflux'
.. highlight: bash

bioconductor-coregflux
======================

.. conda:recipe:: bioconductor-coregflux
   :replaces_section_title:
   :noindex:

   CoRegFlux

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CoRegFlux.html
   :license: GPL-3
   :recipe: /`bioconductor-coregflux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregflux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregflux/meta.yaml>`_

   CoRegFlux aims at providing tools to integrate reverse engineered gene regulatory networks and gene\-expression into metabolic models to improve prediction of phenotypes\, both for metabolic engineering\, through transcription factor or gene \(TF\) knock\-out or overexpression in various conditions as well as to improve our understanding of the interactions and cell inner\-working.


.. conda:package:: bioconductor-coregflux

   |downloads_bioconductor-coregflux| |docker_bioconductor-coregflux|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-coregnet: ``>=1.28.0,<1.29.0``
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-sybil: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coregflux

   and update with::

      conda update bioconductor-coregflux

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coregflux:<tag>

   (see `bioconductor-coregflux/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coregflux| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregflux.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coregflux
   :alt:   (downloads)
.. |docker_bioconductor-coregflux| image:: https://quay.io/repository/biocontainers/bioconductor-coregflux/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregflux
.. _`bioconductor-coregflux/tags`: https://quay.io/repository/biocontainers/bioconductor-coregflux?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregflux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregflux/README.html