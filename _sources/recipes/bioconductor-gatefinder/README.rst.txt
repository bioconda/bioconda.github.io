.. title:: Package Recipe 'bioconductor-gatefinder'
.. highlight: bash


bioconductor-gatefinder
=======================

.. conda:recipe:: bioconductor-gatefinder
   :replaces_section_title:

   Given a vector of cluster memberships for a cell population\, identifies a sequence of gates \(polygon filters on 2D scatter plots\) for isolation of that cell type.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GateFinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gatefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatefinder/meta.yaml>`_

   


.. conda:package:: bioconductor-gatefinder

   |downloads_bioconductor-gatefinder| |docker_bioconductor-gatefinder|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowfp` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-diptest`  :conda:package:`r-mvoutlier`  :conda:package:`r-splancs`  

   :required~by: |required_by_bioconductor-gatefinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gatefinder

   and update with::

      conda update bioconductor-gatefinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gatefinder


.. |required_by_bioconductor-gatefinder| conda:required_by:: bioconductor-gatefinder
.. |downloads_bioconductor-gatefinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gatefinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gatefinder| image:: https://quay.io/repository/biocontainers/bioconductor-gatefinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gatefinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gatefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gatefinder/README.html

