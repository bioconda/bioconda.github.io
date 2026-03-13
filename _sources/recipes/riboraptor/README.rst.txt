:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboraptor'
.. highlight: bash

riboraptor
==========

.. conda:recipe:: riboraptor
   :replaces_section_title:
   :noindex:

   Python package to analyse ribosome profiling data

   :homepage: https://github.com/saketkc/riboraptor
   :documentation: https://saketkc.github.io/riboraptor
   
   :license: BSD / BSD License
   :recipe: /`riboraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor/meta.yaml>`_

   


.. conda:package:: riboraptor

   |downloads_riboraptor| |docker_riboraptor|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on click: ``>=6.0``
   :depends on click-help-colors: ``>=0.3``
   :depends on fastqc: 
   :depends on htseq: ``>=0.9.1``
   :depends on matplotlib: ``>=2.1.0``
   :depends on numpy: ``>=1.11.0``
   :depends on pandas: ``>=0.20.3``
   :depends on pybedtools: ``>=0.7.10``
   :depends on pybigwig: ``>=0.2.8``
   :depends on pyfaidx: ``>=0.5.0``
   :depends on pysam: ``>=0.11.2.2``
   :depends on python: ``>=3``
   :depends on scipy: ``>=0.19.1``
   :depends on seaborn: ``>=0.8.1``
   :depends on six: ``>=1.11.0``
   :depends on snakemake: 
   :depends on sra-tools: 
   :depends on star: 
   :depends on statsmodels: ``>=0.8.0``
   :depends on trim-galore: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bedsort: 

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

    pixi global install riboraptor

to add into an existing workspace instead, run::

    pixi add riboraptor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install riboraptor

Alternatively, to install into a new environment, run::

    conda create -n envname riboraptor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/riboraptor:<tag>

(see `riboraptor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_riboraptor| image:: https://img.shields.io/conda/dn/bioconda/riboraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/riboraptor
   :alt:   (downloads)
.. |docker_riboraptor| image:: https://quay.io/repository/biocontainers/riboraptor/status
   :target: https://quay.io/repository/biocontainers/riboraptor
.. _`riboraptor/tags`: https://quay.io/repository/biocontainers/riboraptor?tab=tags


.. raw:: html

    <script>
        var package = "riboraptor";
        var versions = ["0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboraptor/README.html