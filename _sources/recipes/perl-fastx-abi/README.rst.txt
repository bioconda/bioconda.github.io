:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-abi'
.. highlight: bash

perl-fastx-abi
==============

.. conda:recipe:: perl-fastx-abi
   :replaces_section_title:
   :noindex:

   FASTX\:\:Abi \- Read Sanger trace file \(.ab1 chromatograms\) in FASTQ format. For traces called with hetero option\, the ambiguities will be split into two sequences to allow usage from NGS tools that usually do not understand IUPAC ambiguities. 

   :homepage: https://github.com/telatin/FASTX-Abi
   :documentation: https://metacpan.org/pod/FASTX::Abi
   
   :license: MIT
   :recipe: /`perl-fastx-abi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi/meta.yaml>`_

   This module reads a Sanger trace \(chromatogram\). If the chromatogram was saved in \"hetero\" mode\, that is allowing IUPAC
   ambiguities in the basecalling\, the module will return two \(unphased\) sequences in standard \"ACGT\" alphabet.


.. conda:package:: perl-fastx-abi

   |downloads_perl-fastx-abi| |docker_perl-fastx-abi|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.11-1``,  ``0.11-0``,  ``0.08-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-trace-abif: 
   :depends on perl-carp: 

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

    pixi global install perl-fastx-abi

to add into an existing workspace instead, run::

    pixi add perl-fastx-abi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-fastx-abi

Alternatively, to install into a new environment, run::

    conda create -n envname perl-fastx-abi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-fastx-abi:<tag>

(see `perl-fastx-abi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-fastx-abi| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-abi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-abi
   :alt:   (downloads)
.. |docker_perl-fastx-abi| image:: https://quay.io/repository/biocontainers/perl-fastx-abi/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-abi
.. _`perl-fastx-abi/tags`: https://quay.io/repository/biocontainers/perl-fastx-abi?tab=tags


.. raw:: html

   <script>
      var package = "perl-fastx-abi";
      var versions = ["1.0.1","1.0.1","1.0.0","0.11","0.11"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-fastx-abi"></div>
   <div style="width: 100%" id="platform_plot_perl-fastx-abi"></div>
   <div style="width: 100%" id="cdf_plot_perl-fastx-abi"></div>



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
         
            // Build cdf plot for perl-fastx-abi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-fastx-abi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-fastx-abi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-fastx-abi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-fastx-abi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-fastx-abi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-fastx-abi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-fastx-abi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-fastx-abi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-abi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-abi/README.html