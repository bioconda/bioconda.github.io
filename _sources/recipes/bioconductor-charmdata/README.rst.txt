:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-charmdata'
.. highlight: bash

bioconductor-charmdata
======================

.. conda:recipe:: bioconductor-charmdata
   :replaces_section_title:

   An example dataset for use with the charm package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/charmData.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-charmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charmdata/meta.yaml>`_

   


.. conda:package:: bioconductor-charmdata

   |downloads_bioconductor-charmdata| |docker_bioconductor-charmdata|

   :versions: 1.18.0-0
   
   :depends bioconductor-charm: >=2.28.0,<2.29.0
   
   :depends bioconductor-pd.charm.hg18.example: >=0.99.0,<0.100.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-charmdata

   and update with::

      conda update bioconductor-charmdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-charmdata:<tag>

   (see `bioconductor-charmdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-charmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-charmdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-charmdata| image:: https://quay.io/repository/biocontainers/bioconductor-charmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-charmdata
.. _`bioconductor-charmdata/tags`: https://quay.io/repository/biocontainers/bioconductor-charmdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-charmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-charmdata/README.html