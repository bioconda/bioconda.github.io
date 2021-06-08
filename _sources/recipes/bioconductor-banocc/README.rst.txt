:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-banocc'
.. highlight: bash

bioconductor-banocc
===================

.. conda:recipe:: bioconductor-banocc
   :replaces_section_title:
   :noindex:

   Bayesian ANalysis Of Compositional Covariance

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/banocc.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-banocc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banocc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banocc/meta.yaml>`_

   BAnOCC is a package designed for compositional data\, where each sample sums to one. It infers the approximate covariance of the unconstrained data using a Bayesian model coded with \`rstan\`. It provides as output the \`stanfit\` object as well as posterior median and credible interval estimates for each correlation element.


.. conda:package:: bioconductor-banocc

   |downloads_bioconductor-banocc| |docker_bioconductor-banocc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-coda: ``>=0.18.1``
   :depends r-mvtnorm: 
   :depends r-rstan: ``>=2.17.4``
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-banocc

   and update with::

      conda update bioconductor-banocc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-banocc:<tag>

   (see `bioconductor-banocc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-banocc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-banocc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-banocc
   :alt:   (downloads)
.. |docker_bioconductor-banocc| image:: https://quay.io/repository/biocontainers/bioconductor-banocc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-banocc
.. _`bioconductor-banocc/tags`: https://quay.io/repository/biocontainers/bioconductor-banocc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-banocc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-banocc/README.html