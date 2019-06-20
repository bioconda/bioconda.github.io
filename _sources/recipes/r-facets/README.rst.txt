:orphan:  .. only available via index, not via toctree

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

   :versions: 0.5.14-1, 0.5.14-0
   
   :depends libgfortran: >=3.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-pctgcdata: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-facets

   and update with::

      conda update r-facets

   or use the docker container::

      docker pull quay.io/biocontainers/r-facets:<tag>

   (see `r-facets/tags`_ for valid values for ``<tag>``)


.. |downloads_r-facets| image:: https://img.shields.io/conda/dn/bioconda/r-facets.svg?style=flat
   :target: https://anaconda.org/bioconda/r-facets
   :alt:   (downloads)
.. |docker_r-facets| image:: https://quay.io/repository/biocontainers/r-facets/status
   :target: https://quay.io/repository/biocontainers/r-facets
.. _`r-facets/tags`: https://quay.io/repository/biocontainers/r-facets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-facets/README.html