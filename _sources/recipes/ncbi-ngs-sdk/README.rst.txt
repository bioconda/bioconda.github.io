:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-ngs-sdk'
.. highlight: bash

ncbi-ngs-sdk
============

.. conda:recipe:: ncbi-ngs-sdk
   :replaces_section_title:
   :noindex:

   NGS is a new\, domain\-specific API for accessing reads\, alignments and pileups produced from Next Generation Sequencing.

   :homepage: https://github.com/ncbi/ngs
   :license: Public Domain
   :recipe: /`ncbi-ngs-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-ngs-sdk/meta.yaml>`_

   


.. conda:package:: ncbi-ngs-sdk

   |downloads_ncbi-ngs-sdk| |docker_ncbi-ngs-sdk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-5</code>,  <code>3.0.1-4</code>,  <code>3.0.1-3</code>,  <code>3.0.1-2</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>2.11.2-1</code>,  <code>2.11.2-0</code>,  <code>2.11.1-0</code>,  </span></summary>
      

      ``3.0.1-5``,  ``3.0.1-4``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.11.2-1``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.9-1``,  ``2.10.9-0``,  ``2.10.4-1``,  ``2.10.4-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.3-0``,  ``2.9.1-0``,  ``2.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libiconv: ``>=1.17,<2.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libxml2: ``>=2.13.5,<3.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install ncbi-ngs-sdk

to add into an existing workspace instead, run::

    pixi add ncbi-ngs-sdk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-ngs-sdk

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-ngs-sdk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-ngs-sdk:<tag>

(see `ncbi-ngs-sdk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-ngs-sdk| image:: https://img.shields.io/conda/dn/bioconda/ncbi-ngs-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-ngs-sdk
   :alt:   (downloads)
.. |docker_ncbi-ngs-sdk| image:: https://quay.io/repository/biocontainers/ncbi-ngs-sdk/status
   :target: https://quay.io/repository/biocontainers/ncbi-ngs-sdk
.. _`ncbi-ngs-sdk/tags`: https://quay.io/repository/biocontainers/ncbi-ngs-sdk?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-ngs-sdk";
        var versions = ["3.0.1","3.0.1","3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-ngs-sdk/README.html