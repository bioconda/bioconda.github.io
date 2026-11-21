:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'magicc'
.. highlight: bash

magicc
======

.. conda:recipe:: magicc
   :replaces_section_title:
   :noindex:

   Genome quality assessment from single\-copy core\-gene k\-mer profiles.

   :homepage: https://github.com/renmaotian/magicc
   :documentation: https://github.com/renmaotian/magicc#readme
   
   :license: MIT / MIT
   :recipe: /`magicc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicc/meta.yaml>`_

   MAGICC estimates completeness and contamination of bacterial and archaeal
   draft genomes and metagenome\-assembled genomes \(MAGs\) directly from
   nucleotide FASTA. It counts a fixed set of 9\,249 canonical 9\-mers derived
   from single\-copy core genes and feeds them to a small neural network
   exported to ONNX\, so inference requires no gene calling\, no HMM search and
   no reference database at run time.

   Input may be a directory\, a single FASTA file\, or a text file listing genome
   paths \(\-\-input\-list\)\; plain and gzip\-compressed FASTA are both accepted.

   NOTE\: on first use MAGICC downloads its \~170 MB ONNX model to \~\/.magicc\,
   from the immutable GitHub release asset for this exact version\, and
   verifies its SHA256 before use \(and on every subsequent run\). For fully
   offline operation\, place the file at \~\/.magicc\/magicc\_v5.onnx yourself or
   point \-\-model at a pre\-staged copy.



.. conda:package:: magicc

   |downloads_magicc| |docker_magicc|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends on h5py: ``>=3.0``
   :depends on numba: ``>=0.53``
   :depends on numpy: ``>=1.20``
   :depends on onnxruntime: ``>=1.10``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.7``

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

    pixi global install magicc

to add into an existing workspace instead, run::

    pixi add magicc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magicc

Alternatively, to install into a new environment, run::

    conda create -n envname magicc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magicc:<tag>

(see `magicc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magicc| image:: https://img.shields.io/conda/dn/bioconda/magicc.svg?style=flat
   :target: https://anaconda.org/bioconda/magicc
   :alt:   (downloads)
.. |docker_magicc| image:: https://quay.io/repository/biocontainers/magicc/status
   :target: https://quay.io/repository/biocontainers/magicc
.. _`magicc/tags`: https://quay.io/repository/biocontainers/magicc?tab=tags


.. raw:: html

   <script>
      var package = "magicc";
      var versions = ["0.3.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_magicc"></div>
   <div style="width: 100%" id="platform_plot_magicc"></div>
   <div style="width: 100%" id="cdf_plot_magicc"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for magicc
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicc/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_magicc', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for magicc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicc/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_magicc', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for magicc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/magicc/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_magicc', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magicc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magicc/README.html