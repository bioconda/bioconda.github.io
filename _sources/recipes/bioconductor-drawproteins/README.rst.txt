.. title:: Package Recipe 'bioconductor-drawproteins'
.. highlight: bash


bioconductor-drawproteins
=========================

.. conda:recipe:: bioconductor-drawproteins
   :replaces_section_title:

   This package draws protein schematics from Uniprot API output. From the JSON returned by the GET command\, it creates a dataframe from the Uniprot Features API. This dataframe can then be used by geoms based on ggplot2 and base R to draw protein schematics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/drawProteins.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-drawproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins/meta.yaml>`_

   


.. conda:package:: bioconductor-drawproteins

   |downloads_bioconductor-drawproteins| |docker_bioconductor-drawproteins|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-httr`  :conda:package:`r-readr`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-drawproteins|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drawproteins

   and update with::

      conda update bioconductor-drawproteins

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-drawproteins


.. |required_by_bioconductor-drawproteins| conda:required_by:: bioconductor-drawproteins
.. |downloads_bioconductor-drawproteins| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drawproteins.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-drawproteins| image:: https://quay.io/repository/biocontainers/bioconductor-drawproteins/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drawproteins







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html

