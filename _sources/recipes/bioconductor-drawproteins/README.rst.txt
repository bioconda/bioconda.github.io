:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drawproteins'
.. highlight: bash

bioconductor-drawproteins
=========================

.. conda:recipe:: bioconductor-drawproteins
   :replaces_section_title:
   :noindex:

   Package to Draw Protein Schematics from Uniprot API output

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/drawProteins.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-drawproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins/meta.yaml>`_

   This package draws protein schematics from Uniprot API output. From the JSON returned by the GET command\, it creates a dataframe from the Uniprot Features API. This dataframe can then be used by geoms based on ggplot2 and base R to draw protein schematics.


.. conda:package:: bioconductor-drawproteins

   |downloads_bioconductor-drawproteins| |docker_bioconductor-drawproteins|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-readr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drawproteins

   and update with::

      conda update bioconductor-drawproteins

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drawproteins:<tag>

   (see `bioconductor-drawproteins/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drawproteins| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drawproteins.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drawproteins
   :alt:   (downloads)
.. |docker_bioconductor-drawproteins| image:: https://quay.io/repository/biocontainers/bioconductor-drawproteins/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drawproteins
.. _`bioconductor-drawproteins/tags`: https://quay.io/repository/biocontainers/bioconductor-drawproteins?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html