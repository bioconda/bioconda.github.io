:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humantranscriptomecompendium'
.. highlight: bash

bioconductor-humantranscriptomecompendium
=========================================

.. conda:recipe:: bioconductor-humantranscriptomecompendium
   :replaces_section_title:
   :noindex:

   Tools to work with a Compendium of 181000 human transcriptome sequencing studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HumanTranscriptomeCompendium.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humantranscriptomecompendium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium/meta.yaml>`_

   Provide tools for working with a compendium of human transcriptome sequences \(originally htxcomp\).


.. conda:package:: bioconductor-humantranscriptomecompendium

   |downloads_bioconductor-humantranscriptomecompendium| |docker_bioconductor-humantranscriptomecompendium|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-ssrch: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-shiny: 
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

      mamba install bioconductor-humantranscriptomecompendium

   and update with::

      mamba update bioconductor-humantranscriptomecompendium

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humantranscriptomecompendium

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humantranscriptomecompendium:<tag>

   (see `bioconductor-humantranscriptomecompendium/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humantranscriptomecompendium| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humantranscriptomecompendium.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humantranscriptomecompendium
   :alt:   (downloads)
.. |docker_bioconductor-humantranscriptomecompendium| image:: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium
.. _`bioconductor-humantranscriptomecompendium/tags`: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humantranscriptomecompendium";
        var versions = ["1.17.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html