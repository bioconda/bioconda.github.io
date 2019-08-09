:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-enrichr'
.. highlight: bash

r-enrichr
=========

.. conda:recipe:: r-enrichr
   :replaces_section_title:

   Provides an R interface to all \'Enrichr\' databases\, a web\-based tool for analysing gene sets and returns any enrichment of common annotated biological functions. \<http\:\/\/amp.pharm.mssm.edu\/Enrichr\/\>.

   :homepage: https://CRAN.R-project.org/package=enrichR
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-enrichr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enrichr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enrichr/meta.yaml>`_

   


.. conda:package:: r-enrichr

   |downloads_r-enrichr| |docker_r-enrichr|

   :versions: 1.0-1, 1.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-httr: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-enrichr

   and update with::

      conda update r-enrichr

   or use the docker container::

      docker pull quay.io/biocontainers/r-enrichr:<tag>

   (see `r-enrichr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-enrichr| image:: https://img.shields.io/conda/dn/bioconda/r-enrichr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-enrichr
   :alt:   (downloads)
.. |docker_r-enrichr| image:: https://quay.io/repository/biocontainers/r-enrichr/status
   :target: https://quay.io/repository/biocontainers/r-enrichr
.. _`r-enrichr/tags`: https://quay.io/repository/biocontainers/r-enrichr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-enrichr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-enrichr/README.html