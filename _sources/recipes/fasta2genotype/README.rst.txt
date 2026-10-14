:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'fasta2genotype'
.. highlight: bash

fasta2genotype
==============

.. conda:recipe:: fasta2genotype
   :replaces_section_title:
   :noindex:

   Convert Stacks haplotype FASTA files into input for population\-genetic software.

   :homepage: https://github.com/paulmaier/fasta2genotype
   :documentation: https://github.com/paulmaier/fasta2genotype#readme
   
   :license: MIT / MIT
   :recipe: /`fasta2genotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta2genotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta2genotype/meta.yaml>`_
   :links: doi: :doi:`10.1111/evo.13868`

   fasta2genotype converts the per\-sample haplotype FASTA file written by the
   Stacks populations program \(Stacks 1 and 2\) into input files for
   population\-genetic software\, including Structure\, Genepop\, Arlequin\,
   migrate\-n\, G\-PhoCS\, PHYLIP\, TreeMix\, LFMM\, DIYABC\, BayeScan\, samBada and
   GenAlEx\, with optional quality filters.



.. conda:package:: fasta2genotype

   |downloads_fasta2genotype| |docker_fasta2genotype|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on python: ``>=3.9``

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

    pixi global install fasta2genotype

to add into an existing workspace instead, run::

    pixi add fasta2genotype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fasta2genotype

Alternatively, to install into a new environment, run::

    conda create -n envname fasta2genotype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fasta2genotype:<tag>

(see `fasta2genotype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fasta2genotype| image:: https://img.shields.io/conda/dn/bioconda/fasta2genotype.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta2genotype
   :alt:   (downloads)
.. |docker_fasta2genotype| image:: https://quay.io/repository/biocontainers/fasta2genotype/status
   :target: https://quay.io/repository/biocontainers/fasta2genotype
.. _`fasta2genotype/tags`: https://quay.io/repository/biocontainers/fasta2genotype?tab=tags


.. raw:: html

   <script>
      var package = "fasta2genotype";
      var versions = ["2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fasta2genotype"></div>
   <div style="width: 100%" id="platform_plot_fasta2genotype"></div>
   <div style="width: 100%" id="cdf_plot_fasta2genotype"></div>



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
         
            // Build cdf plot for fasta2genotype
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fasta2genotype/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fasta2genotype', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fasta2genotype
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fasta2genotype/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fasta2genotype', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fasta2genotype
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fasta2genotype/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fasta2genotype', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta2genotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta2genotype/README.html