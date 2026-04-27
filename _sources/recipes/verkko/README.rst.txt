:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verkko'
.. highlight: bash

verkko
======

.. conda:recipe:: verkko
   :replaces_section_title:
   :noindex:

   A hybrid genome assembly pipeline developed for telomere\-to\-telomere assembly of accurate \(HiFi\, ONT Duplex\, ONT HERRO\) and long \(ONT UL\) reads.

   :homepage: https://github.com/marbl/verkko
   :documentation: https://github.com/marbl/verkko/blob/v2.3.2/README.md
   
   :license: CC0
   :recipe: /`verkko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verkko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verkko/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01662-6`, usegalaxy-eu: :usegalaxy-eu:`verkko`

   


.. conda:package:: verkko

   |downloads_verkko| |docker_verkko|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-1``,  ``2.3-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bamtools: ``>=2.5``
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on biopython: 
   :depends on bwa: ``>=0.7.17``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on findutils: ``>=4.6.0``
   :depends on graphaligner: ``>=1.0.19``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mashmap: ``>=3.0.6``
   :depends on minimap2: ``>=2.28``
   :depends on networkx: ``>=2.6.3,<=3.5``
   :depends on parasail-python: ``>=1.3.3``
   :depends on perl: ``>=5.6``
   :depends on pulp: ``<=2.7.0``
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on samtools: ``>=1.17``
   :depends on seqtk: 
   :depends on snakemake-minimal: ``>=7.8.0,<8.0``
   :depends on winnowmap: ``>=2.0``

   :additional platforms:
      

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

    pixi global install verkko

to add into an existing workspace instead, run::

    pixi add verkko

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install verkko

Alternatively, to install into a new environment, run::

    conda create -n envname verkko

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/verkko:<tag>

(see `verkko/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_verkko| image:: https://img.shields.io/conda/dn/bioconda/verkko.svg?style=flat
   :target: https://anaconda.org/bioconda/verkko
   :alt:   (downloads)
.. |docker_verkko| image:: https://quay.io/repository/biocontainers/verkko/status
   :target: https://quay.io/repository/biocontainers/verkko
.. _`verkko/tags`: https://quay.io/repository/biocontainers/verkko?tab=tags


.. raw:: html

    <script>
        var package = "verkko";
        var versions = ["2.3.2","2.3.1","2.3","2.3","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verkko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verkko/README.html