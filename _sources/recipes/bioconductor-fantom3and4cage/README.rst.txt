.. title:: Package Recipe 'bioconductor-fantom3and4cage'
.. highlight: bash


bioconductor-fantom3and4cage
============================

.. conda:recipe:: bioconductor-fantom3and4cage
   :replaces_section_title:

   CAGE \(Cap Analysis Gene Expression\) data from FANTOM3 and FANTOM4 projects produced by RIKEN Omics Science Center.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/FANTOM3and4CAGE.html
   :license: GPL-3
   :recipe: /`bioconductor-fantom3and4cage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fantom3and4cage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fantom3and4cage/meta.yaml>`_

   


.. conda:package:: bioconductor-fantom3and4cage

   |downloads_bioconductor-fantom3and4cage| |docker_bioconductor-fantom3and4cage|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-fantom3and4cage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fantom3and4cage

   and update with::

      conda update bioconductor-fantom3and4cage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fantom3and4cage


.. |required_by_bioconductor-fantom3and4cage| conda:required_by:: bioconductor-fantom3and4cage
.. |downloads_bioconductor-fantom3and4cage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fantom3and4cage.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fantom3and4cage| image:: https://quay.io/repository/biocontainers/bioconductor-fantom3and4cage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fantom3and4cage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fantom3and4cage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fantom3and4cage/README.html

