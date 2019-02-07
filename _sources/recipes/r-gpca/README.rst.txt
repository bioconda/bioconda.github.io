.. title:: Package Recipe 'r-gpca'
.. highlight: bash


r-gpca
======

.. conda:recipe:: r-gpca
   :replaces_section_title:

   This package implements guided principal components analysis for the detection of batch effects in high\-throughput data.

   :homepage: https://CRAN.R-project.org/package=gPCA
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-gpca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gpca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gpca/meta.yaml>`_

   


.. conda:package:: r-gpca

   |downloads_r-gpca| |docker_r-gpca|

   :versions: 1.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 

   :required~by: |required_by_r-gpca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gpca

   and update with::

      conda update r-gpca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gpca


.. |required_by_r-gpca| conda:required_by:: r-gpca
.. |downloads_r-gpca| image:: https://img.shields.io/conda/dn/bioconda/r-gpca.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gpca| image:: https://quay.io/repository/biocontainers/r-gpca/status
   :target: https://quay.io/repository/biocontainers/r-gpca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gpca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gpca/README.html

