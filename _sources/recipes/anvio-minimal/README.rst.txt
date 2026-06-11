:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anvio-minimal'
.. highlight: bash

anvio-minimal
=============

.. conda:recipe:: anvio-minimal
   :replaces_section_title:
   :noindex:

   An interactive analysis and visualization platform for omics data

   :homepage: https://merenlab.org/software/anvio/
   :documentation: https://anvio.org/learn/
   
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal/meta.yaml>`_
   :links: biotools: :biotools:`anvio`, doi: :doi:`10.1038/s41564-020-00834-3`

   


.. conda:package:: anvio-minimal

   |downloads_anvio-minimal| |docker_anvio-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>9-0</code>,  <code>8-0</code>,  <code>7.1-0</code>,  <code>7-0</code>,  <code>6.2-1</code>,  <code>6.2-0</code>,  <code>6.1-1</code>,  <code>6.1-0</code>,  <code>6-0</code>,  </span></summary>
      

      ``9-0``,  ``8-0``,  ``7.1-0``,  ``7-0``,  ``6.2-1``,  ``6.2-0``,  ``6.1-1``,  ``6.1-0``,  ``6-0``,  ``5.5.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-1``,  ``5.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bottle: 
   :depends on colored: 
   :depends on django: 
   :depends on ete3: 
   :depends on illumina-utils: 
   :depends on matplotlib-base: 
   :depends on mistune: 
   :depends on multiprocess: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: ``<=1.24``
   :depends on pandas: ``1.4.4``
   :depends on paste: 
   :depends on plotext: 
   :depends on psutil: 
   :depends on pulp: ``2.7.0``
   :depends on pyani: ``0.2.10``
   :depends on pymupdf: 
   :depends on pyrodigal-gv: 
   :depends on pysam: 
   :depends on python: ``3.10.*``
   :depends on reportlab: 
   :depends on requests: 
   :depends on rich-argparse: 
   :depends on scikit-learn: ``1.2.2``
   :depends on scipy: 
   :depends on six: 
   :depends on snakemake-minimal: ``5.10.0``
   :depends on sqlite: ``>=3.31.1``
   :depends on statsmodels: 
   :depends on tabulate: 
   :depends on tomli: ``2.2.1``

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

    pixi global install anvio-minimal

to add into an existing workspace instead, run::

    pixi add anvio-minimal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anvio-minimal

Alternatively, to install into a new environment, run::

    conda create -n envname anvio-minimal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anvio-minimal:<tag>

(see `anvio-minimal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_anvio-minimal| image:: https://img.shields.io/conda/dn/bioconda/anvio-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/anvio-minimal
   :alt:   (downloads)
.. |docker_anvio-minimal| image:: https://quay.io/repository/biocontainers/anvio-minimal/status
   :target: https://quay.io/repository/biocontainers/anvio-minimal
.. _`anvio-minimal/tags`: https://quay.io/repository/biocontainers/anvio-minimal?tab=tags


.. raw:: html

   <script>
      var package = "anvio-minimal";
      var versions = ["9","8","7.1","7","6.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_anvio-minimal"></div>
   <div style="width: 100%" id="platform_plot_anvio-minimal"></div>
   <div style="width: 100%" id="cdf_plot_anvio-minimal"></div>



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
         
            // Build cdf plot for anvio-minimal
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/anvio-minimal/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_anvio-minimal', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for anvio-minimal
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/anvio-minimal/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_anvio-minimal', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for anvio-minimal
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/anvio-minimal/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_anvio-minimal', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio-minimal/README.html