:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breseq'
.. highlight: bash

breseq
======

.. conda:recipe:: breseq
   :replaces_section_title:
   :noindex:

   A computational pipeline for finding mutations relative to a reference sequence in short\-read DNA re\-sequencing data.

   :homepage: https://github.com/barricklab/breseq
   :documentation: https://barricklab.org/twiki/pub/Lab/ToolsBacterialGenomeResequencing/documentation/
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`breseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq/meta.yaml>`_
   :links: biotools: :biotools:`breseq`, biotools: :biotools:`breseq_bam2aln`, biotools: :biotools:`breseq_bam2cov`, usegalaxy-eu: :usegalaxy-eu:`breseq`

   


.. conda:package:: breseq

   |downloads_breseq| |docker_breseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.39.0-3</code>,  <code>0.39.0-2</code>,  <code>0.39.0-1</code>,  <code>0.39.0-0</code>,  <code>0.38.3-0</code>,  <code>0.38.2-0</code>,  <code>0.38.1-1</code>,  <code>0.38.1-0</code>,  <code>0.37.1-1</code>,  </span></summary>
      

      ``0.39.0-3``,  ``0.39.0-2``,  ``0.39.0-1``,  ``0.39.0-0``,  ``0.38.3-0``,  ``0.38.2-0``,  ``0.38.1-1``,  ``0.38.1-0``,  ``0.37.1-1``,  ``0.37.1-0``,  ``0.37.0-0``,  ``0.36.1-1``,  ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.7-0``,  ``0.35.6-0``,  ``0.35.5-1``,  ``0.35.5-0``,  ``0.35.4-0``,  ``0.35.3-0``,  ``0.35.2-0``,  ``0.35.1-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.34.0-0``,  ``0.33.2-0``,  ``0.33.0-0``,  ``0.31.1-3``,  ``0.31.1-2``,  ``0.31.1-1``,  ``0.29.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie2: ``>=2.0.0,!=2.0.3,!=2.0.4,!=2.3.1``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: 
   :depends on r-cairo: 

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

    pixi global install breseq

to add into an existing workspace instead, run::

    pixi add breseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install breseq

Alternatively, to install into a new environment, run::

    conda create -n envname breseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/breseq:<tag>

(see `breseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_breseq| image:: https://img.shields.io/conda/dn/bioconda/breseq.svg?style=flat
   :target: https://anaconda.org/bioconda/breseq
   :alt:   (downloads)
.. |docker_breseq| image:: https://quay.io/repository/biocontainers/breseq/status
   :target: https://quay.io/repository/biocontainers/breseq
.. _`breseq/tags`: https://quay.io/repository/biocontainers/breseq?tab=tags


.. raw:: html

    <script>
        var package = "breseq";
        var versions = ["0.39.0","0.39.0","0.39.0","0.39.0","0.38.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breseq/README.html