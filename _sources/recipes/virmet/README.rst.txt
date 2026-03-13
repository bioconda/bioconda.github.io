:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virmet'
.. highlight: bash

virmet
======

.. conda:recipe:: virmet
   :replaces_section_title:
   :noindex:

   A pipeline for viral metagenomics

   :homepage: https://github.com/medvir/VirMet
   :documentation: https://medvir.github.io/VirMet/
   
   :license: MIT / MIT
   :recipe: /`virmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet/meta.yaml>`_

   VirMet is a Python package for viral metagenomics analysis in clinical applications.
   It includes command\-line utilities and depends on common bioinformatics tools.



.. conda:package:: virmet

   |downloads_virmet| |docker_virmet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.1-0</code>,  <code>v1.1.1-5</code>,  <code>v1.1.1-4</code>,  <code>v1.1.1-3</code>,  <code>v1.1.1-2</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.1-0``,  ``v1.1.1-5``,  ``v1.1.1-4``,  ``v1.1.1-3``,  ``v1.1.1-2``,  ``v1.1.1-1``,  ``v1.1.1-0``,  ``v1.1-2``,  ``v1.1-1``,  ``v1.1-0``,  ``v1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: ``>=2.3``
   :depends on bwa: 
   :depends on fastp: 
   :depends on htslib: 
   :depends on kraken2: ``>=2.1.6``
   :depends on ncbi-datasets-cli: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on r-ggplot2: 
   :depends on requests: 
   :depends on samtools: ``>=1.3``
   :depends on seqkit: 
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

    pixi global install virmet

to add into an existing workspace instead, run::

    pixi add virmet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virmet

Alternatively, to install into a new environment, run::

    conda create -n envname virmet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virmet:<tag>

(see `virmet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virmet| image:: https://img.shields.io/conda/dn/bioconda/virmet.svg?style=flat
   :target: https://anaconda.org/bioconda/virmet
   :alt:   (downloads)
.. |docker_virmet| image:: https://quay.io/repository/biocontainers/virmet/status
   :target: https://quay.io/repository/biocontainers/virmet
.. _`virmet/tags`: https://quay.io/repository/biocontainers/virmet?tab=tags


.. raw:: html

    <script>
        var package = "virmet";
        var versions = ["2.0.1","2.0.0","2.0.0","2.0.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virmet/README.html