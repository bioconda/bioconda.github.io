:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiime'
.. highlight: bash

qiime
=====

.. conda:recipe:: qiime/1.9.1
   :replaces_section_title:
   :noindex:

   Quantitative Insights Into Microbial Ecology

   :homepage: http://www.qiime.org
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`qiime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime>`_/`1.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1/meta.yaml>`_
   :links: biotools: :biotools:`qiime`, doi: :doi:`10.1038/nmeth.f.303`

   


.. conda:package:: qiime

   |downloads_qiime| |docker_qiime|

   :versions:
      
      

      ``1.9.1-3``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.8.0-1``,  ``1.8.0-0``

      

   
   :depends on biom-format: ``>=2.1.4,<2.2.0``
   :depends on burrito: ``>=0.9.1,<1.0.0``
   :depends on burrito-fillings: ``>=0.1.1,<0.2.0``
   :depends on cogent: ``1.5.3``
   :depends on emperor: ``>=0.9.51,<1.0.0``
   :depends on gdata: 
   :depends on matplotlib-base: 
   :depends on natsort: ``<5.0.0``
   :depends on numpy: 
   :depends on pandas: ``>=0.13.1``
   :depends on pynast: ``1.2.2``
   :depends on python: ``<3``
   :depends on qcli: ``>=0.1.1,<0.2.0``
   :depends on qiime-default-reference: ``>=0.1.2,<0.2.0``
   :depends on scikit-bio: ``>=0.2.3,<0.3.0``
   :depends on scipy: ``>=0.14.0``
   :depends on xorg-libsm: 
   :depends on xorg-libxau: 
   :depends on xorg-libxdmcp: 
   :depends on xorg-libxext: 
   :depends on xorg-libxrender: 
   :depends on xz: 

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

    pixi global install qiime

to add into an existing workspace instead, run::

    pixi add qiime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qiime

Alternatively, to install into a new environment, run::

    conda create -n envname qiime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qiime:<tag>

(see `qiime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qiime| image:: https://img.shields.io/conda/dn/bioconda/qiime.svg?style=flat
   :target: https://anaconda.org/bioconda/qiime
   :alt:   (downloads)
.. |docker_qiime| image:: https://quay.io/repository/biocontainers/qiime/status
   :target: https://quay.io/repository/biocontainers/qiime
.. _`qiime/tags`: https://quay.io/repository/biocontainers/qiime?tab=tags


.. raw:: html

   <script>
      var package = "qiime";
      var versions = ["1.9.1","1.9.1","1.9.1","1.8.0","1.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_qiime"></div>
   <div style="width: 100%" id="platform_plot_qiime"></div>
   <div style="width: 100%" id="cdf_plot_qiime"></div>



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
         
            // Build cdf plot for qiime
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/qiime/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_qiime', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for qiime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/qiime/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_qiime', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for qiime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/qiime/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_qiime', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime/README.html