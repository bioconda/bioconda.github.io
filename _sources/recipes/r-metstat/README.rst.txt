.. title:: Package Recipe 'r-metstat'
.. highlight: bash


r-metstat
=========

.. conda:recipe:: r-metstat
   :replaces_section_title:

   A diverse collection of metabolomics related statistical tools.

   :homepage: https://CRAN.R-project.org/package=MetStaT
   :license: APACHE / Apache License (== 2.0)
   :recipe: /`r-metstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metstat/meta.yaml>`_

   


.. conda:package:: r-metstat

   |downloads_r-metstat| |docker_r-metstat|

   :versions: 1.0

   :depends: :conda:package:`r-abind`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-mass`  :conda:package:`r-pls`  

   :required~by: |required_by_r-metstat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metstat

   and update with::

      conda update r-metstat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-metstat


.. |required_by_r-metstat| conda:required_by:: r-metstat
.. |downloads_r-metstat| image:: https://img.shields.io/conda/dn/bioconda/r-metstat.svg?style=flat
   :alt:   (downloads)
.. |docker_r-metstat| image:: https://quay.io/repository/biocontainers/r-metstat/status
   :target: https://quay.io/repository/biocontainers/r-metstat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metstat/README.html

