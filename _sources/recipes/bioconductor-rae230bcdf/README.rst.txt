:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rae230bcdf'
.. highlight: bash

bioconductor-rae230bcdf
=======================

.. conda:recipe:: bioconductor-rae230bcdf
   :replaces_section_title:

   A package containing an environment representing the RAE230B.CDF file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/rae230bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-rae230bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230bcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-rae230bcdf

   |downloads_bioconductor-rae230bcdf| |docker_bioconductor-rae230bcdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rae230bcdf

   and update with::

      conda update bioconductor-rae230bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rae230bcdf:<tag>

   (see `bioconductor-rae230bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rae230bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rae230bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rae230bcdf
   :alt:   (downloads)
.. |docker_bioconductor-rae230bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-rae230bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rae230bcdf
.. _`bioconductor-rae230bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rae230bcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rae230bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rae230bcdf/README.html