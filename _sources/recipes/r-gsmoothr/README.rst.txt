:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gsmoothr'
.. highlight: bash

r-gsmoothr
==========

.. conda:recipe:: r-gsmoothr
   :replaces_section_title:

   Tools rewritten in C for various smoothing tasks

   :homepage: https://CRAN.R-project.org/package=gsmoothr
   :license: LGPL / LGPL (>= 2.0)
   :recipe: /`r-gsmoothr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gsmoothr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gsmoothr/meta.yaml>`_

   


.. conda:package:: r-gsmoothr

   |downloads_r-gsmoothr| |docker_r-gsmoothr|

   :versions: 0.1.7-0
   
   :depends libgcc: 
   
   :depends r-base: 3.3.2*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gsmoothr

   and update with::

      conda update r-gsmoothr

   or use the docker container::

      docker pull quay.io/biocontainers/r-gsmoothr:<tag>

   (see `r-gsmoothr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gsmoothr| image:: https://img.shields.io/conda/dn/bioconda/r-gsmoothr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gsmoothr| image:: https://quay.io/repository/biocontainers/r-gsmoothr/status
   :target: https://quay.io/repository/biocontainers/r-gsmoothr
.. _`r-gsmoothr/tags`: https://quay.io/repository/biocontainers/r-gsmoothr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gsmoothr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gsmoothr/README.html