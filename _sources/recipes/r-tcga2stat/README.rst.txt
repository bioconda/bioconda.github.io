:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tcga2stat'
.. highlight: bash

r-tcga2stat
===========

.. conda:recipe:: r-tcga2stat
   :replaces_section_title:

   Automatically downloads and processes TCGA genomics and clinical data into a format convenient for statistical analyses in the R environment.

   :homepage: http://www.liuzlab.org/TCGA2STAT/
   :license: GPL2 / GPL-2
   :recipe: /`r-tcga2stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat/meta.yaml>`_

   


.. conda:package:: r-tcga2stat

   |downloads_r-tcga2stat| |docker_r-tcga2stat|

   :versions: 1.2-4, 1.2-3, 1.2-2, 1.2-0
   
   :depends bioconductor-cntools: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-xml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tcga2stat

   and update with::

      conda update r-tcga2stat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-tcga2stat:<tag>

   (see `r-tcga2stat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tcga2stat| image:: https://img.shields.io/conda/dn/bioconda/r-tcga2stat.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tcga2stat| image:: https://quay.io/repository/biocontainers/r-tcga2stat/status
   :target: https://quay.io/repository/biocontainers/r-tcga2stat
.. _`r-tcga2stat/tags`: https://quay.io/repository/biocontainers/r-tcga2stat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcga2stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcga2stat/README.html