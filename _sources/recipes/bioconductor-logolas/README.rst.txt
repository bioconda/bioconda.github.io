:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-logolas'
.. highlight: bash

bioconductor-logolas
====================

.. conda:recipe:: bioconductor-logolas
   :replaces_section_title:

   Produces logo plots highlighting both enrichment and depletion of characters\, allows for plotting of string symbols\, and performs scaling of position\-weights adaptively\, along with several fun stylizations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Logolas.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-logolas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logolas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logolas/meta.yaml>`_

   


.. conda:package:: bioconductor-logolas

   |downloads_bioconductor-logolas| |docker_bioconductor-logolas|

   :versions: 1.6.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-gridbase: 
   
   :depends r-laplacesdemon: 
   
   :depends r-squarem: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-logolas

   and update with::

      conda update bioconductor-logolas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-logolas:<tag>

   (see `bioconductor-logolas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-logolas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-logolas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-logolas| image:: https://quay.io/repository/biocontainers/bioconductor-logolas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-logolas
.. _`bioconductor-logolas/tags`: https://quay.io/repository/biocontainers/bioconductor-logolas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-logolas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-logolas/README.html