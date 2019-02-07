.. title:: Package Recipe 'r-rrbgen'
.. highlight: bash


r-rrbgen
========

.. conda:recipe:: r-rrbgen
   :replaces_section_title:

   A lightweight limited functionality R bgen read\/write library

   :homepage: https://github.com/rwdavies/rrbgen
   :license: GPL3 / GPL3
   :recipe: /`r-rrbgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen/meta.yaml>`_

   


.. conda:package:: r-rrbgen

   |downloads_r-rrbgen| |docker_r-rrbgen|

   :versions: 0.0.6

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.12.18 :conda:package:`r-rcpparmadillo` >=0.8.600.0.0 :conda:package:`r-testthat` >=2.0.0 

   :required~by: |required_by_r-rrbgen|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rrbgen

   and update with::

      conda update r-rrbgen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rrbgen


.. |required_by_r-rrbgen| conda:required_by:: r-rrbgen
.. |downloads_r-rrbgen| image:: https://img.shields.io/conda/dn/bioconda/r-rrbgen.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rrbgen| image:: https://quay.io/repository/biocontainers/r-rrbgen/status
   :target: https://quay.io/repository/biocontainers/r-rrbgen







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rrbgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rrbgen/README.html

