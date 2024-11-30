:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdsarray'
.. highlight: bash

bioconductor-gdsarray
=====================

.. conda:recipe:: bioconductor-gdsarray
   :replaces_section_title:
   :noindex:

   Representing GDS files as array\-like objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GDSArray.html
   :license: GPL-3
   :recipe: /`bioconductor-gdsarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsarray/meta.yaml>`_

   GDS files are widely used to represent genotyping or sequence data. The GDSArray package implements the \`GDSArray\` class to represent nodes in GDS files in a matrix\-like representation that allows easy manipulation \(e.g.\, subsetting\, mathematical transformation\) in \_R\_. The data remains on disk until needed\, so that very large files can be processed.


.. conda:package:: bioconductor-gdsarray

   |downloads_bioconductor-gdsarray| |docker_bioconductor-gdsarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-seqarray: ``>=1.42.0,<1.43.0``
   :depends bioconductor-snprelate: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-gdsarray

   and update with::

      mamba update bioconductor-gdsarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdsarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdsarray:<tag>

   (see `bioconductor-gdsarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdsarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdsarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdsarray
   :alt:   (downloads)
.. |docker_bioconductor-gdsarray| image:: https://quay.io/repository/biocontainers/bioconductor-gdsarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdsarray
.. _`bioconductor-gdsarray/tags`: https://quay.io/repository/biocontainers/bioconductor-gdsarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdsarray";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdsarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdsarray/README.html