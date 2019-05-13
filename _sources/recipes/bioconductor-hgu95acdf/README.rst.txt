:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95acdf'
.. highlight: bash

bioconductor-hgu95acdf
======================

.. conda:recipe:: bioconductor-hgu95acdf
   :replaces_section_title:

   A package containing an environment representing the HG U95A.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95acdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95acdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95acdf

   |downloads_bioconductor-hgu95acdf| |docker_bioconductor-hgu95acdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95acdf

   and update with::

      conda update bioconductor-hgu95acdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95acdf:<tag>

   (see `bioconductor-hgu95acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95acdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95acdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95acdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95acdf
.. _`bioconductor-hgu95acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95acdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95acdf/README.html