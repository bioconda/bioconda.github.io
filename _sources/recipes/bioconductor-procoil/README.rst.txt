:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-procoil'
.. highlight: bash

bioconductor-procoil
====================

.. conda:recipe:: bioconductor-procoil
   :replaces_section_title:
   :noindex:

   Prediction of Oligomerization of Coiled Coil Proteins

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/procoil.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-procoil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-procoil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-procoil/meta.yaml>`_
   :links: biotools: :biotools:`procoil`

   The package allows for predicting whether a coiled coil sequence \(amino acid sequence plus heptad register\) is more likely to form a dimer or more likely to form a trimer. Additionally to the prediction itself\, a prediction profile is computed which allows for determining the strengths to which the individual residues are indicative for either class. Prediction profiles can also be visualized as curves or heatmaps.


.. conda:package:: bioconductor-procoil

   |downloads_bioconductor-procoil| |docker_bioconductor-procoil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-kebabs: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-procoil

   and update with::

      conda update bioconductor-procoil

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-procoil:<tag>

   (see `bioconductor-procoil/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-procoil| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-procoil.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-procoil
   :alt:   (downloads)
.. |docker_bioconductor-procoil| image:: https://quay.io/repository/biocontainers/bioconductor-procoil/status
   :target: https://quay.io/repository/biocontainers/bioconductor-procoil
.. _`bioconductor-procoil/tags`: https://quay.io/repository/biocontainers/bioconductor-procoil?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-procoil";
        var versions = ["2.28.0","2.26.0","2.22.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-procoil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-procoil/README.html