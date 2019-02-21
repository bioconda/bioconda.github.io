:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecoli2cdf'
.. highlight: bash

bioconductor-ecoli2cdf
======================

.. conda:recipe:: bioconductor-ecoli2cdf
   :replaces_section_title:

   A package containing an environment representing the E\_coli\_2.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/ecoli2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-ecoli2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-ecoli2cdf

   |downloads_bioconductor-ecoli2cdf| |docker_bioconductor-ecoli2cdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecoli2cdf

   and update with::

      conda update bioconductor-ecoli2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecoli2cdf:<tag>

   (see `bioconductor-ecoli2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecoli2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecoli2cdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ecoli2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-ecoli2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecoli2cdf
.. _`bioconductor-ecoli2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-ecoli2cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecoli2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecoli2cdf/README.html