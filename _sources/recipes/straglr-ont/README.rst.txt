:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straglr-ont'
.. highlight: bash

straglr-ont
===========

.. conda:recipe:: straglr-ont
   :replaces_section_title:
   :noindex:

   Clinical tandem repeat genotyping from long\-read alignments \(philres fork of straglr\).

   :homepage: https://github.com/philres/straglr
   :documentation: https://github.com/philres/straglr/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`straglr-ont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr-ont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straglr-ont/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02447-3`

   This is a fork of the original Straglr tool \(Chiu et al.\, Genome Biol 2021\)\, modified by philres\/ONT to focus on genotyping clinical TR expansions from long\-read BAM alignments using Minimap2. Differs from upstream bcgsc\/straglr in its clinical loci focus and VCF output.



.. conda:package:: straglr-ont

   |downloads_straglr-ont| |docker_straglr-ont|

   :versions:
      
      

      ``1.4.5-0``

      

   
   :depends on blast: ``>=2.5.0``
   :depends on matplotlib-base: ``>=3.0``
   :depends on natsort: 
   :depends on numpy: ``>=1.22.3``
   :depends on pandas: ``>=1.0``
   :depends on pathos: ``>=0.2.3``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.14.0``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.1``
   :depends on scipy: ``>=1.8.0``
   :depends on seaborn: ``>=0.11``
   :depends on trf: ``>=4.09.1``

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

    pixi global install straglr-ont

to add into an existing workspace instead, run::

    pixi add straglr-ont

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install straglr-ont

Alternatively, to install into a new environment, run::

    conda create -n envname straglr-ont

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/straglr-ont:<tag>

(see `straglr-ont/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_straglr-ont| image:: https://img.shields.io/conda/dn/bioconda/straglr-ont.svg?style=flat
   :target: https://anaconda.org/bioconda/straglr-ont
   :alt:   (downloads)
.. |docker_straglr-ont| image:: https://quay.io/repository/biocontainers/straglr-ont/status
   :target: https://quay.io/repository/biocontainers/straglr-ont
.. _`straglr-ont/tags`: https://quay.io/repository/biocontainers/straglr-ont?tab=tags


.. raw:: html

   <script>
      var package = "straglr-ont";
      var versions = ["1.4.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_straglr-ont"></div>
   <div style="width: 100%" id="platform_plot_straglr-ont"></div>
   <div style="width: 100%" id="cdf_plot_straglr-ont"></div>



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
         
            // Build cdf plot for straglr-ont
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/straglr-ont/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_straglr-ont', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for straglr-ont
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/straglr-ont/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_straglr-ont', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for straglr-ont
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/straglr-ont/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_straglr-ont', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straglr-ont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straglr-ont/README.html