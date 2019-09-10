:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-immunedeconv'
.. highlight: bash

r-immunedeconv
==============

.. conda:recipe:: r-immunedeconv
   :replaces_section_title:

   collection of methods for immune cell deconvolution of bulk RNA\-seq samples.

   :homepage: https://github.com/grst/immunedeconv
   :license: BSD / BSD_3_clause
   :recipe: /`r-immunedeconv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv/meta.yaml>`_
   :links: doi: :doi:`10.1101/463828`

   


.. conda:package:: r-immunedeconv

   |downloads_r-immunedeconv| |docker_r-immunedeconv|

   :versions: 2.0.0-0, 1.1.1-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biocparallel: 
   :depends bioconductor-gseabase: 
   :depends bioconductor-gsva: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-sva: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.tree: >=0.7
   :depends r-dplyr: >=0.7
   :depends r-e1071: >=1.6
   :depends r-epic: >=1.1
   :depends r-limsolve: >=1.5.5.1
   :depends r-magrittr: >=1.5
   :depends r-mcpcounter: 
   :depends r-readr: >=1.1
   :depends r-readxl: >=1.0
   :depends r-testit: >=0.7
   :depends r-tibble: >=1.4.2
   :depends r-xcell: >=1.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-immunedeconv

   and update with::

      conda update r-immunedeconv

   or use the docker container::

      docker pull quay.io/biocontainers/r-immunedeconv:<tag>

   (see `r-immunedeconv/tags`_ for valid values for ``<tag>``)


.. |downloads_r-immunedeconv| image:: https://img.shields.io/conda/dn/bioconda/r-immunedeconv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-immunedeconv
   :alt:   (downloads)
.. |docker_r-immunedeconv| image:: https://quay.io/repository/biocontainers/r-immunedeconv/status
   :target: https://quay.io/repository/biocontainers/r-immunedeconv
.. _`r-immunedeconv/tags`: https://quay.io/repository/biocontainers/r-immunedeconv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-immunedeconv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-immunedeconv/README.html