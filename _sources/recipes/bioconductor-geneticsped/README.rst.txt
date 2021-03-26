:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneticsped'
.. highlight: bash

bioconductor-geneticsped
========================

.. conda:recipe:: bioconductor-geneticsped
   :replaces_section_title:
   :noindex:

   Pedigree and genetic relationship functions

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GeneticsPed.html
   :license: LGPL (>= 2.1) | file LICENSE
   :recipe: /`bioconductor-geneticsped <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped/meta.yaml>`_

   Classes and methods for handling pedigree data. It also includes functions to calculate genetic relationship measures as relationship and inbreeding coefficients and other utilities. Note that package is not yet stable. Use it with care\!


.. conda:package:: bioconductor-geneticsped

   |downloads_bioconductor-geneticsped| |docker_bioconductor-geneticsped|

   :versions:
      
      

      ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gdata: 
   :depends r-genetics: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneticsped

   and update with::

      conda update bioconductor-geneticsped

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneticsped:<tag>

   (see `bioconductor-geneticsped/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneticsped| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneticsped.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneticsped
   :alt:   (downloads)
.. |docker_bioconductor-geneticsped| image:: https://quay.io/repository/biocontainers/bioconductor-geneticsped/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneticsped
.. _`bioconductor-geneticsped/tags`: https://quay.io/repository/biocontainers/bioconductor-geneticsped?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html