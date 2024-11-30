:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregnet'
.. highlight: bash

bioconductor-coregnet
=====================

.. conda:recipe:: bioconductor-coregnet
   :replaces_section_title:
   :noindex:

   CoRegNet \: reconstruction and integrated analysis of co\-regulatory networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CoRegNet.html
   :license: GPL-3
   :recipe: /`bioconductor-coregnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregnet/meta.yaml>`_

   This package provides methods to identify active transcriptional programs. Methods and classes are provided to import or infer large scale co\-regulatory network from transcriptomic data. The specificity of the encoded networks is to model Transcription Factor cooperation. External regulation evidences \(TFBS\, ChIP\,...\) can be integrated to assess the inferred network and refine it if necessary. Transcriptional activity of the regulators in the network can be estimated using an measure of their influence in a given sample. Finally\, an interactive UI can be used to navigate through the network of cooperative regulators and to visualize their activity in a specific sample or subgroup sample. The proposed visualization tool can be used to integrate gene expression\, transcriptional activity\, copy number status\, sample classification and a transcriptional network including co\-regulation information.


.. conda:package:: bioconductor-coregnet

   |downloads_bioconductor-coregnet| |docker_bioconductor-coregnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-arules: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-shiny: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-coregnet

   and update with::

      mamba update bioconductor-coregnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-coregnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coregnet:<tag>

   (see `bioconductor-coregnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coregnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coregnet
   :alt:   (downloads)
.. |docker_bioconductor-coregnet| image:: https://quay.io/repository/biocontainers/bioconductor-coregnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregnet
.. _`bioconductor-coregnet/tags`: https://quay.io/repository/biocontainers/bioconductor-coregnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coregnet";
        var versions = ["1.38.0","1.38.0","1.36.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregnet/README.html