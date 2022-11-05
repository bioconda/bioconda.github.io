:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lapmix'
.. highlight: bash

bioconductor-lapmix
===================

.. conda:recipe:: bioconductor-lapmix
   :replaces_section_title:
   :noindex:

   Laplace Mixture Model in Microarray Experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/lapmix.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-lapmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapmix/meta.yaml>`_
   :links: biotools: :biotools:`lapmix`, doi: :doi:`10.1093/biostatistics/kxj032`

   Laplace mixture modelling of microarray experiments. A hierarchical Bayesian approach is used\, and the hyperparameters are estimated using empirical Bayes. The main purpose is to identify differentially expressed genes.


.. conda:package:: bioconductor-lapmix

   |downloads_bioconductor-lapmix| |docker_bioconductor-lapmix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lapmix

   and update with::

      conda update bioconductor-lapmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lapmix:<tag>

   (see `bioconductor-lapmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lapmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lapmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lapmix
   :alt:   (downloads)
.. |docker_bioconductor-lapmix| image:: https://quay.io/repository/biocontainers/bioconductor-lapmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lapmix
.. _`bioconductor-lapmix/tags`: https://quay.io/repository/biocontainers/bioconductor-lapmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lapmix";
        var versions = ["1.64.0","1.60.0","1.58.0","1.56.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lapmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lapmix/README.html