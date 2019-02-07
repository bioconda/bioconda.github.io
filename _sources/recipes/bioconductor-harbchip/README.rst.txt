.. title:: Package Recipe 'bioconductor-harbchip'
.. highlight: bash


bioconductor-harbchip
=====================

.. conda:recipe:: bioconductor-harbchip
   :replaces_section_title:

   data from a yeast ChIP\-chip experiment

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/harbChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-harbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harbchip/meta.yaml>`_

   


.. conda:package:: bioconductor-harbchip

   |downloads_bioconductor-harbchip| |docker_bioconductor-harbchip|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-harbchip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harbchip

   and update with::

      conda update bioconductor-harbchip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-harbchip


.. |required_by_bioconductor-harbchip| conda:required_by:: bioconductor-harbchip
.. |downloads_bioconductor-harbchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harbchip.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-harbchip| image:: https://quay.io/repository/biocontainers/bioconductor-harbchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harbchip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harbchip/README.html

