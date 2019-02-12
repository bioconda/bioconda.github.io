:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nabor'
.. highlight: bash

r-nabor
=======

.. conda:recipe:: r-nabor
   :replaces_section_title:

   An R wrapper for \'libnabo\'\, an exact or approximate k nearest neighbour library which is optimised for low dimensional spaces \(e.g. 3D\)

   :homepage: https://CRAN.R-project.org/package=nabor
   :license: BSD
   :recipe: /`r-nabor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nabor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nabor/meta.yaml>`_

   


.. conda:package:: r-nabor

   |downloads_r-nabor| |docker_r-nabor|

   :versions: 0.5.0-1, 0.5.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bh: 
   
   :depends r-rcpp: 
   
   :depends r-rcppeigen: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nabor

   and update with::

      conda update r-nabor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-nabor:<tag>

   (see `r-nabor/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nabor| image:: https://img.shields.io/conda/dn/bioconda/r-nabor.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nabor| image:: https://quay.io/repository/biocontainers/r-nabor/status
   :target: https://quay.io/repository/biocontainers/r-nabor
.. _`r-nabor/tags`: https://quay.io/repository/biocontainers/r-nabor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nabor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nabor/README.html