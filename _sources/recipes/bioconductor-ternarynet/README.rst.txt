:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ternarynet'
.. highlight: bash

bioconductor-ternarynet
=======================

.. conda:recipe:: bioconductor-ternarynet
   :replaces_section_title:
   :noindex:

   Ternary Network Estimation

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ternarynet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ternarynet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ternarynet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ternarynet/meta.yaml>`_
   :links: biotools: :biotools:`ternarynet`

   Gene\-regulatory network \(GRN\) modeling seeks to infer dependencies between genes and thereby provide insight into the regulatory relationships that exist within a cell. This package provides a computational Bayesian approach to GRN estimation from perturbation experiments using a ternary network model\, in which gene expression is discretized into one of 3 states\: up\, unchanged\, or down\). The ternarynet package includes a parallel implementation of the replica exchange Monte Carlo algorithm for fitting network models\, using MPI.


.. conda:package:: bioconductor-ternarynet

   |downloads_bioconductor-ternarynet| |docker_bioconductor-ternarynet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ternarynet

   and update with::

      conda update bioconductor-ternarynet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ternarynet:<tag>

   (see `bioconductor-ternarynet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ternarynet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ternarynet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ternarynet
   :alt:   (downloads)
.. |docker_bioconductor-ternarynet| image:: https://quay.io/repository/biocontainers/bioconductor-ternarynet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ternarynet
.. _`bioconductor-ternarynet/tags`: https://quay.io/repository/biocontainers/bioconductor-ternarynet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ternarynet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ternarynet/README.html