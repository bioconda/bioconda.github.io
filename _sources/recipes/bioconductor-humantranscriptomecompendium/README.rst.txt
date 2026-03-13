:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humantranscriptomecompendium'
.. highlight: bash

bioconductor-humantranscriptomecompendium
=========================================

.. conda:recipe:: bioconductor-humantranscriptomecompendium
   :replaces_section_title:
   :noindex:

   Tools to work with a Compendium of 181000 human transcriptome sequencing studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HumanTranscriptomeCompendium.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humantranscriptomecompendium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium/meta.yaml>`_

   Provide tools for working with a compendium of human transcriptome sequences \(originally htxcomp\).


.. conda:package:: bioconductor-humantranscriptomecompendium

   |downloads_bioconductor-humantranscriptomecompendium| |docker_bioconductor-humantranscriptomecompendium|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-ssrch: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-shiny: 

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

    pixi global install bioconductor-humantranscriptomecompendium

to add into an existing workspace instead, run::

    pixi add bioconductor-humantranscriptomecompendium

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-humantranscriptomecompendium

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-humantranscriptomecompendium

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-humantranscriptomecompendium:<tag>

(see `bioconductor-humantranscriptomecompendium/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-humantranscriptomecompendium| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humantranscriptomecompendium.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humantranscriptomecompendium
   :alt:   (downloads)
.. |docker_bioconductor-humantranscriptomecompendium| image:: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium
.. _`bioconductor-humantranscriptomecompendium/tags`: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humantranscriptomecompendium";
        var versions = ["1.17.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html