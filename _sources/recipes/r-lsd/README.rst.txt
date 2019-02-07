.. title:: Package Recipe 'r-lsd'
.. highlight: bash


r-lsd
=====

.. conda:recipe:: r-lsd
   :replaces_section_title:

   Create lots of colorful plots in a plethora of variations. Try the LSD demotour\(\).

   :homepage: https://CRAN.R-project.org/package=LSD
   :license: MIT / Unlimited
   :recipe: /`r-lsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lsd/meta.yaml>`_

   


.. conda:package:: r-lsd

   |downloads_r-lsd| |docker_r-lsd|

   :versions: 3.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-lsd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lsd

   and update with::

      conda update r-lsd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-lsd


.. |required_by_r-lsd| conda:required_by:: r-lsd
.. |downloads_r-lsd| image:: https://img.shields.io/conda/dn/bioconda/r-lsd.svg?style=flat
   :alt:   (downloads)
.. |docker_r-lsd| image:: https://quay.io/repository/biocontainers/r-lsd/status
   :target: https://quay.io/repository/biocontainers/r-lsd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lsd/README.html

