.. title:: Package Recipe 'r-goeveg'
.. highlight: bash


r-goeveg
========

.. conda:recipe:: r-goeveg
   :replaces_section_title:

   A collection of functions useful in \(vegetation\) community analyses and ordinations\, mainly to facilitate plotting and interpretation. Includes automatic species selection for ordination diagrams\, species response curves and rank\-abundance curves.

   :homepage: http://github.com/fgoral/goeveg
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-goeveg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goeveg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goeveg/meta.yaml>`_

   


.. conda:package:: r-goeveg

   |downloads_r-goeveg| |docker_r-goeveg|

   :versions: 0.4.2, 0.3.3

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fields`  :conda:package:`r-hmisc`  :conda:package:`r-mgcv`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-goeveg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-goeveg

   and update with::

      conda update r-goeveg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-goeveg


.. |required_by_r-goeveg| conda:required_by:: r-goeveg
.. |downloads_r-goeveg| image:: https://img.shields.io/conda/dn/bioconda/r-goeveg.svg?style=flat
   :alt:   (downloads)
.. |docker_r-goeveg| image:: https://quay.io/repository/biocontainers/r-goeveg/status
   :target: https://quay.io/repository/biocontainers/r-goeveg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-goeveg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-goeveg/README.html

