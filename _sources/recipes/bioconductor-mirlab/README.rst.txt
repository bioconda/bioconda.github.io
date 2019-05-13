:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirlab'
.. highlight: bash

bioconductor-mirlab
===================

.. conda:recipe:: bioconductor-mirlab
   :replaces_section_title:

   Provide tools exploring miRNA\-mRNA relationships\, including popular miRNA target prediction methods\, ensemble methods that integrate individual methods\, functions to get data from online resources\, functions to validate the results\, and functions to conduct enrichment analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRLAB.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-mirlab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab/meta.yaml>`_

   


.. conda:package:: bioconductor-mirlab

   |downloads_bioconductor-mirlab| |docker_bioconductor-mirlab|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirlab

   and update with::

      conda update bioconductor-mirlab

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirlab:<tag>

   (see `bioconductor-mirlab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirlab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirlab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirlab
   :alt:   (downloads)
.. |docker_bioconductor-mirlab| image:: https://quay.io/repository/biocontainers/bioconductor-mirlab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirlab
.. _`bioconductor-mirlab/tags`: https://quay.io/repository/biocontainers/bioconductor-mirlab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirlab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirlab/README.html