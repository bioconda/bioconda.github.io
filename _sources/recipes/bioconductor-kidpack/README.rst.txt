.. title:: Package Recipe 'bioconductor-kidpack'
.. highlight: bash


bioconductor-kidpack
====================

.. conda:recipe:: bioconductor-kidpack
   :replaces_section_title:

   kidney microarray data

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/kidpack.html
   :license: GPL-2
   :recipe: /`bioconductor-kidpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack/meta.yaml>`_

   


.. conda:package:: bioconductor-kidpack

   |downloads_bioconductor-kidpack| |docker_bioconductor-kidpack|

   :versions: 1.24.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-kidpack|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kidpack

   and update with::

      conda update bioconductor-kidpack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-kidpack


.. |required_by_bioconductor-kidpack| conda:required_by:: bioconductor-kidpack
.. |downloads_bioconductor-kidpack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kidpack.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-kidpack| image:: https://quay.io/repository/biocontainers/bioconductor-kidpack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kidpack







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kidpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kidpack/README.html

