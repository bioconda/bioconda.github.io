:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wicket'
.. highlight: bash

r-wicket
========

.. conda:recipe:: r-wicket
   :replaces_section_title:

   Utilities to generate bounding boxes from \'WKT\' \(Well\-Known Text\) objects and R data types\, validate \'WKT\' objects and convert object types from the \'sp\' package into \'WKT\' representations.

   :homepage: https://github.com/ropensci/wicket
   :license: MIT / MIT
   :recipe: /`r-wicket <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wicket>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wicket/meta.yaml>`_

   


.. conda:package:: r-wicket

   |downloads_r-wicket| |docker_r-wicket|

   :versions: 0.4.0-3, 0.4.0-2, 0.4.0-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bh: 
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-wicket

   and update with::

      conda update r-wicket

   or use the docker container::

      docker pull quay.io/biocontainers/r-wicket:<tag>

   (see `r-wicket/tags`_ for valid values for ``<tag>``)


.. |downloads_r-wicket| image:: https://img.shields.io/conda/dn/bioconda/r-wicket.svg?style=flat
   :alt:   (downloads)
.. |docker_r-wicket| image:: https://quay.io/repository/biocontainers/r-wicket/status
   :target: https://quay.io/repository/biocontainers/r-wicket
.. _`r-wicket/tags`: https://quay.io/repository/biocontainers/r-wicket?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wicket/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wicket/README.html