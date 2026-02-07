:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatslobd'
.. highlight: bash

bioconductor-msstatslobd
========================

.. conda:recipe:: bioconductor-msstatslobd
   :replaces_section_title:
   :noindex:

   Assay characterization\: estimation of limit of blanc\(LoB\) and limit of detection\(LOD\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsLOBD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatslobd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd/meta.yaml>`_

   The MSstatsLOBD package allows calculation and visualization of limit of blac \(LOB\) and limit of detection \(LOD\). We define the LOB as the highest apparent concentration of a peptide expected when replicates of a blank sample containing no peptides are measured. The LOD is defined as the measured concentration value for which the probability of falsely claiming the absence of a peptide in the sample is 0.05\, given a probability 0.05 of falsely claiming its presence. These functionalities were previously a part of the MSstats package. The methodology is described in Galitzine \(2018\) \<doi\:10.1074\/mcp.RA117.000322\>.


.. conda:package:: bioconductor-msstatslobd

   |downloads_bioconductor-msstatslobd| |docker_bioconductor-msstatslobd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libstdcxx: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-ggplot2: 
   :depends r-minpack.lm: 
   :depends r-rcpp: 
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

      mamba install bioconductor-msstatslobd

   and update with::

      mamba update bioconductor-msstatslobd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatslobd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatslobd:<tag>

   (see `bioconductor-msstatslobd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatslobd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatslobd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatslobd
   :alt:   (downloads)
.. |docker_bioconductor-msstatslobd| image:: https://quay.io/repository/biocontainers/bioconductor-msstatslobd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatslobd
.. _`bioconductor-msstatslobd/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatslobd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatslobd";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html