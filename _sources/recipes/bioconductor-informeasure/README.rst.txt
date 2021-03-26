:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-informeasure'
.. highlight: bash

bioconductor-informeasure
=========================

.. conda:recipe:: bioconductor-informeasure
   :replaces_section_title:
   :noindex:

   R implementation of Information measures

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Informeasure.html
   :license: GPL-3
   :recipe: /`bioconductor-informeasure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-informeasure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-informeasure/meta.yaml>`_

   This package compiles most information measures currently available\: mutual information\, conditional mutual information\, interaction information\, partial information decomposition and part mutual information. Using gene expression profile data\, all these estimators can be employed to quantify nonlinear dependence between variables in biological regulatory network inference. The first estimator is used to infer bivariate network while the last four estimators are dedicated to analyze trivariate networks.


.. conda:package:: bioconductor-informeasure

   |downloads_bioconductor-informeasure| |docker_bioconductor-informeasure|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-entropy: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-informeasure

   and update with::

      conda update bioconductor-informeasure

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-informeasure:<tag>

   (see `bioconductor-informeasure/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-informeasure| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-informeasure.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-informeasure
   :alt:   (downloads)
.. |docker_bioconductor-informeasure| image:: https://quay.io/repository/biocontainers/bioconductor-informeasure/status
   :target: https://quay.io/repository/biocontainers/bioconductor-informeasure
.. _`bioconductor-informeasure/tags`: https://quay.io/repository/biocontainers/bioconductor-informeasure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-informeasure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-informeasure/README.html