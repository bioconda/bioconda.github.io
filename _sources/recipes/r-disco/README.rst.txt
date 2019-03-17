:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-disco'
.. highlight: bash

r-disco
=======

.. conda:recipe:: r-disco
   :replaces_section_title:

   Concordance and discordance of homologous gene regulation allows comparing reaction to stimuli in different organisms\,  for example human patients and animal models of a disease. The package contains functions to calculate discordance and concordance score for homologous gene pairs\, identify concordantly or discordantly regulated transcriptional modules and visualize the results. It is intended for analysis of transcriptional data.

   :homepage: https://CRAN.R-project.org/package=disco
   :license: GPL3 / GPL (>= 2.0)
   :recipe: /`r-disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disco/meta.yaml>`_

   


.. conda:package:: r-disco

   |downloads_r-disco| |docker_r-disco|

   :versions: 0.6-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-tmod: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-disco

   and update with::

      conda update r-disco

   or use the docker container::

      docker pull quay.io/biocontainers/r-disco:<tag>

   (see `r-disco/tags`_ for valid values for ``<tag>``)


.. |downloads_r-disco| image:: https://img.shields.io/conda/dn/bioconda/r-disco.svg?style=flat
   :alt:   (downloads)
.. |docker_r-disco| image:: https://quay.io/repository/biocontainers/r-disco/status
   :target: https://quay.io/repository/biocontainers/r-disco
.. _`r-disco/tags`: https://quay.io/repository/biocontainers/r-disco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-disco/README.html