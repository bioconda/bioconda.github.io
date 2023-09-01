:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-altcdfenvs'
.. highlight: bash

bioconductor-altcdfenvs
=======================

.. conda:recipe:: bioconductor-altcdfenvs
   :replaces_section_title:
   :noindex:

   alternative CDF environments \(aka probeset mappings\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/altcdfenvs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-altcdfenvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-altcdfenvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-altcdfenvs/meta.yaml>`_
   :links: biotools: :biotools:`altcdfenvs`

   Convenience data structures and functions to handle cdfenvs


.. conda:package:: bioconductor-altcdfenvs

   |downloads_bioconductor-altcdfenvs| |docker_bioconductor-altcdfenvs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.60.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-hypergraph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-makecdfenv: ``>=1.76.0,<1.77.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-altcdfenvs

   and update with::

      mamba update bioconductor-altcdfenvs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-altcdfenvs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-altcdfenvs:<tag>

   (see `bioconductor-altcdfenvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-altcdfenvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-altcdfenvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-altcdfenvs
   :alt:   (downloads)
.. |docker_bioconductor-altcdfenvs| image:: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs
.. _`bioconductor-altcdfenvs/tags`: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-altcdfenvs";
        var versions = ["2.62.0","2.60.0","2.56.0","2.54.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-altcdfenvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-altcdfenvs/README.html