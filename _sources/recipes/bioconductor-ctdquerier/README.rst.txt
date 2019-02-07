.. title:: Package Recipe 'bioconductor-ctdquerier'
.. highlight: bash


bioconductor-ctdquerier
=======================

.. conda:recipe:: bioconductor-ctdquerier
   :replaces_section_title:

   Package to retrieve and visualize data from the Comparative Toxicogenomics Database \(http\:\/\/ctdbase.org\/\). The downloaded data is formated as DataFrames for further downstream analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CTDquerier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctdquerier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdquerier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdquerier/meta.yaml>`_

   


.. conda:package:: bioconductor-ctdquerier

   |downloads_bioconductor-ctdquerier| |docker_bioconductor-ctdquerier|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocfilecache` >=1.6.0,<1.7.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-rappdirs`  :conda:package:`r-rcurl`  :conda:package:`r-stringdist`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-ctdquerier|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctdquerier

   and update with::

      conda update bioconductor-ctdquerier

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ctdquerier


.. |required_by_bioconductor-ctdquerier| conda:required_by:: bioconductor-ctdquerier
.. |downloads_bioconductor-ctdquerier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctdquerier.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ctdquerier| image:: https://quay.io/repository/biocontainers/bioconductor-ctdquerier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctdquerier







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctdquerier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctdquerier/README.html

