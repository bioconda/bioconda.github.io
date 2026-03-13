:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastani'
.. highlight: bash

fastani
=======

.. conda:recipe:: fastani
   :replaces_section_title:
   :noindex:

   FastANI is developed for fast alignment\-free computation of whole\-genome Average Nucleotide Identity \(ANI\).

   :homepage: https://github.com/ParBLiSS/FastANI
   :documentation: https://github.com/ParBLiSS/FastANI/blob/v1.34/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`fastani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastani/meta.yaml>`_
   :links: biotools: :biotools:`fastani`, usegalaxy-eu: :usegalaxy-eu:`fastani`, doi: :doi:`10.1038/s41467-018-07641-9`

   


.. conda:package:: fastani

   |downloads_fastani| |docker_fastani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34-7</code>,  <code>1.34-6</code>,  <code>1.34-5</code>,  <code>1.34-4</code>,  <code>1.34-3</code>,  <code>1.34-2</code>,  <code>1.34-1</code>,  <code>1.34-0</code>,  <code>1.33-3</code>,  </span></summary>
      

      ``1.34-7``,  ``1.34-6``,  ``1.34-5``,  ``1.34-4``,  ``1.34-3``,  ``1.34-2``,  ``1.34-1``,  ``1.34-0``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on gsl: ``>=2.8,<2.9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install fastani

to add into an existing workspace instead, run::

    pixi add fastani

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastani

Alternatively, to install into a new environment, run::

    conda create -n envname fastani

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastani:<tag>

(see `fastani/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastani| image:: https://img.shields.io/conda/dn/bioconda/fastani.svg?style=flat
   :target: https://anaconda.org/bioconda/fastani
   :alt:   (downloads)
.. |docker_fastani| image:: https://quay.io/repository/biocontainers/fastani/status
   :target: https://quay.io/repository/biocontainers/fastani
.. _`fastani/tags`: https://quay.io/repository/biocontainers/fastani?tab=tags


.. raw:: html

    <script>
        var package = "fastani";
        var versions = ["1.34","1.34","1.34","1.34","1.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastani/README.html