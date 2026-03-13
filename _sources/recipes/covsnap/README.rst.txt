:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covsnap'
.. highlight: bash

covsnap
=======

.. conda:recipe:: covsnap
   :replaces_section_title:
   :noindex:

   Coverage inspector for targeted sequencing QC \(hg38\)

   :homepage: https://github.com/enes-ak/covsnap
   :documentation: https://github.com/enes-ak/covsnap/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`covsnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsnap/meta.yaml>`_

   covsnap computes per\-target and per\-exon depth metrics from
   BAM\/CRAM files\, producing a machine\-readable raw TSV and a
   human\-readable interpreted report with PASS\/FAIL classifications.
   Supports gene symbols\, genomic regions\, and BED files as input.
   Ships with a bundled GENCODE v44 hg38 gene index — no internet
   or GTF files required at runtime.



.. conda:package:: covsnap

   |downloads_covsnap| |docker_covsnap|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on htslib: ``>=1.17``
   :depends on numpy: ``>=1.24``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.9``
   :depends on samtools: ``>=1.17``
   :depends on tabix: 

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

    pixi global install covsnap

to add into an existing workspace instead, run::

    pixi add covsnap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install covsnap

Alternatively, to install into a new environment, run::

    conda create -n envname covsnap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/covsnap:<tag>

(see `covsnap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_covsnap| image:: https://img.shields.io/conda/dn/bioconda/covsnap.svg?style=flat
   :target: https://anaconda.org/bioconda/covsnap
   :alt:   (downloads)
.. |docker_covsnap| image:: https://quay.io/repository/biocontainers/covsnap/status
   :target: https://quay.io/repository/biocontainers/covsnap
.. _`covsnap/tags`: https://quay.io/repository/biocontainers/covsnap?tab=tags


.. raw:: html

    <script>
        var package = "covsnap";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covsnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covsnap/README.html