.. title:: Package Recipe 'r-kinship2'
.. highlight: bash


r-kinship2
==========

.. conda:recipe:: r-kinship2
   :replaces_section_title:

   Routines to handle family data with a pedigree object. The initial purpose was to create correlation structures that describe  family relationships such as kinship and identity\-by\-descent\, which can be used to model family data in mixed effects models\, such as in the  coxme function.  Also includes a tool for pedigree drawing which is  focused on producing compact layouts without intervention.  Recent additions include utilities to trim the pedigree object with various criteria\, and  kinship for the X chromosome.

   :homepage: http://r-forge.r-project.org
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-kinship2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-kinship2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-kinship2/meta.yaml>`_

   


.. conda:package:: r-kinship2

   |downloads_r-kinship2| |docker_r-kinship2|

   :versions: 1.6.4

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-matrix`  :conda:package:`r-quadprog`  

   :required~by: |required_by_r-kinship2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-kinship2

   and update with::

      conda update r-kinship2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-kinship2


.. |required_by_r-kinship2| conda:required_by:: r-kinship2
.. |downloads_r-kinship2| image:: https://img.shields.io/conda/dn/bioconda/r-kinship2.svg?style=flat
   :alt:   (downloads)
.. |docker_r-kinship2| image:: https://quay.io/repository/biocontainers/r-kinship2/status
   :target: https://quay.io/repository/biocontainers/r-kinship2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-kinship2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-kinship2/README.html

