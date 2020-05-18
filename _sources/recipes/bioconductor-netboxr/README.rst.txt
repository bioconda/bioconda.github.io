:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netboxr'
.. highlight: bash

bioconductor-netboxr
====================

.. conda:recipe:: bioconductor-netboxr
   :replaces_section_title:

   netboxr

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/netboxr.html
   :license: LGPL-3 + file LICENSE
   :recipe: /`bioconductor-netboxr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboxr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboxr/meta.yaml>`_

   NetBox is a software tool for performing network analysis on human interaction networks. It is pre\-loaded with a Human Interaction Network \(HIN\) derived from four literature curated data sources\, including the Human Protein Reference Database \(HPRD\)\, Reactome\, NCI\-Nature Pathway Interaction \(PID\) Database\, and the MSKCC Cancer Cell Map.


.. conda:package:: bioconductor-netboxr

   |downloads_bioconductor-netboxr| |docker_bioconductor-netboxr|

   :versions: 1.0.0-0
   
   :depends bioconductor-clusterprofiler: >=3.16.0,<3.17.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-igraph: >=1.2.4.1
   :depends r-jsonlite: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netboxr

   and update with::

      conda update bioconductor-netboxr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netboxr:<tag>

   (see `bioconductor-netboxr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netboxr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netboxr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netboxr
   :alt:   (downloads)
.. |docker_bioconductor-netboxr| image:: https://quay.io/repository/biocontainers/bioconductor-netboxr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netboxr
.. _`bioconductor-netboxr/tags`: https://quay.io/repository/biocontainers/bioconductor-netboxr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netboxr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netboxr/README.html