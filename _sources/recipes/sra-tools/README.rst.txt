:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sra-tools'
.. highlight: bash

sra-tools
=========

.. conda:recipe:: sra-tools
   :replaces_section_title:
   :noindex:

   The SRA Toolkit and SDK from NCBI.

   :homepage: https://github.com/ncbi/sra-tools
   :documentation: https://github.com/ncbi/sra-tools/wiki
   
   :license: Public Domain
   :recipe: /`sra-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-tools/meta.yaml>`_
   :links: biotools: :biotools:`sra-tools`

   \"The SRA Toolkit and SDK from NCBI is a collection of tools and libraries
   for using data in the INSDC Sequence Read Archives.\"



.. conda:package:: sra-tools

   |downloads_sra-tools| |docker_sra-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.1-2</code>,  <code>3.1.1-0</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.10-0</code>,  <code>3.0.9-0</code>,  </span></summary>
      

      ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-2``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.10-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-1``,  ``3.0.5-0``,  ``3.0.3-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.11.0-3``,  ``2.11.0-2``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``,  ``2.10.7-2``,  ``2.10.7-1``,  ``2.10.7-0``,  ``2.10.3-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.6-0``,  ``2.9.1_1-0``,  ``2.9.1-0``,  ``2.9.0-1``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ca-certificates: 
   :depends on curl: 
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on ncbi-vdb: ``>=3.2.1``
   :depends on ncbi-vdb: ``>=3.2.1,<4.0a0``
   :depends on ossuuid: 
   :depends on perl: 
   :depends on perl-uri: 
   :depends on perl-xml-libxml: 

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

    pixi global install sra-tools

to add into an existing workspace instead, run::

    pixi add sra-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sra-tools

Alternatively, to install into a new environment, run::

    conda create -n envname sra-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sra-tools:<tag>

(see `sra-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sra-tools| image:: https://img.shields.io/conda/dn/bioconda/sra-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/sra-tools
   :alt:   (downloads)
.. |docker_sra-tools| image:: https://quay.io/repository/biocontainers/sra-tools/status
   :target: https://quay.io/repository/biocontainers/sra-tools
.. _`sra-tools/tags`: https://quay.io/repository/biocontainers/sra-tools?tab=tags


.. raw:: html

    <script>
        var package = "sra-tools";
        var versions = ["3.2.1","3.2.1","3.2.0","3.1.1","3.1.1"];
    </script>





Notes
-----
After installation\, you should run the configuration tool\: .\/vdb\-config \-i. This tool will setup your download\/cache area for downloaded files and references.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sra-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sra-tools/README.html