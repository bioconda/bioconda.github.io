:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpa'
.. highlight: bash

bioconductor-rpa
================

.. conda:recipe:: bioconductor-rpa
   :replaces_section_title:
   :noindex:

   RPA\: Robust Probabilistic Averaging for probe\-level analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RPA.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-rpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpa/meta.yaml>`_
   :links: biotools: :biotools:`rpa`

   Probabilistic analysis of probe reliability and differential gene expression on short oligonucleotide arrays.


.. conda:package:: bioconductor-rpa

   |downloads_bioconductor-rpa| |docker_bioconductor-rpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-phyloseq: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rpa

   and update with::

      conda update bioconductor-rpa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rpa:<tag>

   (see `bioconductor-rpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rpa
   :alt:   (downloads)
.. |docker_bioconductor-rpa| image:: https://quay.io/repository/biocontainers/bioconductor-rpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpa
.. _`bioconductor-rpa/tags`: https://quay.io/repository/biocontainers/bioconductor-rpa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpa/README.html