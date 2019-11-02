:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtime'
.. highlight: bash

bioconductor-flowtime
=====================

.. conda:recipe:: bioconductor-flowtime
   :replaces_section_title:

   This package was developed for analysis of both dynamic and steady state experiments examining the function of gene regulatory networks in yeast \(strain W303\) expressing fluorescent reporter proteins using a BD Accuri C6 and SORP cytometers. However\, the functions are for the most part general and may be adapted for analysis of other organisms using other flow cytometers. Functions in this package facilitate the annotation of flow cytometry data with experimental metadata\, as is requisite for dissemination and general ease\-of\-use. Functions for creating\, saving and loading gate sets are also included. In the past\, we have typically generated summary statistics for each flowset for each timepoint and then annotated and analyzed these summary statistics. This method loses a great deal of the power that comes from the large amounts of individual cell data generated in flow cytometry\, by essentially collapsing this data into a bulk measurement after subsetting. In addition to these summary functions\, this package also contains functions to facilitate annotation and analysis of steady\-state or time\-lapse data utilizing all of the data collected from the thousands of individual cells in each sample.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/flowTime.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime/meta.yaml>`_

   


.. conda:package:: bioconductor-flowtime

   |downloads_bioconductor-flowtime| |docker_bioconductor-flowtime|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowtime

   and update with::

      conda update bioconductor-flowtime

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowtime:<tag>

   (see `bioconductor-flowtime/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowtime| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtime.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtime
   :alt:   (downloads)
.. |docker_bioconductor-flowtime| image:: https://quay.io/repository/biocontainers/bioconductor-flowtime/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtime
.. _`bioconductor-flowtime/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtime/README.html