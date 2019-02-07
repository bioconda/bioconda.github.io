.. title:: Package Recipe 'r-samr'
.. highlight: bash


r-samr
======

.. conda:recipe:: r-samr
   :replaces_section_title:

   Significance Analysis of Microarrays

   :homepage: http://www-stat.stanford.edu/~tibs/SAM
   :license: LGPL / LGPL
   :recipe: /`r-samr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr/meta.yaml>`_

   


.. conda:package:: r-samr

   |downloads_r-samr| |docker_r-samr|

   :versions: 2.0

   :depends: :conda:package:`bioconductor-impute`  :conda:package:`r-base` 3.3.1* :conda:package:`r-matrixstats`  

   :required~by: |required_by_r-samr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-samr

   and update with::

      conda update r-samr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-samr


.. |required_by_r-samr| conda:required_by:: r-samr
.. |downloads_r-samr| image:: https://img.shields.io/conda/dn/bioconda/r-samr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-samr| image:: https://quay.io/repository/biocontainers/r-samr/status
   :target: https://quay.io/repository/biocontainers/r-samr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-samr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-samr/README.html

