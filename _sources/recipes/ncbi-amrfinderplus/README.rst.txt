:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-amrfinderplus'
.. highlight: bash

ncbi-amrfinderplus
==================

.. conda:recipe:: ncbi-amrfinderplus
   :replaces_section_title:
   :noindex:

   AMRFinderPlus finds antimicrobial resistance and other genes in protein or nucleotide sequences.

   :homepage: https://github.com/ncbi/amr
   :documentation: https://github.com/ncbi/amr/wiki
   
   :license: Public Domain
   :recipe: /`ncbi-amrfinderplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amrfinderplus/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-021-91456-0`

   This software and the accompanying database are designed to
   find acquired antimicrobial resistance genes in bacterial protein or
   nucleotide sequences as well as known point mutations for several taxa. With
   AMRFinderPlus we have added select members of additional classes of genes
   such as virulence factors\, biocide\, heat\, acid\, and metal resistance genes.



.. conda:package:: ncbi-amrfinderplus

   |downloads_ncbi-amrfinderplus| |docker_ncbi-amrfinderplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.7-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-0</code>,  <code>4.0.23-0</code>,  <code>4.0.22-0</code>,  <code>4.0.19-0</code>,  <code>4.0.15-0</code>,  <code>4.0.3-1</code>,  <code>4.0.3-0</code>,  </span></summary>
      

      ``4.2.7-0``,  ``4.2.5-0``,  ``4.2.4-0``,  ``4.0.23-0``,  ``4.0.22-0``,  ``4.0.19-0``,  ``4.0.15-0``,  ``4.0.3-1``,  ``4.0.3-0``,  ``3.12.8-0``,  ``3.11.26-0``,  ``3.11.20-0``,  ``3.11.18-0``,  ``3.11.17-0``,  ``3.11.14-1``,  ``3.11.14-0``,  ``3.11.11-1``,  ``3.11.11-0``,  ``3.11.4-0``,  ``3.11.2-0``,  ``3.10.45-0``,  ``3.10.42-0``,  ``3.10.40-1``,  ``3.10.40-0``,  ``3.10.36-1``,  ``3.10.36-0``,  ``3.10.30-1``,  ``3.10.30-0``,  ``3.10.24-0``,  ``3.10.23-1``,  ``3.10.23-0``,  ``3.10.21-0``,  ``3.10.20-0``,  ``3.10.18-0``,  ``3.10.16-0``,  ``3.10.14-0``,  ``3.10.5-0``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.9.8-0``,  ``3.9.3-0``,  ``3.8.28-0``,  ``3.8.4-1``,  ``3.8.4-0``,  ``3.6.15-0``,  ``3.6.10-0``,  ``3.6.7-0``,  ``3.6.4-0``,  ``3.2.3-0``,  ``3.2.1-0``,  ``3.1.1b-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.9-0``,  ``3.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.9``
   :depends on curl: 
   :depends on hmmer: ``>=3.2``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install ncbi-amrfinderplus

to add into an existing workspace instead, run::

    pixi add ncbi-amrfinderplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-amrfinderplus

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-amrfinderplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-amrfinderplus:<tag>

(see `ncbi-amrfinderplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-amrfinderplus| image:: https://img.shields.io/conda/dn/bioconda/ncbi-amrfinderplus.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-amrfinderplus
   :alt:   (downloads)
.. |docker_ncbi-amrfinderplus| image:: https://quay.io/repository/biocontainers/ncbi-amrfinderplus/status
   :target: https://quay.io/repository/biocontainers/ncbi-amrfinderplus
.. _`ncbi-amrfinderplus/tags`: https://quay.io/repository/biocontainers/ncbi-amrfinderplus?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-amrfinderplus";
        var versions = ["4.2.7","4.2.5","4.2.4","4.0.23","4.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-amrfinderplus/README.html