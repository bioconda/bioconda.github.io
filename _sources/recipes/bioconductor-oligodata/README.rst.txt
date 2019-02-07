.. title:: Package Recipe 'bioconductor-oligodata'
.. highlight: bash


bioconductor-oligodata
======================

.. conda:recipe:: bioconductor-oligodata
   :replaces_section_title:

   Dataset samples \(Affymetrix\: Expression\, Gene\, Exon\, SNP\; NimbleGen\: Expression\, Tiling\) to be used with the oligo package.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/oligoData.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-oligodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata/meta.yaml>`_

   


.. conda:package:: bioconductor-oligodata

   |downloads_bioconductor-oligodata| |docker_bioconductor-oligodata|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-oligodata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oligodata

   and update with::

      conda update bioconductor-oligodata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-oligodata


.. |required_by_bioconductor-oligodata| conda:required_by:: bioconductor-oligodata
.. |downloads_bioconductor-oligodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oligodata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-oligodata| image:: https://quay.io/repository/biocontainers/bioconductor-oligodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oligodata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oligodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oligodata/README.html

