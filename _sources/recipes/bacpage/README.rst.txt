:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacpage'
.. highlight: bash

bacpage
=======

.. conda:recipe:: bacpage
   :replaces_section_title:
   :noindex:

   An easy\-to\-use pipeline for the assembly and analysis of bacterial genomes.

   :homepage: https://github.com/CholGen/bacpage
   :documentation: https://cholgen.github.io/sequencing-resources/bacpage-command.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bacpage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacpage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacpage/meta.yaml>`_

   


.. conda:package:: bacpage

   |downloads_bacpage| |docker_bacpage|

   :versions:
      
      

      ``2025.08.21-0``,  ``2024.03.08-0``,  ``2023.11.10.1-0``

      

   
   :depends on abricate: 
   :depends on bc: 
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on emboss: 
   :depends on fastp: 
   :depends on fastqc: 
   :depends on flash: 
   :depends on iqtree: 
   :depends on lighter: 
   :depends on multiqc: 
   :depends on pandas: 
   :depends on prokka: 
   :depends on python: ``>=3.9,<3.12``
   :depends on qualimap: 
   :depends on quast: 
   :depends on samtools: 
   :depends on snakemake-minimal: ``<8``
   :depends on snp-sites: 
   :depends on unicycler: 

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

    pixi global install bacpage

to add into an existing workspace instead, run::

    pixi add bacpage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bacpage

Alternatively, to install into a new environment, run::

    conda create -n envname bacpage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bacpage:<tag>

(see `bacpage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bacpage| image:: https://img.shields.io/conda/dn/bioconda/bacpage.svg?style=flat
   :target: https://anaconda.org/bioconda/bacpage
   :alt:   (downloads)
.. |docker_bacpage| image:: https://quay.io/repository/biocontainers/bacpage/status
   :target: https://quay.io/repository/biocontainers/bacpage
.. _`bacpage/tags`: https://quay.io/repository/biocontainers/bacpage?tab=tags


.. raw:: html

    <script>
        var package = "bacpage";
        var versions = ["2025.08.21","2024.03.08","2023.11.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacpage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacpage/README.html