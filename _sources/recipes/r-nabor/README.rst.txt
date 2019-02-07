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

   :versions: 0.5.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-bh`  :conda:package:`r-rcpp`  :conda:package:`r-rcppeigen`  

   :required~by: |required_by_r-nabor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nabor

   and update with::

      conda update r-nabor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-nabor


.. |required_by_r-nabor| conda:required_by:: r-nabor
.. |downloads_r-nabor| image:: https://img.shields.io/conda/dn/bioconda/r-nabor.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nabor| image:: https://quay.io/repository/biocontainers/r-nabor/status
   :target: https://quay.io/repository/biocontainers/r-nabor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nabor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nabor/README.html

