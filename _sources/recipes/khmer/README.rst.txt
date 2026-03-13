:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'khmer'
.. highlight: bash

khmer
=====

.. conda:recipe:: khmer
   :replaces_section_title:
   :noindex:

   khmer k\-mer counting library.

   :homepage: https://github.com/dib-lab/khmer
   :documentation: https://khmer.readthedocs.io
   
   :license: BSD / BSD-3-License
   :recipe: /`khmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khmer/meta.yaml>`_
   :links: biotools: :biotools:`khmer`, doi: :doi:`10.12688/f1000research.6924.1`, usegalaxy-eu: :usegalaxy-eu:`khmer_filter_abundance`, usegalaxy-eu: :usegalaxy-eu:`khmer_filter_below_abundance_cutoff`, usegalaxy-eu: :usegalaxy-eu:`khmer_extract_partitions`, usegalaxy-eu: :usegalaxy-eu:`khmer_abundance_distribution`, usegalaxy-eu: :usegalaxy-eu:`khmer_count_median`, usegalaxy-eu: :usegalaxy-eu:`khmer_partition`, usegalaxy-eu: :usegalaxy-eu:`khmer_normalize_by_median`, usegalaxy-eu: :usegalaxy-eu:`khmer_abundance_distribution_single`

   


.. conda:package:: khmer

   |downloads_khmer| |docker_khmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0a3-8</code>,  <code>3.0.0a3-7</code>,  <code>3.0.0a3-6</code>,  <code>3.0.0a3-3</code>,  <code>3.0.0a3-2</code>,  <code>3.0.0a3-1</code>,  <code>3.0.0a3-0</code>,  <code>3.0.0a2-1</code>,  <code>3.0.0a2-0</code>,  </span></summary>
      

      ``3.0.0a3-8``,  ``3.0.0a3-7``,  ``3.0.0a3-6``,  ``3.0.0a3-3``,  ``3.0.0a3-2``,  ``3.0.0a3-1``,  ``3.0.0a3-0``,  ``3.0.0a2-1``,  ``3.0.0a2-0``,  ``3.0.0a1-0``,  ``2.1.2-0``,  ``2.1-0``,  ``2.1rc1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libgomp: 
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on screed: ``>=1.0``

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

    pixi global install khmer

to add into an existing workspace instead, run::

    pixi add khmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install khmer

Alternatively, to install into a new environment, run::

    conda create -n envname khmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/khmer:<tag>

(see `khmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_khmer| image:: https://img.shields.io/conda/dn/bioconda/khmer.svg?style=flat
   :target: https://anaconda.org/bioconda/khmer
   :alt:   (downloads)
.. |docker_khmer| image:: https://quay.io/repository/biocontainers/khmer/status
   :target: https://quay.io/repository/biocontainers/khmer
.. _`khmer/tags`: https://quay.io/repository/biocontainers/khmer?tab=tags


.. raw:: html

    <script>
        var package = "khmer";
        var versions = ["3.0.0a3","3.0.0a3","3.0.0a3","3.0.0a3","3.0.0a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/khmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/khmer/README.html