:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reparation_blast'
.. highlight: bash

reparation_blast
================

.. conda:recipe:: reparation_blast
   :replaces_section_title:
   :noindex:

   A pipeline that detects novel open reading frames with ribseq data for bacteria.

   :homepage: https://github.com/RickGelhausen/REPARATION_blast
   :license: GPL3
   :recipe: /`reparation_blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reparation_blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reparation_blast/meta.yaml>`_

   A pipeline that uses ribosome profiling data for a de novo open reading frame delineation in prokaryotic \(bacterial\) genomes. I changed the original reparation project to use the open\-source blast tool \(https\:\/\/blast.ncbi.nlm.nih.gov\/Blast.cgi\) instead of the commercial usearch \-\-ublast tool \(https\:\/\/drive5.com\/usearch\/manual\/ublast\_algo.html\). I did this in order to add this tool to bioconda without having licensing issues with the commercial usearch \-ublast tool. The original software was created at VIB\-UGent Center for Medical Biotechnology and Lab of Bioinformatics and Computational Genomics \(Biobix\)\, University of Gent\, Belgium\, by Elvis Ndah. \(https\:\/\/github.com\/Biobix\/REPARATION\). Be advised that the adapted version has slightly different results and is slower than the original reparation software.


.. conda:package:: reparation_blast

   |downloads_reparation_blast| |docker_reparation_blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-2</code>,  <code>1.0.7-0</code>,  <code>v1.0.7-1</code>,  <code>v1.0.7-0</code>,  </span></summary>
      

      ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-2``,  ``1.0.7-0``,  ``v1.0.7-1``,  ``v1.0.7-0``,  ``v1.0.6-0``,  ``v1.0.5-0``,  ``v1.0.4-0``,  ``v1.0.3-2``,  ``v1.0.2-1``,  ``v1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``1.77.*``
   :depends on blast: 
   :depends on glimmer: 
   :depends on openssl: ``>=1.1.0,<=1.1.1``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-posix: 
   :depends on plastid: 
   :depends on prodigal: 
   :depends on pysam: ``0.16.0.1.*``
   :depends on r-ggplot2: 
   :depends on r-prroc: 
   :depends on r-randomforest: 
   :depends on r-rocr: 
   :depends on r-sizer: 
   :depends on samtools: 

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

    pixi global install reparation_blast

to add into an existing workspace instead, run::

    pixi add reparation_blast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reparation_blast

Alternatively, to install into a new environment, run::

    conda create -n envname reparation_blast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reparation_blast:<tag>

(see `reparation_blast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reparation_blast| image:: https://img.shields.io/conda/dn/bioconda/reparation_blast.svg?style=flat
   :target: https://anaconda.org/bioconda/reparation_blast
   :alt:   (downloads)
.. |docker_reparation_blast| image:: https://quay.io/repository/biocontainers/reparation_blast/status
   :target: https://quay.io/repository/biocontainers/reparation_blast
.. _`reparation_blast/tags`: https://quay.io/repository/biocontainers/reparation_blast?tab=tags


.. raw:: html

    <script>
        var package = "reparation_blast";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reparation_blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reparation_blast/README.html