:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rigel'
.. highlight: bash

rigel
=====

.. conda:recipe:: rigel
   :replaces_section_title:
   :noindex:

   Bayesian RNA\-seq transcript quantification with joint mRNA\, nRNA\, and gDNA deconvolution

   :homepage: https://github.com/mkiyer/rigel
   :documentation: https://github.com/mkiyer/rigel/blob/main/docs/MANUAL.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rigel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rigel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rigel/meta.yaml>`_

   Rigel is a Bayesian transcript quantification method for RNA\-seq data
   that jointly models three nucleic acid species\: mature mRNA\, nascent
   pre\-mRNA \(nRNA\)\, and genomic DNA contamination \(gDNA\). It uses a linked
   kinetic model coupling mRNA and nRNA through shared per\-transcript
   parameters\, and a hierarchical empirical Bayes framework for initialization.



.. conda:package:: rigel

   |downloads_rigel| |docker_rigel|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on libcurl: ``>=8.19.0,<9.0a0``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on numpy: ``>=1.23,<3``
   :depends on numpy: ``>=1.26``
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on pandas: ``>=2.1``
   :depends on pyarrow: ``>=14.0``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on pyyaml: ``>=6.0``
   :depends on scipy: ``>=1.11``

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

    pixi global install rigel

to add into an existing workspace instead, run::

    pixi add rigel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rigel

Alternatively, to install into a new environment, run::

    conda create -n envname rigel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rigel:<tag>

(see `rigel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rigel| image:: https://img.shields.io/conda/dn/bioconda/rigel.svg?style=flat
   :target: https://anaconda.org/bioconda/rigel
   :alt:   (downloads)
.. |docker_rigel| image:: https://quay.io/repository/biocontainers/rigel/status
   :target: https://quay.io/repository/biocontainers/rigel
.. _`rigel/tags`: https://quay.io/repository/biocontainers/rigel?tab=tags


.. raw:: html

    <script>
        var package = "rigel";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rigel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rigel/README.html