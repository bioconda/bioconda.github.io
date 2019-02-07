.. title:: Package Recipe 'bioconductor-tenxplore'
.. highlight: bash


bioconductor-tenxplore
======================

.. conda:recipe:: bioconductor-tenxplore
   :replaces_section_title:

   Perform ontological exploration of scRNA\-seq of 1.3 million mouse neurons from 10x genomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tenXplore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tenxplore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxplore/meta.yaml>`_

   


.. conda:package:: bioconductor-tenxplore

   |downloads_bioconductor-tenxplore| |docker_bioconductor-tenxplore|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-ontoproc` >=1.4.0,<1.5.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-restfulse` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-tenxplore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tenxplore

   and update with::

      conda update bioconductor-tenxplore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tenxplore


.. |required_by_bioconductor-tenxplore| conda:required_by:: bioconductor-tenxplore
.. |downloads_bioconductor-tenxplore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxplore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tenxplore| image:: https://quay.io/repository/biocontainers/bioconductor-tenxplore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxplore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxplore/README.html

