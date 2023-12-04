:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fmcsr'
.. highlight: bash

bioconductor-fmcsr
==================

.. conda:recipe:: bioconductor-fmcsr
   :replaces_section_title:
   :noindex:

   Mismatch Tolerant Maximum Common Substructure Searching

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fmcsR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fmcsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmcsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmcsr/meta.yaml>`_

   The fmcsR package introduces an efficient maximum common substructure \(MCS\) algorithms combined with a novel matching strategy that allows for atom and\/or bond mismatches in the substructures shared among two small molecules. The resulting flexible MCSs \(FMCSs\) are often larger than strict MCSs\, resulting in the identification of more common features in their source structures\, as well as a higher sensitivity in finding compounds with weak structural similarities. The fmcsR package provides several utilities to use the FMCS algorithm for pairwise compound comparisons\, structure similarity searching and clustering.


.. conda:package:: bioconductor-fmcsr

   |downloads_bioconductor-fmcsr| |docker_bioconductor-fmcsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-chemminer: ``>=3.54.0,<3.55.0``
   :depends bioconductor-chemminer: ``>=3.54.0,<3.55.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-runit: 
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

      mamba install bioconductor-fmcsr

   and update with::

      mamba update bioconductor-fmcsr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fmcsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fmcsr:<tag>

   (see `bioconductor-fmcsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fmcsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fmcsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fmcsr
   :alt:   (downloads)
.. |docker_bioconductor-fmcsr| image:: https://quay.io/repository/biocontainers/bioconductor-fmcsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fmcsr
.. _`bioconductor-fmcsr/tags`: https://quay.io/repository/biocontainers/bioconductor-fmcsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fmcsr";
        var versions = ["1.44.0","1.42.0","1.40.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fmcsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fmcsr/README.html