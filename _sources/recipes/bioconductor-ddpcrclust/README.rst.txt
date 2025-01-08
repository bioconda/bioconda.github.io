:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ddpcrclust'
.. highlight: bash

bioconductor-ddpcrclust
=======================

.. conda:recipe:: bioconductor-ddpcrclust
   :replaces_section_title:
   :noindex:

   Clustering algorithm for ddPCR data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ddPCRclust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ddpcrclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddpcrclust/meta.yaml>`_

   The ddPCRclust algorithm can automatically quantify the CPDs of non\-orthogonal ddPCR reactions with up to four targets. In order to determine the correct droplet count for each target\, it is crucial to both identify all clusters and label them correctly based on their position. For more information on what data can be analyzed and how a template needs to be formatted\, please check the vignette.


.. conda:package:: bioconductor-ddpcrclust

   |downloads_bioconductor-ddpcrclust| |docker_bioconductor-ddpcrclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowdensity: ``>=1.40.0,<1.41.0``
   :depends bioconductor-flowpeaks: ``>=1.52.0,<1.53.0``
   :depends bioconductor-samspectral: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clue: 
   :depends r-ggplot2: 
   :depends r-openxlsx: 
   :depends r-plotrix: 
   :depends r-r.utils: 
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

      mamba install bioconductor-ddpcrclust

   and update with::

      mamba update bioconductor-ddpcrclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ddpcrclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ddpcrclust:<tag>

   (see `bioconductor-ddpcrclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ddpcrclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ddpcrclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ddpcrclust
   :alt:   (downloads)
.. |docker_bioconductor-ddpcrclust| image:: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust
.. _`bioconductor-ddpcrclust/tags`: https://quay.io/repository/biocontainers/bioconductor-ddpcrclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ddpcrclust";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ddpcrclust/README.html