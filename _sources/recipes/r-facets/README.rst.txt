.. title:: Package Recipe 'r-facets'
.. highlight: bash


r-facets
========

.. conda:recipe:: r-facets
   :replaces_section_title:

   Cellular Fraction and Copy Numbers from Tumor Sequencing

   :homepage: https://github.com/mskcc/facets
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-facets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-facets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-facets/meta.yaml>`_
   :links: biotools: :biotools:`facets`

   


.. conda:package:: r-facets

   |downloads_r-facets| |docker_r-facets|

   :versions: 0.5.14

   :depends: :conda:package:`libgfortran` >=3.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-pctgcdata`  

   :required~by: |required_by_r-facets|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-facets

   and update with::

      conda update r-facets

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-facets


.. |required_by_r-facets| conda:required_by:: r-facets
.. |downloads_r-facets| image:: https://img.shields.io/conda/dn/bioconda/r-facets.svg?style=flat
   :alt:   (downloads)
.. |docker_r-facets| image:: https://quay.io/repository/biocontainers/r-facets/status
   :target: https://quay.io/repository/biocontainers/r-facets







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-facets/README.html

