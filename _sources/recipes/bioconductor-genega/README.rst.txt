:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genega'
.. highlight: bash

bioconductor-genega
===================

.. conda:recipe:: bioconductor-genega
   :replaces_section_title:
   :noindex:

   Design gene based on both mRNA secondary structure and codon usage bias using Genetic algorithm

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeneGA.html
   :license: GPL version 2
   :recipe: /`bioconductor-genega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genega/meta.yaml>`_

   R based Genetic algorithm for gene expression optimization by considering both mRNA secondary structure and codon usage bias\, GeneGA includes the information of highly expressed genes of almost 200 genomes. Meanwhile\, Vienna RNA Package is needed to ensure GeneGA to function properly.


.. conda:package:: bioconductor-genega

   |downloads_bioconductor-genega| |docker_bioconductor-genega|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hash: 
   :depends on r-seqinr: 

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

    pixi global install bioconductor-genega

to add into an existing workspace instead, run::

    pixi add bioconductor-genega

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genega

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genega

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genega:<tag>

(see `bioconductor-genega/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genega| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genega.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genega
   :alt:   (downloads)
.. |docker_bioconductor-genega| image:: https://quay.io/repository/biocontainers/bioconductor-genega/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genega
.. _`bioconductor-genega/tags`: https://quay.io/repository/biocontainers/bioconductor-genega?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genega";
        var versions = ["1.60.0","1.56.0","1.52.0","1.48.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genega/README.html