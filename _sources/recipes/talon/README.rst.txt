:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'talon'
.. highlight: bash

talon
=====

.. conda:recipe:: talon
   :replaces_section_title:
   :noindex:

   TALON is a Python package for identifying and quantifying known and novel 
   genes\/isoforms in long\-read transcriptome data sets. TALON is 
   technology\-agnostic in that it works from mapped SAM files\, 
   allowing data from different sequencing platforms 
   \(i.e. PacBio and Oxford Nanopore\) to be analyzed side by side.

   :homepage: https://github.com/mortazavilab/TALON
   :license: MIT / MIT
   :recipe: /`talon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon/meta.yaml>`_

   


.. conda:package:: talon

   |downloads_talon| |docker_talon|

   :versions:
      
      

      ``6.0.1-0``,  ``6.0-0``,  ``5.0-0``,  ``v5.0-1``,  ``v5.0-0``

      

   
   :depends on bamread: ``>=0.0.11``
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pyfaidx: 
   :depends on pyranges: 
   :depends on pysam: ``>=0.15.4``
   :depends on python: ``>=3.6,<3.8``
   :depends on scanpy: 

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

    pixi global install talon

to add into an existing workspace instead, run::

    pixi add talon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install talon

Alternatively, to install into a new environment, run::

    conda create -n envname talon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/talon:<tag>

(see `talon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_talon| image:: https://img.shields.io/conda/dn/bioconda/talon.svg?style=flat
   :target: https://anaconda.org/bioconda/talon
   :alt:   (downloads)
.. |docker_talon| image:: https://quay.io/repository/biocontainers/talon/status
   :target: https://quay.io/repository/biocontainers/talon
.. _`talon/tags`: https://quay.io/repository/biocontainers/talon?tab=tags


.. raw:: html

    <script>
        var package = "talon";
        var versions = ["6.0.1","6.0","5.0","v5.0","v5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/talon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/talon/README.html