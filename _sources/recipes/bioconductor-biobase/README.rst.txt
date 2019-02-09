.. title:: Package Recipe 'bioconductor-biobase'
.. highlight: bash


bioconductor-biobase
====================

.. conda:recipe:: bioconductor-biobase
   :replaces_section_title:

   Functions that are needed by many other packages or which replace R functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Biobase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase/meta.yaml>`_
   :links: biotools: :biotools:`biobase`

   


.. conda:package:: bioconductor-biobase

   |downloads_bioconductor-biobase| |docker_bioconductor-biobase|

   :versions: 2.42.0, 2.40.0, 2.38.0, 2.36.2, 2.34.0, 2.32.0, 2.30.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-biobase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biobase

   and update with::

      conda update bioconductor-biobase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biobase


.. |required_by_bioconductor-biobase| conda:required_by:: bioconductor-biobase
.. |downloads_bioconductor-biobase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biobase| image:: https://quay.io/repository/biocontainers/bioconductor-biobase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobase/README.html

