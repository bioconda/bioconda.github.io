:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vcdata'
.. highlight: bash

bioconductor-h5vcdata
=====================

.. conda:recipe:: bioconductor-h5vcdata
   :replaces_section_title:

   This package contains the data used in the vignettes and examples of the \'h5vc\' package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/h5vcData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vcdata/meta.yaml>`_

   


.. conda:package:: bioconductor-h5vcdata

   |downloads_bioconductor-h5vcdata| |docker_bioconductor-h5vcdata|

   :versions: 2.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-h5vcdata

   and update with::

      conda update bioconductor-h5vcdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vcdata:<tag>

   (see `bioconductor-h5vcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vcdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-h5vcdata| image:: https://quay.io/repository/biocontainers/bioconductor-h5vcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vcdata
.. _`bioconductor-h5vcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vcdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vcdata/README.html