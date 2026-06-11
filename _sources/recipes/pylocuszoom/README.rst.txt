:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylocuszoom'
.. highlight: bash

pylocuszoom
===========

.. conda:recipe:: pylocuszoom
   :replaces_section_title:
   :noindex:

   Publication\-ready GWAS visualization library with regional association plots\, gene tracks\, eQTL\, PheWAS\, fine\-mapping\, and forest plots

   :homepage: https://github.com/michael-denyer/pylocuszoom
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pylocuszoom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylocuszoom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylocuszoom/meta.yaml>`_

   pyLocusZoom creates publication\-quality genetic association visualizations\:
   regional association plots with LD coloring and recombination overlays\,
   stacked multi\-GWAS comparisons\, eQTL overlays\, fine\-mapping\/SuSiE credible sets\,
   PheWAS \(phenome\-wide association\) plots\, and forest plots for meta\-analysis.
   Includes gene track visualization\, file loaders for common formats \(REGENIE\, BOLT\-LMM\,
   SAIGE\, GEMMA\, GTEx\, SuSiE\, FINEMAP\)\, and three backends\: matplotlib \(static\/publication\)\,
   plotly \(interactive\)\, and bokeh \(dashboards\).



.. conda:package:: pylocuszoom

   |downloads_pylocuszoom| |docker_pylocuszoom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: ``>=0.8``
   :depends on bokeh: ``>=3.8.2``
   :depends on colorcet: ``>=3.0.0``
   :depends on loguru: ``>=0.7.0``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.4.0``
   :depends on plotly: ``>=5.15.0``
   :depends on pydantic: ``>=2.0.0``
   :depends on pyliftover: ``>=0.4``
   :depends on python: ``>=3.10``
   :depends on python-kaleido: ``>=0.2.0``
   :depends on requests: ``>=2.25.0``
   :depends on tqdm: ``>=4.60.0``

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

    pixi global install pylocuszoom

to add into an existing workspace instead, run::

    pixi add pylocuszoom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pylocuszoom

Alternatively, to install into a new environment, run::

    conda create -n envname pylocuszoom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pylocuszoom:<tag>

(see `pylocuszoom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pylocuszoom| image:: https://img.shields.io/conda/dn/bioconda/pylocuszoom.svg?style=flat
   :target: https://anaconda.org/bioconda/pylocuszoom
   :alt:   (downloads)
.. |docker_pylocuszoom| image:: https://quay.io/repository/biocontainers/pylocuszoom/status
   :target: https://quay.io/repository/biocontainers/pylocuszoom
.. _`pylocuszoom/tags`: https://quay.io/repository/biocontainers/pylocuszoom?tab=tags


.. raw:: html

   <script>
      var package = "pylocuszoom";
      var versions = ["1.4.1","1.4.0","1.3.7","1.3.6","1.3.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pylocuszoom"></div>
   <div style="width: 100%" id="platform_plot_pylocuszoom"></div>
   <div style="width: 100%" id="cdf_plot_pylocuszoom"></div>



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
         
            // Build cdf plot for pylocuszoom
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pylocuszoom/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pylocuszoom', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pylocuszoom
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pylocuszoom/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pylocuszoom', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pylocuszoom
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pylocuszoom/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pylocuszoom', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylocuszoom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylocuszoom/README.html