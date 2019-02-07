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

   :versions: 1.2

   :depends: :conda:package:`bioconductor-cntools`  :conda:package:`r-base` 3.4.1* :conda:package:`r-xml`  

   :required~by: |required_by_r-tcga2stat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tcga2stat

   and update with::

      conda update r-tcga2stat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-tcga2stat


.. |required_by_r-tcga2stat| conda:required_by:: r-tcga2stat
.. |downloads_r-tcga2stat| image:: https://img.shields.io/conda/dn/bioconda/r-tcga2stat.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tcga2stat| image:: https://quay.io/repository/biocontainers/r-tcga2stat/status
   :target: https://quay.io/repository/biocontainers/r-tcga2stat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcga2stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcga2stat/README.html

