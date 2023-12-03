:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedarray'
.. highlight: bash

bioconductor-delayedarray
=========================

.. conda:recipe:: bioconductor-delayedarray
   :replaces_section_title:
   :noindex:

   A unified framework for working transparently with on\-disk and in\-memory array\-like datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DelayedArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-delayedarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray/meta.yaml>`_

   Wrapping an array\-like object \(typically an on\-disk object\) in a DelayedArray object allows one to perform common array operations on it without loading the object in memory. In order to reduce memory usage and optimize performance\, operations on the object are either delayed or executed using a block processing mechanism. Note that this also works on in\-memory array\-like objects like DataFrame objects \(typically with Rle columns\)\, Matrix objects\, ordinary arrays and\, data frames.


.. conda:package:: bioconductor-delayedarray

   |downloads_bioconductor-delayedarray| |docker_bioconductor-delayedarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.28.0-0</code>,  <code>0.26.6-0</code>,  <code>0.24.0-1</code>,  <code>0.24.0-0</code>,  <code>0.20.0-2</code>,  <code>0.20.0-1</code>,  <code>0.20.0-0</code>,  <code>0.18.0-0</code>,  <code>0.16.3-0</code>,  </span></summary>
      

      ``0.28.0-0``,  ``0.26.6-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.20.0-2``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.3-0``,  ``0.16.0-0``,  ``0.14.0-0``,  ``0.12.0-0``,  ``0.10.0-1``,  ``0.8.0-0``,  ``0.6.6-0``,  ``0.4.1-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<1.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<3.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<2.0a0``
   :depends bioconductor-s4arrays: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4arrays: ``>=1.2.0,<2.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<1.0a0``
   :depends bioconductor-sparsearray: ``>=1.2.0,<1.3.0``
   :depends bioconductor-sparsearray: ``>=1.2.2,<2.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-delayedarray

   and update with::

      mamba update bioconductor-delayedarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-delayedarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedarray:<tag>

   (see `bioconductor-delayedarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedarray
   :alt:   (downloads)
.. |docker_bioconductor-delayedarray| image:: https://quay.io/repository/biocontainers/bioconductor-delayedarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedarray
.. _`bioconductor-delayedarray/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedarray";
        var versions = ["0.28.0","0.26.6","0.24.0","0.24.0","0.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html