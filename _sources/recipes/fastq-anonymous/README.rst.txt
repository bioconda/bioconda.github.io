:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-anonymous'
.. highlight: bash

fastq-anonymous
===============

.. conda:recipe:: fastq-anonymous
   :replaces_section_title:
   :noindex:

   Change the sequence of a fastq file to enable sharing of confidential information\, for troubleshooting￼ of tools.

   :homepage: https://github.com/wdecoster/fastq-anonymous
   :license: MIT / MIT License
   :recipe: /`fastq-anonymous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous/meta.yaml>`_

   


.. conda:package:: fastq-anonymous

   |downloads_fastq-anonymous| |docker_fastq-anonymous|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on biopython: 
   :depends on python: ``>=3``

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

    pixi global install fastq-anonymous

to add into an existing workspace instead, run::

    pixi add fastq-anonymous

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-anonymous

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-anonymous

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-anonymous:<tag>

(see `fastq-anonymous/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-anonymous| image:: https://img.shields.io/conda/dn/bioconda/fastq-anonymous.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-anonymous
   :alt:   (downloads)
.. |docker_fastq-anonymous| image:: https://quay.io/repository/biocontainers/fastq-anonymous/status
   :target: https://quay.io/repository/biocontainers/fastq-anonymous
.. _`fastq-anonymous/tags`: https://quay.io/repository/biocontainers/fastq-anonymous?tab=tags


.. raw:: html

    <script>
        var package = "fastq-anonymous";
        var versions = ["1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-anonymous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-anonymous/README.html