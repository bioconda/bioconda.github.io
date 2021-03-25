:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gmwt'
.. highlight: bash

r-gmwt
======

.. conda:recipe:: r-gmwt
   :replaces_section_title:
   :noindex:

   Generalized Mann\-Whitney type tests based on probabilistic indices and new diagnostic plots.

   :homepage: https://CRAN.R-project.org/package=gMWT
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-gmwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gmwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gmwt/meta.yaml>`_

   


.. conda:package:: r-gmwt

   |downloads_r-gmwt| |docker_r-gmwt|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-clinfun: 
   :depends r-rcpp: ``>=0.9.13``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gmwt

   and update with::

      conda update r-gmwt

   or use the docker container::

      docker pull quay.io/biocontainers/r-gmwt:<tag>

   (see `r-gmwt/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gmwt| image:: https://img.shields.io/conda/dn/bioconda/r-gmwt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gmwt
   :alt:   (downloads)
.. |docker_r-gmwt| image:: https://quay.io/repository/biocontainers/r-gmwt/status
   :target: https://quay.io/repository/biocontainers/r-gmwt
.. _`r-gmwt/tags`: https://quay.io/repository/biocontainers/r-gmwt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gmwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gmwt/README.html