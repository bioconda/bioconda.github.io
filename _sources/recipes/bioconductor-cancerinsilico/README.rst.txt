:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancerinsilico'
.. highlight: bash

bioconductor-cancerinsilico
===========================

.. conda:recipe:: bioconductor-cancerinsilico
   :replaces_section_title:
   :noindex:

   An R interface for computational modeling of tumor progression

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CancerInSilico.html
   :license: GPL-2
   :recipe: /`bioconductor-cancerinsilico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerinsilico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerinsilico/meta.yaml>`_
   :links: biotools: :biotools:`cancerinsilico`, doi: :doi:`10.1038/nmeth.3252`

   The CancerInSilico package provides an R interface for running mathematical models of tumor progresson and generating gene expression data from the results. This package has the underlying models implemented in C\+\+ and the output and analysis features implemented in R.


.. conda:package:: bioconductor-cancerinsilico

   |downloads_bioconductor-cancerinsilico| |docker_bioconductor-cancerinsilico|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-2</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.14.0-2</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.18.0-2``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerinsilico

   and update with::

      conda update bioconductor-cancerinsilico

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancerinsilico:<tag>

   (see `bioconductor-cancerinsilico/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancerinsilico| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerinsilico.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancerinsilico
   :alt:   (downloads)
.. |docker_bioconductor-cancerinsilico| image:: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico
.. _`bioconductor-cancerinsilico/tags`: https://quay.io/repository/biocontainers/bioconductor-cancerinsilico?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancerinsilico";
        var versions = ["2.18.0","2.18.0","2.18.0","2.14.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerinsilico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerinsilico/README.html