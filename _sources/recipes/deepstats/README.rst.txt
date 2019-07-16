:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepstats'
.. highlight: bash

deepstats
=========

.. conda:recipe:: deepstats
   :replaces_section_title:

   A statistical and dataviz toolbox for deeptools\, genomic signals\, and more.

   :homepage: https://github.com/gtrichard/deepStats
   :license: GPL3
   :recipe: /`deepstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3336594`

   


.. conda:package:: deepstats

   |downloads_deepstats| |docker_deepstats|

   :versions: 0.3-0, 0.2-0
   
   :depends r-base: >=3.5.1
   :depends r-boot: 
   :depends r-cowplot: 
   :depends r-dichromat: 
   :depends r-essentials: 
   :depends r-ggplot2: 
   :depends r-optparse: 
   :depends r-purrr: 
   :depends r-showtext: 
   :depends r-tidyverse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepstats

   and update with::

      conda update deepstats

   or use the docker container::

      docker pull quay.io/biocontainers/deepstats:<tag>

   (see `deepstats/tags`_ for valid values for ``<tag>``)


.. |downloads_deepstats| image:: https://img.shields.io/conda/dn/bioconda/deepstats.svg?style=flat
   :target: https://anaconda.org/bioconda/deepstats
   :alt:   (downloads)
.. |docker_deepstats| image:: https://quay.io/repository/biocontainers/deepstats/status
   :target: https://quay.io/repository/biocontainers/deepstats
.. _`deepstats/tags`: https://quay.io/repository/biocontainers/deepstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepstats/README.html