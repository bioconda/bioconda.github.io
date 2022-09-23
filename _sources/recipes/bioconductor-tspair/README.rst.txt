:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tspair'
.. highlight: bash

bioconductor-tspair
===================

.. conda:recipe:: bioconductor-tspair
   :replaces_section_title:
   :noindex:

   Top Scoring Pairs for Microarray Classification

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/tspair.html
   :license: GPL-2
   :recipe: /`bioconductor-tspair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tspair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tspair/meta.yaml>`_
   :links: biotools: :biotools:`tspair`, doi: :doi:`10.1093/bioinformatics/btp126`

   These functions calculate the pair of genes that show the maximum difference in ranking between two user specified groups. This \"top scoring pair\" maximizes the average of sensitivity and specificity over all rank based classifiers using a pair of genes in the data set. The advantage of classifying samples based on only the relative rank of a pair of genes is \(a\) the classifiers are much simpler and often more interpretable than more complicated classification schemes and \(b\) if arrays can be classified using only a pair of genes\, PCR based tests could be used for classification of samples. See the references for the tspcalc\(\) function for references regarding TSP classifiers.


.. conda:package:: bioconductor-tspair

   |downloads_bioconductor-tspair| |docker_bioconductor-tspair|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tspair

   and update with::

      conda update bioconductor-tspair

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tspair:<tag>

   (see `bioconductor-tspair/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tspair| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tspair.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tspair
   :alt:   (downloads)
.. |docker_bioconductor-tspair| image:: https://quay.io/repository/biocontainers/bioconductor-tspair/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tspair
.. _`bioconductor-tspair/tags`: https://quay.io/repository/biocontainers/bioconductor-tspair?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tspair";
        var versions = ["1.52.0","1.52.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tspair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tspair/README.html