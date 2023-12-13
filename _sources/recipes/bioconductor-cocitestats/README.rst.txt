:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cocitestats'
.. highlight: bash

bioconductor-cocitestats
========================

.. conda:recipe:: bioconductor-cocitestats
   :replaces_section_title:
   :noindex:

   Different test statistics based on co\-citation.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CoCiteStats.html
   :license: CPL
   :recipe: /`bioconductor-cocitestats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats/meta.yaml>`_

   A collection of software tools for dealing with co\-citation data.


.. conda:package:: bioconductor-cocitestats

   |downloads_bioconductor-cocitestats| |docker_bioconductor-cocitestats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
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

      mamba install bioconductor-cocitestats

   and update with::

      mamba update bioconductor-cocitestats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cocitestats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cocitestats:<tag>

   (see `bioconductor-cocitestats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cocitestats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocitestats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cocitestats
   :alt:   (downloads)
.. |docker_bioconductor-cocitestats| image:: https://quay.io/repository/biocontainers/bioconductor-cocitestats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocitestats
.. _`bioconductor-cocitestats/tags`: https://quay.io/repository/biocontainers/bioconductor-cocitestats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cocitestats";
        var versions = ["1.74.0","1.72.0","1.70.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html