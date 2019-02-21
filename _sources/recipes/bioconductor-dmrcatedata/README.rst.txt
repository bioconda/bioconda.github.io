:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrcatedata'
.. highlight: bash

bioconductor-dmrcatedata
========================

.. conda:recipe:: bioconductor-dmrcatedata
   :replaces_section_title:

   This package contains 8 data objects supporting functionality and examples of the Bioconductor package DMRcate.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/DMRcatedata.html
   :license: GPL-3
   :recipe: /`bioconductor-dmrcatedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcatedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcatedata/meta.yaml>`_

   


.. conda:package:: bioconductor-dmrcatedata

   |downloads_bioconductor-dmrcatedata| |docker_bioconductor-dmrcatedata|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrcatedata

   and update with::

      conda update bioconductor-dmrcatedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrcatedata:<tag>

   (see `bioconductor-dmrcatedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrcatedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcatedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmrcatedata| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata
.. _`bioconductor-dmrcatedata/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrcatedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcatedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcatedata/README.html