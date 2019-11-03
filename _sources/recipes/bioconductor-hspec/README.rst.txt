:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hspec'
.. highlight: bash

bioconductor-hspec
==================

.. conda:recipe:: bioconductor-hspec
   :replaces_section_title:

   A package containing an environment representing the HGU133Plus2\_Hs\_Hspec.cdf file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/Hspec.html
   :license: LGPL
   :recipe: /`bioconductor-hspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspec/meta.yaml>`_

   


.. conda:package:: bioconductor-hspec

   |downloads_bioconductor-hspec| |docker_bioconductor-hspec|

   :versions: 0.99.1-3, 0.99.1-2, 0.99.1-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hspec

   and update with::

      conda update bioconductor-hspec

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hspec:<tag>

   (see `bioconductor-hspec/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hspec| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hspec.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hspec
   :alt:   (downloads)
.. |docker_bioconductor-hspec| image:: https://quay.io/repository/biocontainers/bioconductor-hspec/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hspec
.. _`bioconductor-hspec/tags`: https://quay.io/repository/biocontainers/bioconductor-hspec?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hspec/README.html