:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtandem'
.. highlight: bash

bioconductor-rtandem
====================

.. conda:recipe:: bioconductor-rtandem
   :replaces_section_title:

   Interfaces the tandem protein identification algorithm in R

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/rTANDEM.html
   :license: Artistic-1.0 | file LICENSE
   :recipe: /`bioconductor-rtandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtandem/meta.yaml>`_

   This package interfaces the tandem protein identification algorithm in R. Identification can be launched in the X\!Tandem style\, by using as sole parameter the path to a parameter file. But rTANDEM aslo provides extended syntax and functions to streamline launching analyses\, as well as function to convert results\, parameters and taxonomy to\/from R. A related package\, shinyTANDEM\, provides visualization interface for result objects.


.. conda:package:: bioconductor-rtandem

   |downloads_bioconductor-rtandem| |docker_bioconductor-rtandem|

   :versions: 1.27.0-0, 1.26.0-0, 1.24.0-2, 1.24.0-1, 1.24.0-0, 1.22.1-0, 1.22.0-0
   
   :depends expat: >=2.2.9,<2.3.0a0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: >=1.8.8
   :depends r-rcpp: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtandem

   and update with::

      conda update bioconductor-rtandem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtandem:<tag>

   (see `bioconductor-rtandem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtandem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtandem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtandem
   :alt:   (downloads)
.. |docker_bioconductor-rtandem| image:: https://quay.io/repository/biocontainers/bioconductor-rtandem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtandem
.. _`bioconductor-rtandem/tags`: https://quay.io/repository/biocontainers/bioconductor-rtandem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtandem/README.html