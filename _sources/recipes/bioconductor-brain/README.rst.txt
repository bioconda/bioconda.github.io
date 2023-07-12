:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brain'
.. highlight: bash

bioconductor-brain
==================

.. conda:recipe:: bioconductor-brain
   :replaces_section_title:
   :noindex:

   Baffling Recursive Algorithm for Isotope distributioN calculations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BRAIN.html
   :license: GPL-2
   :recipe: /`bioconductor-brain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain/meta.yaml>`_
   :links: biotools: :biotools:`brain`, doi: :doi:`10.1021/ac303439m`

   Package for calculating aggregated isotopic distribution and exact center\-masses for chemical substances \(in this version composed of C\, H\, N\, O and S\). This is an implementation of the BRAIN algorithm described in the paper by J. Claesen\, P. Dittwald\, T. Burzykowski and D. Valkenborg.


.. conda:package:: bioconductor-brain

   |downloads_bioconductor-brain| |docker_bioconductor-brain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-polynomf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brain

   and update with::

      conda update bioconductor-brain

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brain:<tag>

   (see `bioconductor-brain/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brain
   :alt:   (downloads)
.. |docker_bioconductor-brain| image:: https://quay.io/repository/biocontainers/bioconductor-brain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brain
.. _`bioconductor-brain/tags`: https://quay.io/repository/biocontainers/bioconductor-brain?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brain";
        var versions = ["1.46.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brain/README.html