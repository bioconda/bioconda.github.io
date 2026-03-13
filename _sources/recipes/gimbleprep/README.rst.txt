:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gimbleprep'
.. highlight: bash

gimbleprep
==========

.. conda:recipe:: gimbleprep
   :replaces_section_title:
   :noindex:

   Preprocess fasta\, bam and vcf files ready to be used by gimble

   :homepage: https://github.com/LohseLab/gimbleprep
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gimbleprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimbleprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimbleprep/meta.yaml>`_

   


.. conda:package:: gimbleprep

   |downloads_gimbleprep| |docker_gimbleprep|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.2b6-0``,  ``0.0.2b5-0``,  ``0.0.2b4-0``,  ``0.0.2b3-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on docopt: 
   :depends on mosdepth: ``0.3.2``
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on samtools: 
   :depends on tqdm: 
   :depends on vcflib: 

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

    pixi global install gimbleprep

to add into an existing workspace instead, run::

    pixi add gimbleprep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gimbleprep

Alternatively, to install into a new environment, run::

    conda create -n envname gimbleprep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gimbleprep:<tag>

(see `gimbleprep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gimbleprep| image:: https://img.shields.io/conda/dn/bioconda/gimbleprep.svg?style=flat
   :target: https://anaconda.org/bioconda/gimbleprep
   :alt:   (downloads)
.. |docker_gimbleprep| image:: https://quay.io/repository/biocontainers/gimbleprep/status
   :target: https://quay.io/repository/biocontainers/gimbleprep
.. _`gimbleprep/tags`: https://quay.io/repository/biocontainers/gimbleprep?tab=tags


.. raw:: html

    <script>
        var package = "gimbleprep";
        var versions = ["0.0.2","0.0.2b6","0.0.2b5","0.0.2b4","0.0.2b3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimbleprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimbleprep/README.html