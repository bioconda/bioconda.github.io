:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-igvr'
.. highlight: bash

bioconductor-igvr
=================

.. conda:recipe:: bioconductor-igvr
   :replaces_section_title:
   :noindex:

   igvR\: integrative genomics viewer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/igvR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-igvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igvr/meta.yaml>`_

   Access to igv.js\, the Integrative Genomics Viewer running in a web browser.


.. conda:package:: bioconductor-igvr

   |downloads_bioconductor-igvr| |docker_bioconductor-igvr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.7.8-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.7.8-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-browserviz: ``>=2.28.0,<2.29.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httpuv: 
   :depends r-httr: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-igvr

   and update with::

      mamba update bioconductor-igvr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-igvr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-igvr:<tag>

   (see `bioconductor-igvr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-igvr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-igvr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-igvr
   :alt:   (downloads)
.. |docker_bioconductor-igvr| image:: https://quay.io/repository/biocontainers/bioconductor-igvr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-igvr
.. _`bioconductor-igvr/tags`: https://quay.io/repository/biocontainers/bioconductor-igvr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-igvr";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-igvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-igvr/README.html