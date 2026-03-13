:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frag_gene_scan_rs'
.. highlight: bash

frag_gene_scan_rs
=================

.. conda:recipe:: frag_gene_scan_rs
   :replaces_section_title:
   :noindex:

   Rust implementation of the gene prediction model for short and error\-prone reads

   :homepage: https://github.com/unipept/FragGeneScanRs
   :license: GPL-3.0-or-later
   :recipe: /`frag_gene_scan_rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frag_gene_scan_rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frag_gene_scan_rs/meta.yaml>`_

   


.. conda:package:: frag_gene_scan_rs

   |downloads_frag_gene_scan_rs| |docker_frag_gene_scan_rs|

   :versions:
      
      

      ``1.1.0-0``

      

   

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

    pixi global install frag_gene_scan_rs

to add into an existing workspace instead, run::

    pixi add frag_gene_scan_rs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install frag_gene_scan_rs

Alternatively, to install into a new environment, run::

    conda create -n envname frag_gene_scan_rs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/frag_gene_scan_rs:<tag>

(see `frag_gene_scan_rs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_frag_gene_scan_rs| image:: https://img.shields.io/conda/dn/bioconda/frag_gene_scan_rs.svg?style=flat
   :target: https://anaconda.org/bioconda/frag_gene_scan_rs
   :alt:   (downloads)
.. |docker_frag_gene_scan_rs| image:: https://quay.io/repository/biocontainers/frag_gene_scan_rs/status
   :target: https://quay.io/repository/biocontainers/frag_gene_scan_rs
.. _`frag_gene_scan_rs/tags`: https://quay.io/repository/biocontainers/frag_gene_scan_rs?tab=tags


.. raw:: html

    <script>
        var package = "frag_gene_scan_rs";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frag_gene_scan_rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frag_gene_scan_rs/README.html