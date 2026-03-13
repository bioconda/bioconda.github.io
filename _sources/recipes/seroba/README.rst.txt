:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seroba'
.. highlight: bash

seroba
======

.. conda:recipe:: seroba
   :replaces_section_title:
   :noindex:

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references.

   :homepage: https://github.com/sanger-pathogens/seroba
   :license: GPL / GPL3.0
   :recipe: /`seroba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seroba/meta.yaml>`_

   SeroBA is a k\-mer based Pipeline to identify the Serotype from Illumina NGS reads for given references. 
   You can use SeroBA to download references from \(https\:\/\/github.com\/phe\-bioinformatics\/PneumoCaT\) 
   to do identify the capsular type of Streptococcus pneumoniae.



.. conda:package:: seroba

   |downloads_seroba| |docker_seroba|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on ariba: ``>=2.9.1``
   :depends on bcftools: ``<=1.14``
   :depends on biopython: ``>=1.68,<1.78``
   :depends on bowtie2: 
   :depends on cd-hit: 
   :depends on kmc: ``>=3.2.1``
   :depends on mummer: 
   :depends on pyfastaq: ``>=3.14.0``
   :depends on pymummer: ``>=0.11.0``
   :depends on pysam: ``>=0.15.3,<=0.18.0``
   :depends on python: ``>=3``
   :depends on pyyaml: ``>=3.12``

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

    pixi global install seroba

to add into an existing workspace instead, run::

    pixi add seroba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seroba

Alternatively, to install into a new environment, run::

    conda create -n envname seroba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seroba:<tag>

(see `seroba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seroba| image:: https://img.shields.io/conda/dn/bioconda/seroba.svg?style=flat
   :target: https://anaconda.org/bioconda/seroba
   :alt:   (downloads)
.. |docker_seroba| image:: https://quay.io/repository/biocontainers/seroba/status
   :target: https://quay.io/repository/biocontainers/seroba
.. _`seroba/tags`: https://quay.io/repository/biocontainers/seroba?tab=tags


.. raw:: html

    <script>
        var package = "seroba";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seroba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seroba/README.html