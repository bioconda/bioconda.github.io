:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcgsa'
.. highlight: bash

bioconductor-dcgsa
==================

.. conda:recipe:: bioconductor-dcgsa
   :replaces_section_title:
   :noindex:

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/dcGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-dcgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa/meta.yaml>`_
   :links: biotools: :biotools:`dcgsa`, doi: :doi:`10.1038/nmeth.3252`

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles. In longitudinal studies\, the gene expression profiles were collected at each visit from each subject and hence there are multiple measurements of the gene expression profiles for each subject. The dcGSA package could be used to assess the associations between gene sets and clinical outcomes of interest by fully taking advantage of the longitudinal nature of both the gene expression profiles and clinical outcomes.


.. conda:package:: bioconductor-dcgsa

   |downloads_bioconductor-dcgsa| |docker_bioconductor-dcgsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dcgsa

   and update with::

      conda update bioconductor-dcgsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dcgsa:<tag>

   (see `bioconductor-dcgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dcgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcgsa
   :alt:   (downloads)
.. |docker_bioconductor-dcgsa| image:: https://quay.io/repository/biocontainers/bioconductor-dcgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcgsa
.. _`bioconductor-dcgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-dcgsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html