:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rontotools'
.. highlight: bash

bioconductor-rontotools
=======================

.. conda:recipe:: bioconductor-rontotools
   :replaces_section_title:
   :noindex:

   R Onto\-Tools suite

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ROntoTools.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-rontotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools/meta.yaml>`_
   :links: biotools: :biotools:`rontotools`, doi: :doi:`10.1109/JPROC.2016.2531000`

   Suite of tools for functional analysis.


.. conda:package:: bioconductor-rontotools

   |downloads_bioconductor-rontotools| |docker_bioconductor-rontotools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-kegggraph: ``>=1.66.0,<1.67.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-boot: 
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

      mamba install bioconductor-rontotools

   and update with::

      mamba update bioconductor-rontotools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rontotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rontotools:<tag>

   (see `bioconductor-rontotools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rontotools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rontotools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rontotools
   :alt:   (downloads)
.. |docker_bioconductor-rontotools| image:: https://quay.io/repository/biocontainers/bioconductor-rontotools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rontotools
.. _`bioconductor-rontotools/tags`: https://quay.io/repository/biocontainers/bioconductor-rontotools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rontotools";
        var versions = ["2.34.0","2.30.0","2.28.0","2.26.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rontotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rontotools/README.html