.. title:: Package Recipe 'ucsc-cell-browser'
.. highlight: bash


ucsc-cell-browser
=================

.. conda:recipe:: ucsc-cell-browser
   :replaces_section_title:

   A browser for single\-cell data\, main site at http\:\/\/cells.ucsc.edu

   :homepage: http://cells.ucsc.edu
   :license: GPL
   :recipe: /`ucsc-cell-browser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser/meta.yaml>`_

   


.. conda:package:: ucsc-cell-browser

   |downloads_ucsc-cell-browser| |docker_ucsc-cell-browser|

   :versions: 0.4.35, 0.4.23

   :depends: :conda:package:`anndata`  :conda:package:`numpy`  :conda:package:`python` >=3.6 :conda:package:`r-argparser`  :conda:package:`r-data.table`  :conda:package:`r-matrix`  :conda:package:`r-reticulate`  

   :required~by: |required_by_ucsc-cell-browser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-cell-browser

   and update with::

      conda update ucsc-cell-browser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-cell-browser


.. |required_by_ucsc-cell-browser| conda:required_by:: ucsc-cell-browser
.. |downloads_ucsc-cell-browser| image:: https://img.shields.io/conda/dn/bioconda/ucsc-cell-browser.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-cell-browser| image:: https://quay.io/repository/biocontainers/ucsc-cell-browser/status
   :target: https://quay.io/repository/biocontainers/ucsc-cell-browser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-cell-browser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-cell-browser/README.html

