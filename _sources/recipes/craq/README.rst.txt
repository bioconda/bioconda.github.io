:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'craq'
.. highlight: bash

craq
====

.. conda:recipe:: craq
   :replaces_section_title:
   :noindex:

   Pinpoint assembly errors for genomic assessing and correcting.

   :homepage: https://github.com/JiaoLaboratory/CRAQ
   :license: MIT / MIT
   :recipe: /`craq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/craq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/craq/meta.yaml>`_

   CRAQ \(Clipping Reveals Assembly Quality\) is a reference\-free genome assembly evaluator that can assess the accuracy of assembled genomic sequences and provide detailed assembly quality assessment from multiple perspectives. It can report precise locations of small\-scale Clip\-based Regional Errors \(CREs\)\, large\-scale Clip\-based Structural Errors \(CSEs\)\, as well as regional and overall AQI metrics \(R\-AQI \& S\-AQI\) for assembly evaluation. Through evaluating a large set of genome assemblies with different qualities\, we classified genomes as following\: AQI \> 90\, reference quality\; AQI from 80\-90\, high quality\; AQI from 60\-80\, draft quality\; and AQI \< 60\, low quality. CRAQ also considered haplotype features which is important for identifying true misassembly. It can output coordinates of regional heterozygous variants \(CRHs\) and coordinates of structural heterozygous variants \(CSHs\) based on the ratio of clipped alignments and mapping coverage. Moreover\, CRAQ detects potential chimeric contigs and break them at conflict breakpoints for assembly correction. This document has the information on how to run CRAQ.



.. conda:package:: craq

   |downloads_craq| |docker_craq|

   :versions:
      
      

      ``1.10-0``,  ``1.0.9-1``,  ``1.0.9-0``

      

   
   :depends on bc: 
   :depends on minimap2: ``>=2.17``
   :depends on perl: ``>=5``
   :depends on python: ``>=3.7``
   :depends on python_circos: 
   :depends on samtools: ``>=1.3.1``

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

    pixi global install craq

to add into an existing workspace instead, run::

    pixi add craq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install craq

Alternatively, to install into a new environment, run::

    conda create -n envname craq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/craq:<tag>

(see `craq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_craq| image:: https://img.shields.io/conda/dn/bioconda/craq.svg?style=flat
   :target: https://anaconda.org/bioconda/craq
   :alt:   (downloads)
.. |docker_craq| image:: https://quay.io/repository/biocontainers/craq/status
   :target: https://quay.io/repository/biocontainers/craq
.. _`craq/tags`: https://quay.io/repository/biocontainers/craq?tab=tags


.. raw:: html

    <script>
        var package = "craq";
        var versions = ["1.10","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/craq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/craq/README.html