:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbm'
.. highlight: bash

bioconductor-rbm
================

.. conda:recipe:: bioconductor-rbm
   :replaces_section_title:
   :noindex:

   RBM\: a R package for microarray and RNA\-Seq data analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RBM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbm/meta.yaml>`_
   :links: biotools: :biotools:`rbm`, doi: :doi:`10.1038/nmeth.3252`

   Use A Resampling\-Based Empirical Bayes Approach to Assess Differential Expression in Two\-Color Microarrays and RNA\-Seq data sets.


.. conda:package:: bioconductor-rbm

   |downloads_bioconductor-rbm| |docker_bioconductor-rbm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbm

   and update with::

      conda update bioconductor-rbm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbm:<tag>

   (see `bioconductor-rbm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbm
   :alt:   (downloads)
.. |docker_bioconductor-rbm| image:: https://quay.io/repository/biocontainers/bioconductor-rbm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbm
.. _`bioconductor-rbm/tags`: https://quay.io/repository/biocontainers/bioconductor-rbm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbm";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbm/README.html