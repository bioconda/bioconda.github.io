:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cyp450cdf'
.. highlight: bash

bioconductor-cyp450cdf
======================

.. conda:recipe:: bioconductor-cyp450cdf
   :replaces_section_title:

   A package containing an environment representing the CYP450.CDF file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/cyp450cdf.html
   :license: LGPL
   :recipe: /`bioconductor-cyp450cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyp450cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyp450cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-cyp450cdf

   |downloads_bioconductor-cyp450cdf| |docker_bioconductor-cyp450cdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cyp450cdf

   and update with::

      conda update bioconductor-cyp450cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cyp450cdf:<tag>

   (see `bioconductor-cyp450cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cyp450cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cyp450cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cyp450cdf
   :alt:   (downloads)
.. |docker_bioconductor-cyp450cdf| image:: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf
.. _`bioconductor-cyp450cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cyp450cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cyp450cdf/README.html