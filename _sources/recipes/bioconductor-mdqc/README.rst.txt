:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdqc'
.. highlight: bash

bioconductor-mdqc
=================

.. conda:recipe:: bioconductor-mdqc
   :replaces_section_title:
   :noindex:

   Mahalanobis Distance Quality Control for microarrays

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mdqc.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-mdqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdqc/meta.yaml>`_
   :links: biotools: :biotools:`mdqc`, doi: :doi:`10.1093/bioinformatics/btm487`

   MDQC is a multivariate quality assessment method for microarrays based on quality control \(QC\) reports. The Mahalanobis distance of an array\'s quality attributes is used to measure the similarity of the quality of that array against the quality of the other arrays. Then\, arrays with unusually high distances can be flagged as potentially low\-quality.


.. conda:package:: bioconductor-mdqc

   |downloads_bioconductor-mdqc| |docker_bioconductor-mdqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdqc

   and update with::

      conda update bioconductor-mdqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mdqc:<tag>

   (see `bioconductor-mdqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdqc
   :alt:   (downloads)
.. |docker_bioconductor-mdqc| image:: https://quay.io/repository/biocontainers/bioconductor-mdqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdqc
.. _`bioconductor-mdqc/tags`: https://quay.io/repository/biocontainers/bioconductor-mdqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdqc/README.html