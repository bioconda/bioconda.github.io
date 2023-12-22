:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scan.upc'
.. highlight: bash

bioconductor-scan.upc
=====================

.. conda:recipe:: bioconductor-scan.upc
   :replaces_section_title:
   :noindex:

   Single\-channel array normalization \(SCAN\) and Universal exPression Codes \(UPC\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SCAN.UPC.html
   :license: MIT
   :recipe: /`bioconductor-scan.upc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scan.upc/meta.yaml>`_
   :links: biotools: :biotools:`scan.upc`

   SCAN is a microarray normalization method to facilitate personalized\-medicine workflows. Rather than processing microarray samples as groups\, which can introduce biases and present logistical challenges\, SCAN normalizes each sample individually by modeling and removing probe\- and array\-specific background noise using only data from within each array. SCAN can be applied to one\-channel \(e.g.\, Affymetrix\) or two\-channel \(e.g.\, Agilent\) microarrays. The Universal exPression Codes \(UPC\) method is an extension of SCAN that estimates whether a given gene\/transcript is active above background levels in a given sample. The UPC method can be applied to one\-channel or two\-channel microarrays as well as to RNA\-Seq read counts. Because UPC values are represented on the same scale and have an identical interpretation for each platform\, they can be used for cross\-platform data integration.


.. conda:package:: bioconductor-scan.upc

   |downloads_bioconductor-scan.upc| |docker_bioconductor-scan.upc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affyio: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-foreach: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scan.upc

   and update with::

      mamba update bioconductor-scan.upc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scan.upc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scan.upc:<tag>

   (see `bioconductor-scan.upc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scan.upc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scan.upc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scan.upc
   :alt:   (downloads)
.. |docker_bioconductor-scan.upc| image:: https://quay.io/repository/biocontainers/bioconductor-scan.upc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scan.upc
.. _`bioconductor-scan.upc/tags`: https://quay.io/repository/biocontainers/bioconductor-scan.upc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scan.upc";
        var versions = ["2.44.0","2.42.0","2.40.0","2.36.0","2.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scan.upc/README.html