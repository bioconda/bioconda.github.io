:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacota'
.. highlight: bash

panacota
========

.. conda:recipe:: panacota
   :replaces_section_title:
   :noindex:

   Large scale comparative genomics tools\: annotate genomes\, do pangenome\, core\/persistent genome\, align core\/persistent families\, infer phylogenetic tree.

   :homepage: https://github.com/gem-pasteur/PanACoTA
   :documentation: https://aperrin.pages.pasteur.fr/pipeline_annotation/html-doc/
   
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`panacota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota/meta.yaml>`_

   


.. conda:package:: panacota

   |downloads_panacota| |docker_panacota|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1.2-0``

      

   
   :depends on biopython: ``>=1.60``
   :depends on colorlog: 
   :depends on fastme: 
   :depends on fasttree: ``>=2.1.10``
   :depends on iqtree: ``>=1.6.12``
   :depends on mafft: 
   :depends on mash: 
   :depends on matplotlib-base: ``>=2.0.0``
   :depends on mmseqs2: 
   :depends on ncbi-genome-download: ``>=0.3.0``
   :depends on numpy: ``>=1.11``
   :depends on prodigal: ``>=2.6.2``
   :depends on progressbar2: ``>=3.18.0``
   :depends on prokka: ``1.14.5``
   :depends on python: ``>=3.6``
   :depends on quicktree: 
   :depends on scipy: 
   :depends on termcolor: 

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

    pixi global install panacota

to add into an existing workspace instead, run::

    pixi add panacota

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panacota

Alternatively, to install into a new environment, run::

    conda create -n envname panacota

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panacota:<tag>

(see `panacota/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panacota| image:: https://img.shields.io/conda/dn/bioconda/panacota.svg?style=flat
   :target: https://anaconda.org/bioconda/panacota
   :alt:   (downloads)
.. |docker_panacota| image:: https://quay.io/repository/biocontainers/panacota/status
   :target: https://quay.io/repository/biocontainers/panacota
.. _`panacota/tags`: https://quay.io/repository/biocontainers/panacota?tab=tags


.. raw:: html

   <script>
      var package = "panacota";
      var versions = ["1.4.0","1.3.1","1.2.0","1.1.0","1.0.1.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_panacota"></div>
   <div style="width: 100%" id="platform_plot_panacota"></div>
   <div style="width: 100%" id="cdf_plot_panacota"></div>



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
         
            // Build cdf plot for panacota
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/panacota/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_panacota', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for panacota
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/panacota/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_panacota', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for panacota
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/panacota/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_panacota', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacota/README.html