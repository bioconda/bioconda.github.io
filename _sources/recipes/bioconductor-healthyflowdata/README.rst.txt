:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-healthyflowdata'
.. highlight: bash

bioconductor-healthyflowdata
============================

.. conda:recipe:: bioconductor-healthyflowdata
   :replaces_section_title:

   Healthy dataset used by the flowMatch package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/healthyFlowData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-healthyflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthyflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthyflowdata/meta.yaml>`_

   A healthy dataset with 20 flow cytometry samples used by the flowMatch package.


.. conda:package:: bioconductor-healthyflowdata

   |downloads_bioconductor-healthyflowdata| |docker_bioconductor-healthyflowdata|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0
   
   :depends bioconductor-flowcore: >=2.0.0,<2.1.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-healthyflowdata

   and update with::

      conda update bioconductor-healthyflowdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-healthyflowdata:<tag>

   (see `bioconductor-healthyflowdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-healthyflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-healthyflowdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-healthyflowdata
   :alt:   (downloads)
.. |docker_bioconductor-healthyflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata
.. _`bioconductor-healthyflowdata/tags`: https://quay.io/repository/biocontainers/bioconductor-healthyflowdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-healthyflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-healthyflowdata/README.html