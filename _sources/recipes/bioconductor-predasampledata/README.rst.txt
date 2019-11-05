:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-predasampledata'
.. highlight: bash

bioconductor-predasampledata
============================

.. conda:recipe:: bioconductor-predasampledata
   :replaces_section_title:

   Sample data for PREDA package. \(annotations objects synchronized with GeneAnnot custom CDFs version 2.2.0\)

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/PREDAsampledata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-predasampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata/meta.yaml>`_

   


.. conda:package:: bioconductor-predasampledata

   |downloads_bioconductor-predasampledata| |docker_bioconductor-predasampledata|

   :versions: 0.25.0-0, 0.24.0-1, 0.22.0-0
   
   :depends bioconductor-affy: >=1.64.0,<1.65.0
   :depends bioconductor-annotate: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-preda: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-predasampledata

   and update with::

      conda update bioconductor-predasampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-predasampledata:<tag>

   (see `bioconductor-predasampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-predasampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-predasampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-predasampledata
   :alt:   (downloads)
.. |docker_bioconductor-predasampledata| image:: https://quay.io/repository/biocontainers/bioconductor-predasampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-predasampledata
.. _`bioconductor-predasampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-predasampledata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html