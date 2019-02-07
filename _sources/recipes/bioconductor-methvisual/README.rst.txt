.. title:: Package Recipe 'bioconductor-methvisual'
.. highlight: bash


bioconductor-methvisual
=======================

.. conda:recipe:: bioconductor-methvisual
   :replaces_section_title:

   The package \'methVisual\' allows the visualization of DNA methylation data after bisulfite sequencing.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methVisual.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methvisual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methvisual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methvisual/meta.yaml>`_

   


.. conda:package:: bioconductor-methvisual

   |downloads_bioconductor-methvisual| |docker_bioconductor-methvisual|

   :versions: 1.34.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ca`  :conda:package:`r-gridbase`  :conda:package:`r-gsubfn`  :conda:package:`r-plotrix`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-methvisual|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methvisual

   and update with::

      conda update bioconductor-methvisual

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methvisual


.. |required_by_bioconductor-methvisual| conda:required_by:: bioconductor-methvisual
.. |downloads_bioconductor-methvisual| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methvisual.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methvisual| image:: https://quay.io/repository/biocontainers/bioconductor-methvisual/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methvisual







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methvisual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methvisual/README.html

