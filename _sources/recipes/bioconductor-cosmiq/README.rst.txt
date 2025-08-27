:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmiq'
.. highlight: bash

bioconductor-cosmiq
===================

.. conda:recipe:: bioconductor-cosmiq
   :replaces_section_title:
   :noindex:

   cosmiq \- COmbining Single Masses Into Quantities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cosmiq.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmiq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmiq/meta.yaml>`_
   :links: biotools: :biotools:`cosmiq`, doi: :doi:`10.5167/uzh-107947`

   cosmiq is a tool for the preprocessing of liquid\- or gas \- chromatography mass spectrometry \(LCMS\/GCMS\) data with a focus on metabolomics or lipidomics applications. To improve the detection of low abundant signals\, cosmiq generates master maps of the mZ\/RT space from all acquired runs before a peak detection algorithm is applied. The result is a more robust identification and quantification of low\-intensity MS signals compared to conventional approaches where peak picking is performed in each LCMS\/GCMS file separately. The cosmiq package builds on the xcmsSet object structure and can be therefore integrated well with the package xcms as an alternative preprocessing step.


.. conda:package:: bioconductor-cosmiq

   |downloads_bioconductor-cosmiq| |docker_bioconductor-cosmiq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-faahko: ``>=1.46.0,<1.47.0``
   :depends bioconductor-faahko: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-massspecwavelet: ``>=1.72.0,<1.73.0``
   :depends bioconductor-massspecwavelet: ``>=1.72.0,<1.73.0a0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pracma: 
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cosmiq

   and update with::

      mamba update bioconductor-cosmiq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosmiq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmiq:<tag>

   (see `bioconductor-cosmiq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmiq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmiq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmiq
   :alt:   (downloads)
.. |docker_bioconductor-cosmiq| image:: https://quay.io/repository/biocontainers/bioconductor-cosmiq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmiq
.. _`bioconductor-cosmiq/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmiq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosmiq";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmiq/README.html