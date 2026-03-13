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
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-arules: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-igraph: 
   :depends on r-shiny: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-coregnet

to add into an existing workspace instead, run::

    pixi add bioconductor-coregnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-coregnet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-coregnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-coregnet:<tag>

(see `bioconductor-coregnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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