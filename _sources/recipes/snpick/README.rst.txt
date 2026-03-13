:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpick'
.. highlight: bash

snpick
======

.. conda:recipe:: snpick
   :replaces_section_title:
   :noindex:

   A fast and memory\-efficient tool for SNP extraction from genomic alignments.

   :homepage: https://github.com/PathoGenOmics-Lab/snpick
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snpick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpick/meta.yaml>`_

   snpick is a Rust\-based tool designed for extracting SNPs efficiently from large genomic alignments\, with minimal RAM usage and high performance. It outputs variable sites in alignment files and provides VCF generation.



.. conda:package:: snpick

   |downloads_snpick| |docker_snpick|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on openssl: ``>=3.4.0,<4.0a0``
   :depends on xz: ``>=5.2.6,<6.0a0``
   :depends on zlib: ``>=1.2.13,<2.0a0``

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

    pixi global install snpick

to add into an existing workspace instead, run::

    pixi add snpick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snpick

Alternatively, to install into a new environment, run::

    conda create -n envname snpick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snpick:<tag>

(see `snpick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snpick| image:: https://img.shields.io/conda/dn/bioconda/snpick.svg?style=flat
   :target: https://anaconda.org/bioconda/snpick
   :alt:   (downloads)
.. |docker_snpick| image:: https://quay.io/repository/biocontainers/snpick/status
   :target: https://quay.io/repository/biocontainers/snpick
.. _`snpick/tags`: https://quay.io/repository/biocontainers/snpick?tab=tags


.. raw:: html

    <script>
        var package = "snpick";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpick/README.html