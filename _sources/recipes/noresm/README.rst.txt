:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'noresm'
.. highlight: bash

noresm
======

.. conda:recipe:: noresm
   :replaces_section_title:
   :noindex:

   The Norwegian Earth System Model \(NorESM\) is a coupled climate model for simulating Earth’s climate system

   :homepage: https://github.com/NorESMhub/NorESM
   :documentation: https://noresm-docs.readthedocs.io/en/latest
   
   :license: BSD / BSD 3-Clause
   :recipe: /`noresm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noresm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noresm/meta.yaml>`_

   \"NorESM \(Norwegian Earth System Model\) is the Norwegian fully\-coupled\, 
   global climate model that provides state\-of\-the\-art computer simulations
   of the Earth\'s past\, present\, and future climate states. 
   When creating a case\, use \`espresso\` for the target machine.
   In addition\, the following environment variables need to be defined
   before creating the noresm case\:
   \`\`\`
   export NETCDF\_DIR\=\$\(nc\-config \-\-prefix\)
   export CIME\_MODEL\=cesm
   export CESM\_DATA\_ROOT\=\$HOME
   export CESM\_WORK\_ROOT\=\$HOME
   mkdir \-p \$CESM\_DATA\_ROOT\/inputdata
   \`\`\`
   \"



.. conda:package:: noresm

   |downloads_noresm| |docker_noresm|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends on binutils: 
   :depends on cmake: 
   :depends on gcc_linux-64: ``9.*``
   :depends on gfortran_linux-64: ``9.*``
   :depends on libgcc-ng: ``>=9.4.0``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=9.4.0``
   :depends on libiconv: ``>=1.16,<1.17.0a0``
   :depends on libxml2: ``>=2.9.12,<2.10.0a0``
   :depends on make: 
   :depends on mkl: 
   :depends on mpich: ``>=3.4.3,<4.0a0``
   :depends on netcdf-fortran: ``* *mpich*``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-xml-libxml: 
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on subversion: 
   :depends on tcsh: 
   :depends on wget: 

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

    pixi global install noresm

to add into an existing workspace instead, run::

    pixi add noresm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install noresm

Alternatively, to install into a new environment, run::

    conda create -n envname noresm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/noresm:<tag>

(see `noresm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_noresm| image:: https://img.shields.io/conda/dn/bioconda/noresm.svg?style=flat
   :target: https://anaconda.org/bioconda/noresm
   :alt:   (downloads)
.. |docker_noresm| image:: https://quay.io/repository/biocontainers/noresm/status
   :target: https://quay.io/repository/biocontainers/noresm
.. _`noresm/tags`: https://quay.io/repository/biocontainers/noresm?tab=tags


.. raw:: html

   <script>
      var package = "noresm";
      var versions = ["2.0.2","2.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_noresm"></div>
   <div style="width: 100%" id="platform_plot_noresm"></div>
   <div style="width: 100%" id="cdf_plot_noresm"></div>



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
         
            // Build cdf plot for noresm
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/noresm/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_noresm', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for noresm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/noresm/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_noresm', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for noresm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/noresm/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_noresm', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/noresm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/noresm/README.html