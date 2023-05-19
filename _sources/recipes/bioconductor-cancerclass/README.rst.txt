:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancerclass'
.. highlight: bash

bioconductor-cancerclass
========================

.. conda:recipe:: bioconductor-cancerclass
   :replaces_section_title:
   :noindex:

   Development and validation of diagnostic tests from high\-dimensional molecular data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/cancerclass.html
   :license: GPL 3
   :recipe: /`bioconductor-cancerclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerclass/meta.yaml>`_

   The classification protocol starts with a feature selection step and continues with nearest\-centroid classification. The accurarcy of the predictor can be evaluated using training and test set validation\, leave\-one\-out cross\-validation or in a multiple random validation protocol. Methods for calculation and visualization of continuous prediction scores allow to balance sensitivity and specificity and define a cutoff value according to clinical requirements.


.. conda:package:: bioconductor-cancerclass

   |downloads_bioconductor-cancerclass| |docker_bioconductor-cancerclass|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-binom: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerclass

   and update with::

      conda update bioconductor-cancerclass

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancerclass:<tag>

   (see `bioconductor-cancerclass/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancerclass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerclass.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancerclass
   :alt:   (downloads)
.. |docker_bioconductor-cancerclass| image:: https://quay.io/repository/biocontainers/bioconductor-cancerclass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerclass
.. _`bioconductor-cancerclass/tags`: https://quay.io/repository/biocontainers/bioconductor-cancerclass?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancerclass";
        var versions = ["1.42.0","1.42.0","1.38.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerclass/README.html