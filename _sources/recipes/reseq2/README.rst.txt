:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reseq2'
.. highlight: bash

reseq2
======

.. conda:recipe:: reseq2
   :replaces_section_title:
   :noindex:

   Realistic Illumina paired\-end sequencing simulator.

   :homepage: https://github.com/berntpopp/ReSeq2
   :documentation: https://berntpopp.github.io/ReSeq2
   
   :license: MIT / MIT
   :recipe: /`reseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02265-7`

   ReSeq2 is a maintained continuation of ReSeq \(Schmeing \& Robinson\,
   Genome Biology 2021\). It learns error\, quality\, and coverage profiles
   from real Illumina paired\-end data and uses them to simulate synthetic
   reads with matching k\-mer spectra. Changes from upstream include C\+\+20
   migration\, modernized CMake build\, CI\/CD\, expanded test suite\, binary\/text
   profile format conversion\, and code quality tooling.



.. conda:package:: reseq2

   |downloads_reseq2| |docker_reseq2|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``

      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on nlopt: ``>=2.10.1,<2.11.0a0``

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

    pixi global install reseq2

to add into an existing workspace instead, run::

    pixi add reseq2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reseq2

Alternatively, to install into a new environment, run::

    conda create -n envname reseq2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reseq2:<tag>

(see `reseq2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reseq2| image:: https://img.shields.io/conda/dn/bioconda/reseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/reseq2
   :alt:   (downloads)
.. |docker_reseq2| image:: https://quay.io/repository/biocontainers/reseq2/status
   :target: https://quay.io/repository/biocontainers/reseq2
.. _`reseq2/tags`: https://quay.io/repository/biocontainers/reseq2?tab=tags


.. raw:: html

    <script>
        var package = "reseq2";
        var versions = ["2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reseq2/README.html