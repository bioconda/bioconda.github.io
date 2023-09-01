:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aroma.light'
.. highlight: bash

bioconductor-aroma.light
========================

.. conda:recipe:: bioconductor-aroma.light
   :replaces_section_title:
   :noindex:

   Light\-Weight Methods for Normalization and Visualization of Microarray Data using Only Basic R Data Types

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/aroma.light.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-aroma.light <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light/meta.yaml>`_
   :links: biotools: :biotools:`aroma.light`

   Methods for microarray analysis that take basic data types such as matrices and lists of vectors.  These methods can be used standalone\, be utilized in other packages\, or be wrapped up in higher\-level classes.


.. conda:package:: bioconductor-aroma.light

   |downloads_bioconductor-aroma.light| |docker_bioconductor-aroma.light|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.30.0-0</code>,  <code>3.28.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-1</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  </span></summary>
      

      ``3.30.0-0``,  ``3.28.0-0``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-r.methodss3: ``>=1.7.1``
   :depends r-r.oo: ``>=1.23.0``
   :depends r-r.utils: ``>=2.9.0``
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

      mamba install bioconductor-aroma.light

   and update with::

      mamba update bioconductor-aroma.light

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aroma.light

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aroma.light:<tag>

   (see `bioconductor-aroma.light/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aroma.light| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aroma.light.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aroma.light
   :alt:   (downloads)
.. |docker_bioconductor-aroma.light| image:: https://quay.io/repository/biocontainers/bioconductor-aroma.light/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aroma.light
.. _`bioconductor-aroma.light/tags`: https://quay.io/repository/biocontainers/bioconductor-aroma.light?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aroma.light";
        var versions = ["3.30.0","3.28.0","3.24.0","3.22.0","3.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html