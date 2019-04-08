:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pophelper'
.. highlight: bash

r-pophelper
===========

.. conda:recipe:: r-pophelper
   :replaces_section_title:

   A set of useful functions for processing admixture proportion files from the population structure analysis softwares STRUCTURE\, TESS\, ADMIXTURE\, BAPS\, fastSTRUCTURE etc. The package contains functions to read runs\, tabulate runs\, summarise runs\, plot runs\, estimate K using Evanno method\, export clumpp files\, export distruct files and generate barplots.

   :homepage: https://github.com/royfrancis/pophelper
   :license: GPL3 / GPL-3
   :recipe: /`r-pophelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pophelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pophelper/meta.yaml>`_

   


.. conda:package:: r-pophelper

   |downloads_r-pophelper| |docker_r-pophelper|

   :versions: 2.2.7-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cairo: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pophelper

   and update with::

      conda update r-pophelper

   or use the docker container::

      docker pull quay.io/biocontainers/r-pophelper:<tag>

   (see `r-pophelper/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pophelper| image:: https://img.shields.io/conda/dn/bioconda/r-pophelper.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pophelper| image:: https://quay.io/repository/biocontainers/r-pophelper/status
   :target: https://quay.io/repository/biocontainers/r-pophelper
.. _`r-pophelper/tags`: https://quay.io/repository/biocontainers/r-pophelper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pophelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pophelper/README.html