:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pavfinder'
.. highlight: bash

pavfinder
=========

.. conda:recipe:: pavfinder
   :replaces_section_title:
   :noindex:

   PAVFinder is a Python package that detects structural variants from de novo assemblies.

   :homepage: https://github.com/bcgsc/pavfinder
   :license: GPL-3.0
   :recipe: /`pavfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pavfinder/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12920-018-0402-6`, doi: :doi:`10.1093/bioinformatics/btz902`

   


.. conda:package:: pavfinder

   |downloads_pavfinder| |docker_pavfinder|

   :versions:
      
      

      ``1.8.5-0``

      

   
   :depends on bash: 
   :depends on biobloomtools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bwa: 
   :depends on gmap: 
   :depends on intspan: ``>=0.701``
   :depends on make: 
   :depends on pybedtools: ``>=0.6.9``
   :depends on pysam: ``>=0.8.1``
   :depends on python: ``>=3``
   :depends on rnabloom: 
   :depends on ruffus: 
   :depends on samtools: 
   :depends on transabyss: 

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

    pixi global install pavfinder

to add into an existing workspace instead, run::

    pixi add pavfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pavfinder

Alternatively, to install into a new environment, run::

    conda create -n envname pavfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pavfinder:<tag>

(see `pavfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pavfinder| image:: https://img.shields.io/conda/dn/bioconda/pavfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/pavfinder
   :alt:   (downloads)
.. |docker_pavfinder| image:: https://quay.io/repository/biocontainers/pavfinder/status
   :target: https://quay.io/repository/biocontainers/pavfinder
.. _`pavfinder/tags`: https://quay.io/repository/biocontainers/pavfinder?tab=tags


.. raw:: html

    <script>
        var package = "pavfinder";
        var versions = ["1.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pavfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pavfinder/README.html