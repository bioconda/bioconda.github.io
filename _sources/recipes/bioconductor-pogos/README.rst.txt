.. title:: Package Recipe 'bioconductor-pogos'
.. highlight: bash


bioconductor-pogos
==================

.. conda:recipe:: bioconductor-pogos
   :replaces_section_title:

   Provide simple utilities for querying bhklab PharmacoDB\, modeling API outputs\, and integrating to cell and compound ontologies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pogos.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pogos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pogos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pogos/meta.yaml>`_

   


.. conda:package:: bioconductor-pogos

   |downloads_bioconductor-pogos| |docker_bioconductor-pogos|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-ontoproc` >=1.4.0,<1.5.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-httr` >=1.3.1 :conda:package:`r-rjson` >=0.2.15 :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-pogos|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pogos

   and update with::

      conda update bioconductor-pogos

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pogos


.. |required_by_bioconductor-pogos| conda:required_by:: bioconductor-pogos
.. |downloads_bioconductor-pogos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pogos.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pogos| image:: https://quay.io/repository/biocontainers/bioconductor-pogos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pogos







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pogos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pogos/README.html

