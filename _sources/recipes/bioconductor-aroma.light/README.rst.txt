:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aroma.light'
.. highlight: bash

bioconductor-aroma.light
========================

.. conda:recipe:: bioconductor-aroma.light
   :replaces_section_title:
   :noindex:

   Light\-Weight Methods for Normalization and Visualization of Microarray Data using Only Basic R Data Types

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/aroma.light.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-aroma.light <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light/meta.yaml>`_
   :links: biotools: :biotools:`aroma.light`

   Methods for microarray analysis that take basic data types such as matrices and lists of vectors.  These methods can be used standalone\, be utilized in other packages\, or be wrapped up in higher\-level classes.


.. conda:package:: bioconductor-aroma.light

   |downloads_bioconductor-aroma.light| |docker_bioconductor-aroma.light|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-0</code>,  </span></summary>
      

      ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-r.methodss3: ``>=1.7.1``
   :depends r-r.oo: ``>=1.23.0``
   :depends r-r.utils: ``>=2.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aroma.light

   and update with::

      conda update bioconductor-aroma.light

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aroma.light:<tag>

   (see `bioconductor-aroma.light/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aroma.light| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aroma.light.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aroma.light
   :alt:   (downloads)
.. |docker_bioconductor-aroma.light| image:: https://quay.io/repository/biocontainers/bioconductor-aroma.light/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aroma.light
.. _`bioconductor-aroma.light/tags`: https://quay.io/repository/biocontainers/bioconductor-aroma.light?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html