:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliced_bam2gff'
.. highlight: bash

spliced_bam2gff
===============

.. conda:recipe:: spliced_bam2gff
   :replaces_section_title:
   :noindex:

   A tool to convert spliced BAM alignments into GFF2 format

   :homepage: https://github.com/nanoporetech/spliced_bam2gff
   :license: MOZILLA / MPL-2
   :recipe: /`spliced_bam2gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliced_bam2gff/meta.yaml>`_

   The spliced\_bam2gff tool converts BAM alignments\, produced by spliced aligners \(such as minimap2\, gmap\)\, into a GFF2 format.

   By default\, introns are created based on the N cigar feature. Alternatively\, if \-d \(i.e. for deletion\) is specified\, any deletions larger than the limit will be classified as an intron. The orientation of the GFF2 features is determined by the XS strand tag and SAM flags depending on the aligner.

   The tool supports splitting the output into loci and bundles of loci with a minimum number of features\, which enables easy parallelisation of downstream analyses. 



.. conda:package:: spliced_bam2gff

   |downloads_spliced_bam2gff| |docker_spliced_bam2gff|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   

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

    pixi global install spliced_bam2gff

to add into an existing workspace instead, run::

    pixi add spliced_bam2gff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spliced_bam2gff

Alternatively, to install into a new environment, run::

    conda create -n envname spliced_bam2gff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spliced_bam2gff:<tag>

(see `spliced_bam2gff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spliced_bam2gff| image:: https://img.shields.io/conda/dn/bioconda/spliced_bam2gff.svg?style=flat
   :target: https://anaconda.org/bioconda/spliced_bam2gff
   :alt:   (downloads)
.. |docker_spliced_bam2gff| image:: https://quay.io/repository/biocontainers/spliced_bam2gff/status
   :target: https://quay.io/repository/biocontainers/spliced_bam2gff
.. _`spliced_bam2gff/tags`: https://quay.io/repository/biocontainers/spliced_bam2gff?tab=tags


.. raw:: html

   <script>
      var package = "spliced_bam2gff";
      var versions = ["1.3","1.3","1.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_spliced_bam2gff"></div>
   <div style="width: 100%" id="platform_plot_spliced_bam2gff"></div>
   <div style="width: 100%" id="cdf_plot_spliced_bam2gff"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for spliced_bam2gff
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spliced_bam2gff/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_spliced_bam2gff', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for spliced_bam2gff
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spliced_bam2gff/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_spliced_bam2gff', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for spliced_bam2gff
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spliced_bam2gff/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_spliced_bam2gff', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliced_bam2gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliced_bam2gff/README.html