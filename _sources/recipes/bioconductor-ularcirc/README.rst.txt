:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ularcirc'
.. highlight: bash

bioconductor-ularcirc
=====================

.. conda:recipe:: bioconductor-ularcirc
   :replaces_section_title:
   :noindex:

   Shiny app for canonical and back splicing analysis \(i.e. circular and mRNA analysis\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Ularcirc.html
   :license: file LICENSE
   :recipe: /`bioconductor-ularcirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ularcirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ularcirc/meta.yaml>`_

   Ularcirc reads in STAR aligned splice junction files and provides visualisation and analysis tools for splicing analysis. Users can assess backsplice junctions and forward canonical junctions.


.. conda:package:: bioconductor-ularcirc

   |downloads_bioconductor-ularcirc| |docker_bioconductor-ularcirc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodbdata: ``>=1.2.0,<1.3.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-mirbase.db: ``>=1.2.0,<1.3.0``
   :depends bioconductor-organism.dplyr: ``>=1.28.0,<1.29.0``
   :depends bioconductor-plotgardener: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.9.4``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gsubfn: 
   :depends r-moments: 
   :depends r-r.utils: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-yaml: 
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

      mamba install bioconductor-ularcirc

   and update with::

      mamba update bioconductor-ularcirc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ularcirc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ularcirc:<tag>

   (see `bioconductor-ularcirc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ularcirc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ularcirc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ularcirc
   :alt:   (downloads)
.. |docker_bioconductor-ularcirc| image:: https://quay.io/repository/biocontainers/bioconductor-ularcirc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ularcirc
.. _`bioconductor-ularcirc/tags`: https://quay.io/repository/biocontainers/bioconductor-ularcirc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ularcirc";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ularcirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ularcirc/README.html