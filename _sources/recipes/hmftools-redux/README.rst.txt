:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-redux'
.. highlight: bash

hmftools-redux
==============

.. conda:recipe:: hmftools-redux
   :replaces_section_title:
   :noindex:

   Post\-processing read alignments to control sequencing errors and biases

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/redux
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-redux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-redux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-redux/meta.yaml>`_

   


.. conda:package:: hmftools-redux

   |downloads_hmftools-redux| |docker_hmftools-redux|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0_beta-6``,  ``1.0_beta-5``,  ``1.0_beta-4``,  ``1.0_beta-3``,  ``1.0_beta-2``,  ``1.0_beta-1``,  ``1.0_beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-variantannotation: 
   :depends on font-ttf-dejavu: 
   :depends on openjdk: ``>=8,<=21``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-tidyr: 
   :depends on samtools: ``>=1.14``
   :depends on xorg-libxt: 

   :additional platforms:
      

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

    pixi global install hmftools-redux

to add into an existing workspace instead, run::

    pixi add hmftools-redux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-redux

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-redux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-redux:<tag>

(see `hmftools-redux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-redux| image:: https://img.shields.io/conda/dn/bioconda/hmftools-redux.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-redux
   :alt:   (downloads)
.. |docker_hmftools-redux| image:: https://quay.io/repository/biocontainers/hmftools-redux/status
   :target: https://quay.io/repository/biocontainers/hmftools-redux
.. _`hmftools-redux/tags`: https://quay.io/repository/biocontainers/hmftools-redux?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-redux";
        var versions = ["1.2.3","1.2.3","1.2.2","1.2.1","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-redux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-redux/README.html