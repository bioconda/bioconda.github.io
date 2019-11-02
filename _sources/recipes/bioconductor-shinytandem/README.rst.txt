:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinytandem'
.. highlight: bash

bioconductor-shinytandem
========================

.. conda:recipe:: bioconductor-shinytandem
   :replaces_section_title:

   This package provides a GUI interface for rTANDEM. The GUI is primarily designed to visualize rTANDEM result object or result xml files. But it will also provides an interface for creating parameter objects\, launching searches or performing conversions between R objects and xml files.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/shinyTANDEM.html
   :license: GPL-3
   :recipe: /`bioconductor-shinytandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinytandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinytandem/meta.yaml>`_

   


.. conda:package:: bioconductor-shinytandem

   |downloads_bioconductor-shinytandem| |docker_bioconductor-shinytandem|

   :versions: 1.24.0-0, 1.22.0-2, 1.22.0-0, 1.20.1-1, 1.20.1-0
   
   :depends bioconductor-rtandem: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mixtools: 
   :depends r-shiny: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinytandem

   and update with::

      conda update bioconductor-shinytandem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinytandem:<tag>

   (see `bioconductor-shinytandem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinytandem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinytandem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shinytandem
   :alt:   (downloads)
.. |docker_bioconductor-shinytandem| image:: https://quay.io/repository/biocontainers/bioconductor-shinytandem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinytandem
.. _`bioconductor-shinytandem/tags`: https://quay.io/repository/biocontainers/bioconductor-shinytandem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinytandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinytandem/README.html