:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freebayes'
.. highlight: bash

freebayes
=========

.. conda:recipe:: freebayes
   :replaces_section_title:
   :noindex:

   Bayesian haplotype\-based polymorphism discovery and genotyping.

   :homepage: https://github.com/freebayes/freebayes
   :documentation: https://github.com/freebayes/freebayes/blob/v1.3.10/README.md
   
   :license: MIT / MIT
   :recipe: /`freebayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes/meta.yaml>`_
   :links: biotools: :biotools:`freebayes`, usegalaxy-eu: :usegalaxy-eu:`freebayes`, doi: :doi:`10.48550/arXiv.1207.3907`

   


.. conda:package:: freebayes

   |downloads_freebayes| |docker_freebayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.10-0</code>,  <code>1.3.9-3</code>,  <code>1.3.9-2</code>,  <code>1.3.9-1</code>,  <code>1.3.9-0</code>,  <code>1.3.8-2</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.7-2</code>,  </span></summary>
      

      ``1.3.10-0``,  ``1.3.9-3``,  ``1.3.9-2``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-2``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-2``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-7``,  ``1.3.6-6``,  ``1.3.6-5``,  ``1.3.6-4``,  ``1.3.6-3``,  ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-4``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``,  ``1.1.0.46-5``,  ``1.1.0.46-4``,  ``1.1.0.46-3``,  ``1.1.0.46-2``,  ``1.1.0.46-1``,  ``1.1.0.46-0``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2.29-2``,  ``1.0.2.29-1``,  ``1.0.2.29-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.21.26-0``,  ``0.9.21.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on parallel: 
   :depends on samtools: 
   :depends on seqlib: ``>=1.2.0,<2.0a0``
   :depends on vcflib: ``>=1.0.14,<2.0a0``

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

    pixi global install freebayes

to add into an existing workspace instead, run::

    pixi add freebayes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install freebayes

Alternatively, to install into a new environment, run::

    conda create -n envname freebayes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/freebayes:<tag>

(see `freebayes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_freebayes| image:: https://img.shields.io/conda/dn/bioconda/freebayes.svg?style=flat
   :target: https://anaconda.org/bioconda/freebayes
   :alt:   (downloads)
.. |docker_freebayes| image:: https://quay.io/repository/biocontainers/freebayes/status
   :target: https://quay.io/repository/biocontainers/freebayes
.. _`freebayes/tags`: https://quay.io/repository/biocontainers/freebayes?tab=tags


.. raw:: html

    <script>
        var package = "freebayes";
        var versions = ["1.3.10","1.3.9","1.3.9","1.3.9","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freebayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freebayes/README.html