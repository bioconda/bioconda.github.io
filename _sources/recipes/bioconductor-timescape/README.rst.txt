:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timescape'
.. highlight: bash

bioconductor-timescape
======================

.. conda:recipe:: bioconductor-timescape
   :replaces_section_title:
   :noindex:

   Patient Clonal Timescapes

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/timescape.html
   :license: GPL-3
   :recipe: /`bioconductor-timescape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timescape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timescape/meta.yaml>`_

   TimeScape is an automated tool for navigating temporal clonal evolution data. The key attributes of this implementation involve the enumeration of clones\, their evolutionary relationships and their shifting dynamics over time. TimeScape requires two inputs\: \(i\) the clonal phylogeny and \(ii\) the clonal prevalences. Optionally\, TimeScape accepts a data table of targeted mutations observed in each clone and their allele prevalences over time. The output is the TimeScape plot showing clonal prevalence vertically\, time horizontally\, and the plot height optionally encoding tumour volume during tumour\-shrinking events. At each sampling time point \(denoted by a faint white line\)\, the height of each clone accurately reflects its proportionate prevalence. These prevalences form the anchors for bezier curves that visually represent the dynamic transitions between time points.


.. conda:package:: bioconductor-timescape

   |downloads_bioconductor-timescape| |docker_bioconductor-timescape|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=0.4.3``
   :depends r-gtools: ``>=3.5.0``
   :depends r-htmlwidgets: ``>=0.5``
   :depends r-jsonlite: ``>=0.9.19``
   :depends r-stringr: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timescape

   and update with::

      conda update bioconductor-timescape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timescape:<tag>

   (see `bioconductor-timescape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timescape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timescape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timescape
   :alt:   (downloads)
.. |docker_bioconductor-timescape| image:: https://quay.io/repository/biocontainers/bioconductor-timescape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timescape
.. _`bioconductor-timescape/tags`: https://quay.io/repository/biocontainers/bioconductor-timescape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timescape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timescape/README.html