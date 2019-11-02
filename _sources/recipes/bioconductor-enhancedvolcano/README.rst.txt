:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enhancedvolcano'
.. highlight: bash

bioconductor-enhancedvolcano
============================

.. conda:recipe:: bioconductor-enhancedvolcano
   :replaces_section_title:

   Volcano plots represent a useful way to visualise the results of differential expression analyses. Here\, we present a highly\-configurable function that produces publication\-ready volcano plots. EnhancedVolcano will attempt to fit as many transcript names in the plot window as possible\, thus avoiding clogging up the plot with labels that could not otherwise have been read. Other functionality allows the user to identify up to 3 different types of attributes in the same plot space via colour\, shape\, and shade parameter configurations.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/EnhancedVolcano.html
   :license: GPL-3
   :recipe: /`bioconductor-enhancedvolcano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancedvolcano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancedvolcano/meta.yaml>`_

   


.. conda:package:: bioconductor-enhancedvolcano

   |downloads_bioconductor-enhancedvolcano| |docker_bioconductor-enhancedvolcano|

   :versions: 1.4.0-0, 1.2.0-1, 1.2.0-0, 1.0.1-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enhancedvolcano

   and update with::

      conda update bioconductor-enhancedvolcano

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enhancedvolcano:<tag>

   (see `bioconductor-enhancedvolcano/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enhancedvolcano| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enhancedvolcano.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enhancedvolcano
   :alt:   (downloads)
.. |docker_bioconductor-enhancedvolcano| image:: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano
.. _`bioconductor-enhancedvolcano/tags`: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enhancedvolcano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enhancedvolcano/README.html