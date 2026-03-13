:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastp'
.. highlight: bash

fastp
=====

.. conda:recipe:: fastp
   :replaces_section_title:
   :noindex:

   A ultra\-fast FASTQ preprocessor with full features \(QC\/adapters\/trimming\/filtering\/splitting...\).

   :homepage: https://github.com/OpenGene/fastp
   :documentation: https://github.com/OpenGene/fastp/blob/v1.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`fastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp/meta.yaml>`_
   :links: biotools: :biotools:`fastp`, usegalaxy-eu: :usegalaxy-eu:`fastp`, doi: :doi:`10.1002/imt2.107`

   


.. conda:package:: fastp

   |downloads_fastp| |docker_fastp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.26.0-0</code>,  <code>0.25.0-0</code>,  <code>0.24.3-0</code>,  <code>0.24.2-0</code>,  <code>0.24.1-0</code>,  <code>0.24.0-1</code>,  </span></summary>
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.3-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.4-5``,  ``0.23.4-4``,  ``0.23.4-3``,  ``0.23.4-2``,  ``0.23.4-1``,  ``0.23.4-0``,  ``0.23.3-0``,  ``0.23.2-5``,  ``0.23.2-4``,  ``0.23.2-3``,  ``0.23.2-2``,  ``0.23.2-1``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.19.7-0``,  ``0.19.6-0``,  ``0.19.5-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.18.0-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.14.1-0``,  ``0.13.1-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-1``,  ``0.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on isa-l: ``>=2.31.1,<3.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install fastp

to add into an existing workspace instead, run::

    pixi add fastp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastp

Alternatively, to install into a new environment, run::

    conda create -n envname fastp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastp:<tag>

(see `fastp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastp| image:: https://img.shields.io/conda/dn/bioconda/fastp.svg?style=flat
   :target: https://anaconda.org/bioconda/fastp
   :alt:   (downloads)
.. |docker_fastp| image:: https://quay.io/repository/biocontainers/fastp/status
   :target: https://quay.io/repository/biocontainers/fastp
.. _`fastp/tags`: https://quay.io/repository/biocontainers/fastp?tab=tags


.. raw:: html

    <script>
        var package = "fastp";
        var versions = ["1.1.0","1.0.1","1.0.0","0.26.0","0.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastp/README.html