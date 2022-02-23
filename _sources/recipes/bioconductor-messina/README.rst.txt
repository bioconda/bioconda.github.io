:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-messina'
.. highlight: bash

bioconductor-messina
====================

.. conda:recipe:: bioconductor-messina
   :replaces_section_title:
   :noindex:

   Single\-gene classifiers and outlier\-resistant detection of differential expression for two\-group and survival problems

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/messina.html
   :license: EPL (>= 1.0)
   :recipe: /`bioconductor-messina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina/meta.yaml>`_
   :links: biotools: :biotools:`messina`

   Messina is a collection of algorithms for constructing optimally robust single\-gene classifiers\, and for identifying differential expression in the presence of outliers or unknown sample subgroups.  The methods have application in identifying lead features to develop into clinical tests \(both diagnostic and prognostic\)\, and in identifying differential expression when a fraction of samples show unusual patterns of expression.


.. conda:package:: bioconductor-messina

   |downloads_bioconductor-messina| |docker_bioconductor-messina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-foreach: ``>=1.4.1``
   :depends r-ggplot2: ``>=0.9.3.1``
   :depends r-plyr: ``>=1.8``
   :depends r-rcpp: ``>=0.11.1``
   :depends r-survival: ``>=2.37-4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-messina

   and update with::

      conda update bioconductor-messina

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-messina:<tag>

   (see `bioconductor-messina/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-messina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-messina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-messina
   :alt:   (downloads)
.. |docker_bioconductor-messina| image:: https://quay.io/repository/biocontainers/bioconductor-messina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-messina
.. _`bioconductor-messina/tags`: https://quay.io/repository/biocontainers/bioconductor-messina?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-messina";
        var versions = ["1.30.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-messina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-messina/README.html