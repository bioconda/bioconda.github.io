:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vartracker'
.. highlight: bash

vartracker
==========

.. conda:recipe:: vartracker
   :replaces_section_title:
   :noindex:

   Track the persistence \(or loss\) of mutations during long\-term passaging

   :homepage: https://github.com/charlesfoster/vartracker
   :documentation: https://github.com/charlesfoster/vartracker/blob/main/README.md
   
   :license: MIT
   :recipe: /`vartracker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartracker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartracker/meta.yaml>`_

   


.. conda:package:: vartracker

   |downloads_vartracker| |docker_vartracker|

   :versions:
      
      

      ``2.2.1-0``,  ``2.1.1-0``

      

   
   :depends on bcftools: 
   :depends on biopython: ``>=1.83,<2``
   :depends on bwa: 
   :depends on cyvcf2: ``>=0.30.0``
   :depends on fastp: 
   :depends on htslib: 
   :depends on lofreq: 
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on python: ``>=3.11``
   :depends on samtools: 
   :depends on seaborn: ``>=0.11.0``
   :depends on snakemake-minimal: ``>=9``

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

    pixi global install vartracker

to add into an existing workspace instead, run::

    pixi add vartracker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vartracker

Alternatively, to install into a new environment, run::

    conda create -n envname vartracker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vartracker:<tag>

(see `vartracker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vartracker| image:: https://img.shields.io/conda/dn/bioconda/vartracker.svg?style=flat
   :target: https://anaconda.org/bioconda/vartracker
   :alt:   (downloads)
.. |docker_vartracker| image:: https://quay.io/repository/biocontainers/vartracker/status
   :target: https://quay.io/repository/biocontainers/vartracker
.. _`vartracker/tags`: https://quay.io/repository/biocontainers/vartracker?tab=tags


.. raw:: html

    <script>
        var package = "vartracker";
        var versions = ["2.2.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vartracker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vartracker/README.html