:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parascopy'
.. highlight: bash

parascopy
=========

.. conda:recipe:: parascopy
   :replaces_section_title:
   :noindex:

   Calling paralog\-specific copy number and sequence variants in duplicated genes using short\-read whole\-genome sequencing.

   :homepage: https://github.com/tprodanov/parascopy
   :documentation: https://github.com/tprodanov/parascopy/blob/v1.19.0/README.md
   
   :license: MIT / MIT
   :recipe: /`parascopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parascopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parascopy/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-022-30930-3`, doi: :doi:`10.1093/bioinformatics/btad268`, biotools: :biotools:`parascopyvc`

   


.. conda:package:: parascopy

   |downloads_parascopy| |docker_parascopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.19.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.4-0</code>,  <code>1.17.2-1</code>,  <code>1.17.2-0</code>,  <code>1.17.1-1</code>,  <code>1.17.1-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.19.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.4-0``,  ``1.17.2-1``,  ``1.17.2-0``,  ``1.17.1-1``,  ``1.17.1-0``,  ``1.17.0-0``,  ``1.16.3-0``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.15.1-2``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.9-0``,  ``1.12.0-0``,  ``1.11.0-2``,  ``1.11.0-1``,  ``1.11.0-0``,  ``1.10.6-0``,  ``1.9.7-1``,  ``1.9.7-0``,  ``1.9.1-0``,  ``1.7.6-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.70``
   :depends on bwa: ``>=0.7``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on construct: ``>=2.10``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on intervaltree: ``>=3.0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.15``
   :depends on parasail-python: ``>=1.2``
   :depends on pysam: ``>=0.17``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``>=1.11``
   :depends on scipy: ``>=1.5``
   :depends on simpleeval: ``>=0.9``
   :depends on tabixpp: ``>=1.1.2,<1.1.3.0a0``

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

    pixi global install parascopy

to add into an existing workspace instead, run::

    pixi add parascopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parascopy

Alternatively, to install into a new environment, run::

    conda create -n envname parascopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parascopy:<tag>

(see `parascopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parascopy| image:: https://img.shields.io/conda/dn/bioconda/parascopy.svg?style=flat
   :target: https://anaconda.org/bioconda/parascopy
   :alt:   (downloads)
.. |docker_parascopy| image:: https://quay.io/repository/biocontainers/parascopy/status
   :target: https://quay.io/repository/biocontainers/parascopy
.. _`parascopy/tags`: https://quay.io/repository/biocontainers/parascopy?tab=tags


.. raw:: html

    <script>
        var package = "parascopy";
        var versions = ["1.19.0","1.18.0","1.18.0","1.17.4","1.17.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parascopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parascopy/README.html