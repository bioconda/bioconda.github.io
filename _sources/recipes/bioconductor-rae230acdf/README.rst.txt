:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rae230acdf'
.. highlight: bash

bioconductor-rae230acdf
=======================

.. conda:recipe:: bioconductor-rae230acdf
   :replaces_section_title:

   A package containing an environment representing the RAE230A.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rae230acdf.html
   :license: LGPL
   :recipe: /`bioconductor-rae230acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230acdf/meta.yaml>`_

   


.. conda:package:: bioconductor-rae230acdf

   |downloads_bioconductor-rae230acdf| |docker_bioconductor-rae230acdf|

   :versions: 2.18.0-1, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rae230acdf

   and update with::

      conda update bioconductor-rae230acdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rae230acdf:<tag>

   (see `bioconductor-rae230acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rae230acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rae230acdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rae230acdf
   :alt:   (downloads)
.. |docker_bioconductor-rae230acdf| image:: https://quay.io/repository/biocontainers/bioconductor-rae230acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rae230acdf
.. _`bioconductor-rae230acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rae230acdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rae230acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rae230acdf/README.html