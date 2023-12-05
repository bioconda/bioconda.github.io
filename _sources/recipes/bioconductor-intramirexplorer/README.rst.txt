:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intramirexplorer'
.. highlight: bash

bioconductor-intramirexplorer
=============================

.. conda:recipe:: bioconductor-intramirexplorer
   :replaces_section_title:
   :noindex:

   Predicting Targets for Drosophila Intragenic miRNAs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/IntramiRExploreR.html
   :license: GPL-2
   :recipe: /`bioconductor-intramirexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intramirexplorer/meta.yaml>`_

   Intra\-miR\-ExploreR\, an integrative miRNA target prediction bioinformatics tool\, identifies targets combining expression and biophysical interactions of a given microRNA \(miR\). Using the tool\, we have identified targets for 92 intragenic miRs in D. melanogaster\, using available microarray expression data\, from Affymetrix 1 and Affymetrix2 microarray array platforms\, providing a global perspective of intragenic miR targets in Drosophila. Predicted targets are grouped according to biological functions using the DAVID Gene Ontology tool and are ranked based on a biologically relevant scoring system\, enabling the user to identify functionally relevant targets for a given miR.


.. conda:package:: bioconductor-intramirexplorer

   |downloads_bioconductor-intramirexplorer| |docker_bioconductor-intramirexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-fgnet: ``>=3.36.0,<3.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: ``>=1.0.1``
   :depends r-knitr: ``>=1.12.3``
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

      mamba install bioconductor-intramirexplorer

   and update with::

      mamba update bioconductor-intramirexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-intramirexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intramirexplorer:<tag>

   (see `bioconductor-intramirexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intramirexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intramirexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intramirexplorer
   :alt:   (downloads)
.. |docker_bioconductor-intramirexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer
.. _`bioconductor-intramirexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-intramirexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intramirexplorer";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intramirexplorer/README.html