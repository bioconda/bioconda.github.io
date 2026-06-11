:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'privateer'
.. highlight: bash

privateer
=========

.. conda:recipe:: privateer
   :replaces_section_title:
   :noindex:

   The Swiss Army knife for carbohydrate structure validation\, refinement and analysis

   :homepage: https://github.com/glycojones/privateer
   :documentation: https://www.ccp4.ac.uk/html/privateer.html
   
   :license: LGPL / LGPL-3.0
   :recipe: /`privateer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/privateer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/privateer/meta.yaml>`_
   :links: doi: :doi:`10.1107/S2053230X24000359`, doi: :doi:`10.1038/nsmb.3115`, doi: :doi:`10.3762/bjoc.16.204`, doi: :doi:`10.1107/S2059798323003510`

   Privateer is a tool for carbohydrate structure validation\, re\-refinement and graphical analysis. It carries out automatic assignments of ring conformation \(IUPAC nomenclature\)\, anomeric form\, absolute configuration and comparison to reference values for validation. It computes omit mFo\-DFc maps and calculates a correlation coefficient between model and electron density. For structure refinement\, it is able to generate chemical dictionaries with unimodal torsion restraints which will help keep the lowest energy conformation. In terms of graphical analysis\, it will produce vector diagrams in SNFG nomenclature \(SVG format\)\, which are annotated using the validation information \(ring conformation\, anomeric form\, etc\).
   Privateer is implemented in C\+\+11 and Python3 \(via pybind11\)\, and produces Scheme and Python scripts for use with Coot \(https\:\/\/github.com\/pemsley\/coot\).



.. conda:package:: privateer

   |downloads_privateer| |docker_privateer|

   :versions:
      
      

      ``MKV-2``,  ``MKV-1``,  ``MKV-0``

      

   
   :depends on ccp4srs: ``>=2024.6.14``
   :depends on clipper: ``>=2.1.20180802,<3.0a0``
   :depends on gemmi: ``<0.6.0``
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on mmdb2: ``>=2.0.22,<3.0a0``
   :depends on numpy: ``1.26.*``
   :depends on prettytable: 
   :depends on pytest: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 
   :depends on seaborn: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install privateer

to add into an existing workspace instead, run::

    pixi add privateer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install privateer

Alternatively, to install into a new environment, run::

    conda create -n envname privateer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/privateer:<tag>

(see `privateer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_privateer| image:: https://img.shields.io/conda/dn/bioconda/privateer.svg?style=flat
   :target: https://anaconda.org/bioconda/privateer
   :alt:   (downloads)
.. |docker_privateer| image:: https://quay.io/repository/biocontainers/privateer/status
   :target: https://quay.io/repository/biocontainers/privateer
.. _`privateer/tags`: https://quay.io/repository/biocontainers/privateer?tab=tags


.. raw:: html

   <script>
      var package = "privateer";
      var versions = ["MKV","MKV","MKV"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_privateer"></div>
   <div style="width: 100%" id="platform_plot_privateer"></div>
   <div style="width: 100%" id="cdf_plot_privateer"></div>



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
         
            // Build cdf plot for privateer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/privateer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_privateer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for privateer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/privateer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_privateer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for privateer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/privateer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_privateer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/privateer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/privateer/README.html