.. title:: Package Recipe 'r-chbutils'
.. highlight: bash


r-chbutils
==========

.. conda:recipe:: r-chbutils
   :replaces_section_title:

   Useful utility functions used at the Harvard Chan School Bioinformatics core

   :homepage: https://github.com/hbc/CHBUtils
   :license: MIT
   :recipe: /`r-chbutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chbutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chbutils/meta.yaml>`_

   


.. conda:package:: r-chbutils

   |downloads_r-chbutils| |docker_r-chbutils|

   :versions: 0.1_2015_12_21

   :depends: :conda:package:`r` 3.2.2* :conda:package:`r-mvtnorm`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_r-chbutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-chbutils

   and update with::

      conda update r-chbutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-chbutils


.. |required_by_r-chbutils| conda:required_by:: r-chbutils
.. |downloads_r-chbutils| image:: https://img.shields.io/conda/dn/bioconda/r-chbutils.svg?style=flat
   :alt:   (downloads)
.. |docker_r-chbutils| image:: https://quay.io/repository/biocontainers/r-chbutils/status
   :target: https://quay.io/repository/biocontainers/r-chbutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chbutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chbutils/README.html

