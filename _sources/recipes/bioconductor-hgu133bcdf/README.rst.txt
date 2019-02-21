:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133bcdf'
.. highlight: bash

bioconductor-hgu133bcdf
=======================

.. conda:recipe:: bioconductor-hgu133bcdf
   :replaces_section_title:

   A package containing an environment representing the HG\-U133B.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu133bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu133bcdf

   |downloads_bioconductor-hgu133bcdf| |docker_bioconductor-hgu133bcdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133bcdf

   and update with::

      conda update bioconductor-hgu133bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133bcdf:<tag>

   (see `bioconductor-hgu133bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133bcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu133bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf
.. _`bioconductor-hgu133bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133bcdf/README.html