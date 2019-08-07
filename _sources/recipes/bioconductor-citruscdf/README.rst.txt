:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-citruscdf'
.. highlight: bash

bioconductor-citruscdf
======================

.. conda:recipe:: bioconductor-citruscdf
   :replaces_section_title:

   A package containing an environment representing the Citrus.cdf file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/citruscdf.html
   :license: LGPL
   :recipe: /`bioconductor-citruscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citruscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citruscdf/meta.yaml>`_

   


.. conda:package:: bioconductor-citruscdf

   |downloads_bioconductor-citruscdf| |docker_bioconductor-citruscdf|

   :versions: 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-citruscdf

   and update with::

      conda update bioconductor-citruscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-citruscdf:<tag>

   (see `bioconductor-citruscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-citruscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-citruscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-citruscdf
   :alt:   (downloads)
.. |docker_bioconductor-citruscdf| image:: https://quay.io/repository/biocontainers/bioconductor-citruscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-citruscdf
.. _`bioconductor-citruscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-citruscdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-citruscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-citruscdf/README.html