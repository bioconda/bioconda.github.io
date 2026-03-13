:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmon'
.. highlight: bash

salmon
======

.. conda:recipe:: salmon
   :replaces_section_title:
   :noindex:

   Highly\-accurate \& wicked fast transcript\-level quantification from RNA\-seq reads using selective alignment.

   :homepage: https://github.com/COMBINE-lab/salmon
   :documentation: https://combine-lab.github.io/salmon
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`salmon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon/meta.yaml>`_
   :links: biotools: :biotools:`salmon`, usegalaxy-eu: :usegalaxy-eu:`salmon`, usegalaxy-eu: :usegalaxy-eu:`salmonquantmerge`, usegalaxy-eu: :usegalaxy-eu:`alevin`, doi: :doi:`10.1038/nmeth.4197`

   


.. conda:package:: salmon

   |downloads_salmon| |docker_salmon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.4-0</code>,  <code>1.10.3-5</code>,  <code>1.10.3-4</code>,  <code>1.10.3-3</code>,  <code>1.10.3-2</code>,  <code>1.10.3-1</code>,  <code>1.10.3-0</code>,  <code>1.10.2-0</code>,  <code>1.10.1-2</code>,  </span></summary>
      

      ``1.11.4-0``,  ``1.10.3-5``,  ``1.10.3-4``,  ``1.10.3-3``,  ``1.10.3-2``,  ``1.10.3-1``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-2``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.15.0-0``,  ``0.14.2-1``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.12.0-1``,  ``0.11.3-2``,  ``0.11.3-1``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-3``,  ``0.10.2-1``,  ``0.10.1-1``,  ``0.10.0-1``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: ``>=1.85.0,<2.0a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on htslib: ``>=1.23,<2.0a0``
   :depends on icu: 
   :depends on libgcc: ``>=14``
   :depends on libiconv: ``>=1.18,<2.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on mimalloc: ``>=3.2.8,<3.2.9.0a0``
   :depends on tbb: ``>=2022.3.0``
   :depends on xz: 

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

    pixi global install salmon

to add into an existing workspace instead, run::

    pixi add salmon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install salmon

Alternatively, to install into a new environment, run::

    conda create -n envname salmon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/salmon:<tag>

(see `salmon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_salmon| image:: https://img.shields.io/conda/dn/bioconda/salmon.svg?style=flat
   :target: https://anaconda.org/bioconda/salmon
   :alt:   (downloads)
.. |docker_salmon| image:: https://quay.io/repository/biocontainers/salmon/status
   :target: https://quay.io/repository/biocontainers/salmon
.. _`salmon/tags`: https://quay.io/repository/biocontainers/salmon?tab=tags


.. raw:: html

    <script>
        var package = "salmon";
        var versions = ["1.11.4","1.10.3","1.10.3","1.10.3","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmon/README.html