:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rchemcpp'
.. highlight: bash

bioconductor-rchemcpp
=====================

.. conda:recipe:: bioconductor-rchemcpp
   :replaces_section_title:

   The Rchemcpp package implements the marginalized graph kernel and extensions\, Tanimoto kernels\, graph kernels\, pharmacophore and 3D kernels suggested for measuring the similarity of molecules.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rchemcpp.html
   :license: GPL (>= 2.1)
   :recipe: /`bioconductor-rchemcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rchemcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rchemcpp/meta.yaml>`_
   :links: biotools: :biotools:`rchemcpp`

   


.. conda:package:: bioconductor-rchemcpp

   |downloads_bioconductor-rchemcpp| |docker_bioconductor-rchemcpp|

   :versions: 2.20.0-0, 2.18.0-0, 2.16.0-0, 2.14.0-0
   
   :depends bioconductor-chemminer: >=3.34.0,<3.35.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: >=0.11.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rchemcpp

   and update with::

      conda update bioconductor-rchemcpp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rchemcpp:<tag>

   (see `bioconductor-rchemcpp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rchemcpp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rchemcpp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rchemcpp| image:: https://quay.io/repository/biocontainers/bioconductor-rchemcpp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rchemcpp
.. _`bioconductor-rchemcpp/tags`: https://quay.io/repository/biocontainers/bioconductor-rchemcpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rchemcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rchemcpp/README.html