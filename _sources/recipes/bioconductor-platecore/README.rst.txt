.. title:: Package Recipe 'bioconductor-platecore'
.. highlight: bash


bioconductor-platecore
======================

.. conda:recipe:: bioconductor-platecore
   :replaces_section_title:

   Provides basic S4 data structures and routines for analyzing plate based flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/plateCore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-platecore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-platecore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-platecore/meta.yaml>`_

   


.. conda:package:: bioconductor-platecore

   |downloads_bioconductor-platecore| |docker_bioconductor-platecore|

   :versions: 1.40.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowstats` >=3.40.0,<3.41.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-mass`  :conda:package:`r-robustbase`  

   :required~by: |required_by_bioconductor-platecore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-platecore

   and update with::

      conda update bioconductor-platecore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-platecore


.. |required_by_bioconductor-platecore| conda:required_by:: bioconductor-platecore
.. |downloads_bioconductor-platecore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-platecore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-platecore| image:: https://quay.io/repository/biocontainers/bioconductor-platecore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-platecore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-platecore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-platecore/README.html

