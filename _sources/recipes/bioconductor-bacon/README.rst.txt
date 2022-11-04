:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bacon'
.. highlight: bash

bioconductor-bacon
==================

.. conda:recipe:: bioconductor-bacon
   :replaces_section_title:
   :noindex:

   Controlling bias and inflation in association studies using the empirical null distribution

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/bacon.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bacon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bacon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bacon/meta.yaml>`_
   :links: biotools: :biotools:`bacon`

   Bacon can be used to remove inflation and bias often observed in epigenome\- and transcriptome\-wide association studies. To this end bacon constructs an empirical null distribution using a Gibbs Sampling algorithm by fitting a three\-component normal mixture on z\-scores.


.. conda:package:: bioconductor-bacon

   |downloads_bioconductor-bacon| |docker_bioconductor-bacon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bacon

   and update with::

      conda update bioconductor-bacon

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bacon:<tag>

   (see `bioconductor-bacon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bacon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bacon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bacon
   :alt:   (downloads)
.. |docker_bioconductor-bacon| image:: https://quay.io/repository/biocontainers/bioconductor-bacon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bacon
.. _`bioconductor-bacon/tags`: https://quay.io/repository/biocontainers/bioconductor-bacon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bacon";
        var versions = ["1.26.0","1.22.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bacon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bacon/README.html