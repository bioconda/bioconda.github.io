.. title:: Package Recipe 'r-ncbit'
.. highlight: bash


r-ncbit
=======

.. conda:recipe:: r-ncbit
   :replaces_section_title:

   making NCBI taxonomic data locally available and searchable as an R object

   :homepage: https://CRAN.R-project.org/package=ncbit
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-ncbit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ncbit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ncbit/meta.yaml>`_

   


.. conda:package:: r-ncbit

   |downloads_r-ncbit| |docker_r-ncbit|

   :versions: 2013.03.29

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-ncbit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ncbit

   and update with::

      conda update r-ncbit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ncbit


.. |required_by_r-ncbit| conda:required_by:: r-ncbit
.. |downloads_r-ncbit| image:: https://img.shields.io/conda/dn/bioconda/r-ncbit.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ncbit| image:: https://quay.io/repository/biocontainers/r-ncbit/status
   :target: https://quay.io/repository/biocontainers/r-ncbit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ncbit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ncbit/README.html

