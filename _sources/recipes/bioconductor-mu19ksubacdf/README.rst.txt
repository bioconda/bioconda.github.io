:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu19ksubacdf'
.. highlight: bash

bioconductor-mu19ksubacdf
=========================

.. conda:recipe:: bioconductor-mu19ksubacdf
   :replaces_section_title:

   A package containing an environment representing the Mu19KsubA.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mu19ksubacdf.html
   :license: LGPL
   :recipe: /`bioconductor-mu19ksubacdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubacdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubacdf/meta.yaml>`_

   


.. conda:package:: bioconductor-mu19ksubacdf

   |downloads_bioconductor-mu19ksubacdf| |docker_bioconductor-mu19ksubacdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu19ksubacdf

   and update with::

      conda update bioconductor-mu19ksubacdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu19ksubacdf:<tag>

   (see `bioconductor-mu19ksubacdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu19ksubacdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu19ksubacdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mu19ksubacdf| image:: https://quay.io/repository/biocontainers/bioconductor-mu19ksubacdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu19ksubacdf
.. _`bioconductor-mu19ksubacdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mu19ksubacdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu19ksubacdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu19ksubacdf/README.html