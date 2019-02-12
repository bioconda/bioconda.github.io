:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycompdata'
.. highlight: bash

bioconductor-affycompdata
=========================

.. conda:recipe:: bioconductor-affycompdata
   :replaces_section_title:

   Data needed by the affycomp package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/affycompData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-affycompdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompdata/meta.yaml>`_

   


.. conda:package:: bioconductor-affycompdata

   |downloads_bioconductor-affycompdata| |docker_bioconductor-affycompdata|

   :versions: 1.20.0-0
   
   :depends bioconductor-affycomp: >=1.58.0,<1.59.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affycompdata

   and update with::

      conda update bioconductor-affycompdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affycompdata:<tag>

   (see `bioconductor-affycompdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycompdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycompdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affycompdata| image:: https://quay.io/repository/biocontainers/bioconductor-affycompdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycompdata
.. _`bioconductor-affycompdata/tags`: https://quay.io/repository/biocontainers/bioconductor-affycompdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycompdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycompdata/README.html