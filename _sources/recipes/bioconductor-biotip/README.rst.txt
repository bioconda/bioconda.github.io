:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotip'
.. highlight: bash

bioconductor-biotip
===================

.. conda:recipe:: bioconductor-biotip
   :replaces_section_title:
   :noindex:

   BioTIP\: An R package for characterization of Biological Tipping\-Point

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BioTIP.html
   :license: GPL-2
   :recipe: /`bioconductor-biotip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotip/meta.yaml>`_

   Adopting tipping\-point theory to transcriptome profiles to unravel disease regulatory trajectory.


.. conda:package:: bioconductor-biotip

   |downloads_bioconductor-biotip| |docker_bioconductor-biotip|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-psych: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotip

   and update with::

      conda update bioconductor-biotip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotip:<tag>

   (see `bioconductor-biotip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotip
   :alt:   (downloads)
.. |docker_bioconductor-biotip| image:: https://quay.io/repository/biocontainers/bioconductor-biotip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotip
.. _`bioconductor-biotip/tags`: https://quay.io/repository/biocontainers/bioconductor-biotip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotip/README.html