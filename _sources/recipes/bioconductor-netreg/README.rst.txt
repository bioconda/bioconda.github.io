:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netreg'
.. highlight: bash

bioconductor-netreg
===================

.. conda:recipe:: bioconductor-netreg
   :replaces_section_title:

   netReg fits linear regression models using network\-penalization. Graph prior knowledge\, in the form of biological networks\, is being incorporated into the loss function of the linear model. The networks describe biological relationships such as co\-regulation or dependency of the same transcription factors\/metabolites\/etc. yielding a part sparse and part smooth solution for coefficient profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netReg.html
   :license: GPL-3 | BSL-1.0 + file LICENSE
   :recipe: /`bioconductor-netreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netreg/meta.yaml>`_

   


.. conda:package:: bioconductor-netreg

   |downloads_bioconductor-netreg| |docker_bioconductor-netreg|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netreg

   and update with::

      conda update bioconductor-netreg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netreg:<tag>

   (see `bioconductor-netreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netreg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netreg| image:: https://quay.io/repository/biocontainers/bioconductor-netreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netreg
.. _`bioconductor-netreg/tags`: https://quay.io/repository/biocontainers/bioconductor-netreg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netreg/README.html