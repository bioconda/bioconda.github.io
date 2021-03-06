:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tricycle'
.. highlight: bash

bioconductor-tricycle
=====================

.. conda:recipe:: bioconductor-tricycle
   :replaces_section_title:
   :noindex:

   tricycle\: Transferable Representation and Inference of cell cycle

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tricycle.html
   :license: GPL-3
   :recipe: /`bioconductor-tricycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle/meta.yaml>`_

   The package contains functions to infer and visualize cell cycle process using Single Cell RNASeq data. It exploits the idea of transfer learning\, projecting new data to the previous learned biologically interpretable space. We provide a pre\-learned cell cycle space\, which could be used to infer cell cycle time of human and mouse single cell samples. In addition\, we also offer functions to visualize cell cycle time on different embeddings and functions to build new reference.


.. conda:package:: bioconductor-tricycle

   |downloads_bioconductor-tricycle| |docker_bioconductor-tricycle|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circular: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-scattermore: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tricycle

   and update with::

      conda update bioconductor-tricycle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tricycle:<tag>

   (see `bioconductor-tricycle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tricycle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tricycle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tricycle
   :alt:   (downloads)
.. |docker_bioconductor-tricycle| image:: https://quay.io/repository/biocontainers/bioconductor-tricycle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tricycle
.. _`bioconductor-tricycle/tags`: https://quay.io/repository/biocontainers/bioconductor-tricycle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tricycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tricycle/README.html