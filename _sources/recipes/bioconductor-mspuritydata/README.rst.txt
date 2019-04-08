:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mspuritydata'
.. highlight: bash

bioconductor-mspuritydata
=========================

.. conda:recipe:: bioconductor-mspuritydata
   :replaces_section_title:

   Fragmentation spectral libraries and data to test the msPurity package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/msPurityData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mspuritydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspuritydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspuritydata/meta.yaml>`_

   


.. conda:package:: bioconductor-mspuritydata

   |downloads_bioconductor-mspuritydata| |docker_bioconductor-mspuritydata|

   :versions: 1.10.0-0, 1.8.0-1, 1.8.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mspuritydata

   and update with::

      conda update bioconductor-mspuritydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mspuritydata:<tag>

   (see `bioconductor-mspuritydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mspuritydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mspuritydata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mspuritydata| image:: https://quay.io/repository/biocontainers/bioconductor-mspuritydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mspuritydata
.. _`bioconductor-mspuritydata/tags`: https://quay.io/repository/biocontainers/bioconductor-mspuritydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mspuritydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mspuritydata/README.html