:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcatest'
.. highlight: bash

bioconductor-gcatest
====================

.. conda:recipe:: bioconductor-gcatest
   :replaces_section_title:

   GCAT is an association test for genome wide association studies that controls for population structure under a general class of trait. models.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gcatest.html
   :license: GPL-3
   :recipe: /`bioconductor-gcatest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcatest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcatest/meta.yaml>`_
   :links: biotools: :biotools:`gcatest`, doi: :doi:`10.1101/012682`

   


.. conda:package:: bioconductor-gcatest

   |downloads_bioconductor-gcatest| |docker_bioconductor-gcatest|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-lfa: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcatest

   and update with::

      conda update bioconductor-gcatest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gcatest:<tag>

   (see `bioconductor-gcatest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcatest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcatest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gcatest| image:: https://quay.io/repository/biocontainers/bioconductor-gcatest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcatest
.. _`bioconductor-gcatest/tags`: https://quay.io/repository/biocontainers/bioconductor-gcatest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcatest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcatest/README.html