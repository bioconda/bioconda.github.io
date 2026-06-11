:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knock-knock'
.. highlight: bash

knock-knock
===========

.. conda:recipe:: knock-knock
   :replaces_section_title:
   :noindex:

   toolkit for analyzing CRISPR knock\-in experiments

   :homepage: https://github.com/jeffhussmann/knock-knock
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`knock-knock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock/meta.yaml>`_

   


.. conda:package:: knock-knock

   |downloads_knock-knock| |docker_knock-knock|

   :versions:
      
      

      ``0.8.2-0``,  ``0.8.0-0``,  ``0.4.2-0``,  ``0.2.1-0``

      

   
   :depends on anndata: 
   :depends on biopython: ``>=1.86``
   :depends on blast: ``>=2.7.1``
   :depends on bokeh: ``>=2.4.2``
   :depends on h5py: ``>=3.1.0``
   :depends on hits: ``>=0.5.1``
   :depends on ipywidgets: ``>=7.1.2``
   :depends on matplotlib-base: ``>=2.1.2``
   :depends on minimap2: ``>=2.16``
   :depends on nbconvert: ``>=6.0.7``
   :depends on nbformat: ``>=4.4.0``
   :depends on numpy: ``>=1.14.2``
   :depends on pandas: ``>=0.22.0``
   :depends on parallel: ``>=20190522``
   :depends on pillow: ``>=5.0.0``
   :depends on pysam: ``>=0.14``
   :depends on pytables: 
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=3.12``
   :depends on samtools: ``>=1.9``
   :depends on scipy: ``>=1.16.2``
   :depends on star: ``>=2.7.1``
   :depends on tqdm: ``>=4.31.1``
   :depends on viennarna: ``>=2.6.4``

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

    pixi global install knock-knock

to add into an existing workspace instead, run::

    pixi add knock-knock

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install knock-knock

Alternatively, to install into a new environment, run::

    conda create -n envname knock-knock

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/knock-knock:<tag>

(see `knock-knock/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_knock-knock| image:: https://img.shields.io/conda/dn/bioconda/knock-knock.svg?style=flat
   :target: https://anaconda.org/bioconda/knock-knock
   :alt:   (downloads)
.. |docker_knock-knock| image:: https://quay.io/repository/biocontainers/knock-knock/status
   :target: https://quay.io/repository/biocontainers/knock-knock
.. _`knock-knock/tags`: https://quay.io/repository/biocontainers/knock-knock?tab=tags


.. raw:: html

   <script>
      var package = "knock-knock";
      var versions = ["0.8.2","0.8.0","0.4.2","0.2.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_knock-knock"></div>
   <div style="width: 100%" id="platform_plot_knock-knock"></div>
   <div style="width: 100%" id="cdf_plot_knock-knock"></div>



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
         
            // Build cdf plot for knock-knock
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/knock-knock/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_knock-knock', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for knock-knock
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/knock-knock/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_knock-knock', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for knock-knock
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/knock-knock/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_knock-knock', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knock-knock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knock-knock/README.html