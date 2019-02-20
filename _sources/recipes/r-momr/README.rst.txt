:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-momr'
.. highlight: bash

r-momr
======

.. conda:recipe:: r-momr
   :replaces_section_title:

   \'MetaOMineR\' suite is a set of R packages that offers many functions and modules needed for the analyses  of quantitative metagenomics data. \'momr\' is the core package and contains routines for biomarker identification and exploration. Developed since the beginning of field\, \'momr\' has evolved and is structured around the different modules  such as preprocessing\, analysis\, vizualisation\, etc. See package help for more information.

   :homepage: https://CRAN.R-project.org/package=momr
   :license: OTHER / Artistic-2.0 (Restricts use)
   :recipe: /`r-momr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-momr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-momr/meta.yaml>`_

   


.. conda:package:: r-momr

   |downloads_r-momr| |docker_r-momr|

   :versions: 1.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-gplots: 
   
   :depends r-hmisc: 
   
   :depends r-nortest: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-momr

   and update with::

      conda update r-momr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-momr:<tag>

   (see `r-momr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-momr| image:: https://img.shields.io/conda/dn/bioconda/r-momr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-momr| image:: https://quay.io/repository/biocontainers/r-momr/status
   :target: https://quay.io/repository/biocontainers/r-momr
.. _`r-momr/tags`: https://quay.io/repository/biocontainers/r-momr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-momr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-momr/README.html