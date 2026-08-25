:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'txnova'
.. highlight: bash

txnova
======

.. conda:recipe:: txnova
   :replaces_section_title:
   :noindex:

   Experimental\-group\-specific novel intergenic transcripts from bulk RNA\-seq BAMs

   :homepage: https://github.com/leelieber2025/TxNova
   :documentation: https://txnova.readthedocs.io
   
   :license: Apache-2.0
   :recipe: /`txnova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/txnova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/txnova/meta.yaml>`_

   


.. conda:package:: txnova

   |downloads_txnova| |docker_txnova|

   :versions:
      
      

      ``0.1.9-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on jinja2: ``>=3.1``
   :depends on libclang13: ``>=22.1.8``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.3,<6.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on numpy: ``>=1.23,<3``
   :depends on pandas: ``>=2.0,<3``
   :depends on pydantic: ``>=2.5,<3``
   :depends on pydeseq2: ``>=0.4``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``
   :depends on pyyaml: ``>=6.0``
   :depends on rich: ``>=13.0``
   :depends on scipy: ``>=1.9``
   :depends on typer: ``>=0.12``

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

    pixi global install txnova

to add into an existing workspace instead, run::

    pixi add txnova

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install txnova

Alternatively, to install into a new environment, run::

    conda create -n envname txnova

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/txnova:<tag>

(see `txnova/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_txnova| image:: https://img.shields.io/conda/dn/bioconda/txnova.svg?style=flat
   :target: https://anaconda.org/bioconda/txnova
   :alt:   (downloads)
.. |docker_txnova| image:: https://quay.io/repository/biocontainers/txnova/status
   :target: https://quay.io/repository/biocontainers/txnova
.. _`txnova/tags`: https://quay.io/repository/biocontainers/txnova?tab=tags


.. raw:: html

   <script>
      var package = "txnova";
      var versions = ["0.1.9"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_txnova"></div>
   <div style="width: 100%" id="platform_plot_txnova"></div>
   <div style="width: 100%" id="cdf_plot_txnova"></div>



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
         
            // Build cdf plot for txnova
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/txnova/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_txnova', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for txnova
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/txnova/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_txnova', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for txnova
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/txnova/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_txnova', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
Input is a coordinate\-sorted\, indexed BAM from STAR or HISAT2.
Windows is not built\; use WSL2.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/txnova/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/txnova/README.html