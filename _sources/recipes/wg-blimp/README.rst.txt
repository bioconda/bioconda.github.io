:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wg-blimp'
.. highlight: bash

wg-blimp
========

.. conda:recipe:: wg-blimp
   :replaces_section_title:
   :noindex:

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\)

   :homepage: https://github.com/MarWoes/wg-blimp
   :license: GPL / AGPL-3.0
   :recipe: /`wg-blimp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wg-blimp/meta.yaml>`_

   wg\-blimp \(Whole Genome BisuLfIte sequencing Methylation analysis Pipeline\) can be utilised to analyse WGBS data. 
   It performs alignment\, qc\, methylation calling\, DMR calling\, segmentation and annotation using a multitude of tools. 



.. conda:package:: wg-blimp

   |downloads_wg-blimp| |docker_wg-blimp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.10-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-1</code>,  <code>0.9.8-0</code>,  <code>0.9.7-0</code>,  <code>0.9.6-1</code>,  <code>0.9.6-0</code>,  <code>0.9.5-1</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.8-1``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends h5py: 
   :depends pysam: 
   :depends python: 
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-httpuv: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends ruamel.yaml: 
   :depends snakemake-minimal: ``>=5.8``
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

      mamba install wg-blimp

   and update with::

      mamba update wg-blimp

  To create a new environment, run::

      mamba create --name myenvname wg-blimp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wg-blimp:<tag>

   (see `wg-blimp/tags`_ for valid values for ``<tag>``)


.. |downloads_wg-blimp| image:: https://img.shields.io/conda/dn/bioconda/wg-blimp.svg?style=flat
   :target: https://anaconda.org/bioconda/wg-blimp
   :alt:   (downloads)
.. |docker_wg-blimp| image:: https://quay.io/repository/biocontainers/wg-blimp/status
   :target: https://quay.io/repository/biocontainers/wg-blimp
.. _`wg-blimp/tags`: https://quay.io/repository/biocontainers/wg-blimp?tab=tags


.. raw:: html

    <script>
        var package = "wg-blimp";
        var versions = ["0.10.0","0.9.10","0.9.9","0.9.8","0.9.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wg-blimp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wg-blimp/README.html