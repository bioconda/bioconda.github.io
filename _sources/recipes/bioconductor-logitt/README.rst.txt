:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-logitt'
.. highlight: bash

bioconductor-logitt
===================

.. conda:recipe:: bioconductor-logitt
   :replaces_section_title:
   :noindex:

   logit\-t Package

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/logitT.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-logitt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logitt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-logitt/meta.yaml>`_
   :links: biotools: :biotools:`logitt`, doi: :doi:`10.1038/nmeth.3252`

   The logitT library implements the Logit\-t algorithm introduced in \-\-A high performance test of differential gene expression for oligonucleotide arrays\-\- by William J Lemon\, Sandya Liyanarachchi and Ming You for use with Affymetrix data stored in an AffyBatch object in R.


.. conda:package:: bioconductor-logitt

   |downloads_bioconductor-logitt| |docker_bioconductor-logitt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-logitt

   and update with::

      conda update bioconductor-logitt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-logitt:<tag>

   (see `bioconductor-logitt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-logitt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-logitt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-logitt
   :alt:   (downloads)
.. |docker_bioconductor-logitt| image:: https://quay.io/repository/biocontainers/bioconductor-logitt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-logitt
.. _`bioconductor-logitt/tags`: https://quay.io/repository/biocontainers/bioconductor-logitt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-logitt";
        var versions = ["1.52.0","1.52.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-logitt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-logitt/README.html