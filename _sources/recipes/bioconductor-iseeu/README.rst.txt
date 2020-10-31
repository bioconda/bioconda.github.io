:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseeu'
.. highlight: bash

bioconductor-iseeu
==================

.. conda:recipe:: bioconductor-iseeu
   :replaces_section_title:
   :noindex:

   iSEE Universe

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/iSEEu.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-iseeu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseeu/meta.yaml>`_

   iSEEu \(the iSEE universe\) contains diverse functionality to extend the usage of the iSEE package\, including additional classes for the panels\, or modes allowing easy configuration of iSEE applications.


.. conda:package:: bioconductor-iseeu

   |downloads_bioconductor-iseeu| |docker_bioconductor-iseeu|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-isee: ``>=2.2.0,<2.3.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colourpicker: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iseeu

   and update with::

      conda update bioconductor-iseeu

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseeu:<tag>

   (see `bioconductor-iseeu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseeu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseeu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseeu
   :alt:   (downloads)
.. |docker_bioconductor-iseeu| image:: https://quay.io/repository/biocontainers/bioconductor-iseeu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseeu
.. _`bioconductor-iseeu/tags`: https://quay.io/repository/biocontainers/bioconductor-iseeu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseeu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseeu/README.html