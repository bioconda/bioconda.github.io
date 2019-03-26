:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-imp4p'
.. highlight: bash

r-imp4p
=======

.. conda:recipe:: r-imp4p
   :replaces_section_title:

   Functions to analyse missing value mechanisms and to impute data sets in the context of bottom\-up MS\-based proteomics.

   :homepage: https://CRAN.R-project.org/package=imp4p
   :license: GPL3 / GPL-3
   :recipe: /`r-imp4p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imp4p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imp4p/meta.yaml>`_

   


.. conda:package:: r-imp4p

   |downloads_r-imp4p| |docker_r-imp4p|

   :versions: 0.7-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-iso: 
   
   :depends r-norm: 
   
   :depends r-rcpp: >=0.12.8
   
   :depends r-truncnorm: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-imp4p

   and update with::

      conda update r-imp4p

   or use the docker container::

      docker pull quay.io/biocontainers/r-imp4p:<tag>

   (see `r-imp4p/tags`_ for valid values for ``<tag>``)


.. |downloads_r-imp4p| image:: https://img.shields.io/conda/dn/bioconda/r-imp4p.svg?style=flat
   :alt:   (downloads)
.. |docker_r-imp4p| image:: https://quay.io/repository/biocontainers/r-imp4p/status
   :target: https://quay.io/repository/biocontainers/r-imp4p
.. _`r-imp4p/tags`: https://quay.io/repository/biocontainers/r-imp4p?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-imp4p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-imp4p/README.html