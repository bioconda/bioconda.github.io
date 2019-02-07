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

   :versions: 2.2.7

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cairo`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-tidyr`  

   :required~by: |required_by_r-pophelper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pophelper

   and update with::

      conda update r-pophelper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-pophelper


.. |required_by_r-pophelper| conda:required_by:: r-pophelper
.. |downloads_r-pophelper| image:: https://img.shields.io/conda/dn/bioconda/r-pophelper.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pophelper| image:: https://quay.io/repository/biocontainers/r-pophelper/status
   :target: https://quay.io/repository/biocontainers/r-pophelper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pophelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pophelper/README.html

