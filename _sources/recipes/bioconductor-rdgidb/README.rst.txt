:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdgidb'
.. highlight: bash

bioconductor-rdgidb
===================

.. conda:recipe:: bioconductor-rdgidb
   :replaces_section_title:

   The rDGIdb package provides a wrapper for the Drug Gene Interaction Database \(DGIdb\). For simplicity\, the wrapper query function and output resembles the user interface and results format provided on the DGIdb website \(http\:\/\/www.dgidb.org\/\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rDGIdb.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rdgidb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdgidb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdgidb/meta.yaml>`_
   :links: biotools: :biotools:`rdgidb`, doi: :doi:`10.12688/f1000research.9357.1`

   


.. conda:package:: bioconductor-rdgidb

   |downloads_bioconductor-rdgidb| |docker_bioconductor-rdgidb|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.1-0, 1.2.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-httr: 
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rdgidb

   and update with::

      conda update bioconductor-rdgidb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdgidb:<tag>

   (see `bioconductor-rdgidb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdgidb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdgidb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rdgidb
   :alt:   (downloads)
.. |docker_bioconductor-rdgidb| image:: https://quay.io/repository/biocontainers/bioconductor-rdgidb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdgidb
.. _`bioconductor-rdgidb/tags`: https://quay.io/repository/biocontainers/bioconductor-rdgidb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdgidb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdgidb/README.html