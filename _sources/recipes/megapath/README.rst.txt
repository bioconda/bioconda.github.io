:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megapath'
.. highlight: bash

megapath
========

.. conda:recipe:: megapath
   :replaces_section_title:
   :noindex:

   MegaPath\: sensitive and rapid pathogen detection using metagenomic NGS data\; MegaPath\-Amplicon\: filtering module for metagenomic amplicon data

   :homepage: https://github.com/HKU-BAL/MegaPath
   :license: BSD-3-Clause
   :recipe: /`megapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath/meta.yaml>`_

   


.. conda:package:: megapath

   |downloads_megapath| |docker_megapath|

   :versions:
      
      

      ``2-4``,  ``2-3``,  ``2-2``,  ``2-1``,  ``2-0``,  ``1.0-0``

      

   
   :depends on bedtools: 
   :depends on bwa: ``0.7.12.*``
   :depends on gatk4: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on megahit: ``1.1.*``
   :depends on minimap2: 
   :depends on pandas: 
   :depends on parallel: ``20191122.*``
   :depends on pypy3.6: 
   :depends on pysam: ``0.16.0.1.*``
   :depends on python: ``3.6.*``
   :depends on samtools: ``1.10.*``
   :depends on seqtk: 

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

    pixi global install megapath

to add into an existing workspace instead, run::

    pixi add megapath

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install megapath

Alternatively, to install into a new environment, run::

    conda create -n envname megapath

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/megapath:<tag>

(see `megapath/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_megapath| image:: https://img.shields.io/conda/dn/bioconda/megapath.svg?style=flat
   :target: https://anaconda.org/bioconda/megapath
   :alt:   (downloads)
.. |docker_megapath| image:: https://quay.io/repository/biocontainers/megapath/status
   :target: https://quay.io/repository/biocontainers/megapath
.. _`megapath/tags`: https://quay.io/repository/biocontainers/megapath?tab=tags


.. raw:: html

    <script>
        var package = "megapath";
        var versions = ["2","2","2","2","2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megapath/README.html