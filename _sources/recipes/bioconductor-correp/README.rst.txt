:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-correp'
.. highlight: bash

bioconductor-correp
===================

.. conda:recipe:: bioconductor-correp
   :replaces_section_title:
   :noindex:

   Multivariate Correlation Estimator and Statistical Inference Procedures.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CORREP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-correp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-correp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-correp/meta.yaml>`_
   :links: biotools: :biotools:`correp`, doi: :doi:`10.1038/nmeth.3252`

   Multivariate correlation estimation and statistical inference. See package vignette.


.. conda:package:: bioconductor-correp

   |downloads_bioconductor-correp| |docker_bioconductor-correp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-correp

   and update with::

      conda update bioconductor-correp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-correp:<tag>

   (see `bioconductor-correp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-correp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-correp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-correp
   :alt:   (downloads)
.. |docker_bioconductor-correp| image:: https://quay.io/repository/biocontainers/bioconductor-correp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-correp
.. _`bioconductor-correp/tags`: https://quay.io/repository/biocontainers/bioconductor-correp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-correp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-correp/README.html