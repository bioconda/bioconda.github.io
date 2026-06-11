:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sneakernet-qc'
.. highlight: bash

sneakernet-qc
=============

.. conda:recipe:: sneakernet-qc
   :replaces_section_title:
   :noindex:

   A QC pipeline for raw reads

   :homepage: https://github.com/lskatz/sneakernet
   :license: MIT
   :recipe: /`sneakernet-qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneakernet-qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneakernet-qc/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02334`

   


.. conda:package:: sneakernet-qc

   |downloads_sneakernet-qc| |docker_sneakernet-qc|

   :versions:
      
      

      ``0.27.2-0``,  ``0.27.0-1``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.0-0``

      

   
   :depends on blast: 
   :depends on bowtie2: 
   :depends on chewbbaca: 
   :depends on colorid_bv: 
   :depends on fastqc: 
   :depends on flash: 
   :depends on kalamari: 
   :depends on kma: ``>=1.4``
   :depends on kmc: 
   :depends on kraken: ``>=1,<2``
   :depends on krona: 
   :depends on lighter: 
   :depends on make: 
   :depends on mash: ``>=2``
   :depends on megahit: 
   :depends on mlst: 
   :depends on multiqc: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-bioperl: 
   :depends on perl-config-simple: 
   :depends on perl-file-slurp: 
   :depends on perl-gd: 
   :depends on perl-gdgraph: 
   :depends on perl-list-moreutils: 
   :depends on perl-moo: 
   :depends on perl-statistics-descriptive: 
   :depends on perl-text-levenshtein: ``>=0.15``
   :depends on pilon: 
   :depends on prodigal: 
   :depends on python: ``>=3.7``
   :depends on quast: 
   :depends on salmid: 
   :depends on samclip: 
   :depends on seqtk: 
   :depends on shovill: 
   :depends on skesa: ``>=2.4``
   :depends on spades: 
   :depends on staramr: 
   :depends on trimmomatic: 

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

    pixi global install sneakernet-qc

to add into an existing workspace instead, run::

    pixi add sneakernet-qc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sneakernet-qc

Alternatively, to install into a new environment, run::

    conda create -n envname sneakernet-qc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sneakernet-qc:<tag>

(see `sneakernet-qc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sneakernet-qc| image:: https://img.shields.io/conda/dn/bioconda/sneakernet-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/sneakernet-qc
   :alt:   (downloads)
.. |docker_sneakernet-qc| image:: https://quay.io/repository/biocontainers/sneakernet-qc/status
   :target: https://quay.io/repository/biocontainers/sneakernet-qc
.. _`sneakernet-qc/tags`: https://quay.io/repository/biocontainers/sneakernet-qc?tab=tags


.. raw:: html

   <script>
      var package = "sneakernet-qc";
      var versions = ["0.27.2","0.27.0","0.27.0","0.26.0","0.25.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sneakernet-qc"></div>
   <div style="width: 100%" id="platform_plot_sneakernet-qc"></div>
   <div style="width: 100%" id="cdf_plot_sneakernet-qc"></div>



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
         
            // Build cdf plot for sneakernet-qc
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sneakernet-qc/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sneakernet-qc', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sneakernet-qc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sneakernet-qc/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sneakernet-qc', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sneakernet-qc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sneakernet-qc/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sneakernet-qc', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sneakernet-qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sneakernet-qc/README.html