:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdisop'
.. highlight: bash

bioconductor-rdisop
===================

.. conda:recipe:: bioconductor-rdisop
   :replaces_section_title:
   :noindex:

   Decomposition of Isotopic Patterns

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Rdisop.html
   :license: GPL-2
   :recipe: /`bioconductor-rdisop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdisop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdisop/meta.yaml>`_

   Identification of metabolites using high precision mass spectrometry. MS Peaks are used to derive a ranked list of sum formulae\, alternatively for a given sum formula the theoretical isotope distribution can be calculated to search in MS peak lists.


.. conda:package:: bioconductor-rdisop

   |downloads_bioconductor-rdisop| |docker_bioconductor-rdisop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.1-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rdisop

   and update with::

      conda update bioconductor-rdisop

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdisop:<tag>

   (see `bioconductor-rdisop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdisop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdisop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rdisop
   :alt:   (downloads)
.. |docker_bioconductor-rdisop| image:: https://quay.io/repository/biocontainers/bioconductor-rdisop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdisop
.. _`bioconductor-rdisop/tags`: https://quay.io/repository/biocontainers/bioconductor-rdisop?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rdisop";
        var versions = ["1.58.0","1.58.0","1.54.0","1.54.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdisop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdisop/README.html