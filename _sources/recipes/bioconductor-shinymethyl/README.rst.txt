:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinymethyl'
.. highlight: bash

bioconductor-shinymethyl
========================

.. conda:recipe:: bioconductor-shinymethyl
   :replaces_section_title:

   Interactive tool for visualizing Illumina methylation array data. Both the 450k and EPIC array are supported.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/shinyMethyl.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shinymethyl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyl/meta.yaml>`_
   :links: biotools: :biotools:`shinymethyl`

   


.. conda:package:: bioconductor-shinymethyl

   |downloads_bioconductor-shinymethyl| |docker_bioconductor-shinymethyl|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-illuminahumanmethylation450kmanifest: >=0.4.0,<0.5.0
   
   :depends bioconductor-minfi: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-matrixstats: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-shiny: >=0.13.2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinymethyl

   and update with::

      conda update bioconductor-shinymethyl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinymethyl:<tag>

   (see `bioconductor-shinymethyl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinymethyl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinymethyl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-shinymethyl| image:: https://quay.io/repository/biocontainers/bioconductor-shinymethyl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinymethyl
.. _`bioconductor-shinymethyl/tags`: https://quay.io/repository/biocontainers/bioconductor-shinymethyl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinymethyl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinymethyl/README.html