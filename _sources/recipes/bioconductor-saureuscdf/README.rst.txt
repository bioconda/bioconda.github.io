:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saureuscdf'
.. highlight: bash

bioconductor-saureuscdf
=======================

.. conda:recipe:: bioconductor-saureuscdf
   :replaces_section_title:

   saureuscdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/saureuscdf.html
   :license: LGPL
   :recipe: /`bioconductor-saureuscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saureuscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saureuscdf/meta.yaml>`_

   A package containing an environment representing the S\_aureus.cdf file.


.. conda:package:: bioconductor-saureuscdf

   |downloads_bioconductor-saureuscdf| |docker_bioconductor-saureuscdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-saureuscdf

   and update with::

      conda update bioconductor-saureuscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-saureuscdf:<tag>

   (see `bioconductor-saureuscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-saureuscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saureuscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saureuscdf
   :alt:   (downloads)
.. |docker_bioconductor-saureuscdf| image:: https://quay.io/repository/biocontainers/bioconductor-saureuscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saureuscdf
.. _`bioconductor-saureuscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-saureuscdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saureuscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saureuscdf/README.html