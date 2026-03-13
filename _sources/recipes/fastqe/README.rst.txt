:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqe'
.. highlight: bash

fastqe
======

.. conda:recipe:: fastqe
   :replaces_section_title:
   :noindex:

   A emoji based bioinformatics command line tool.

   :homepage: https://github.com/fastqe/fastqe
   :license: BSD / BSD-3-Clause
   :recipe: /`fastqe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe/meta.yaml>`_

   The program reads one or more input FASTQ files.
   For each file it computes the minimum\, maximum and mean FASTQ quality score at each position across all reads in a file.

   For some reason\, it then represents these as emoji.


.. conda:package:: fastqe

   |downloads_fastqe| |docker_fastqe|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.0-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.66``
   :depends on jinja2: 
   :depends on pyemojify: 
   :depends on python: ``>=3.7``

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

    pixi global install fastqe

to add into an existing workspace instead, run::

    pixi add fastqe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastqe

Alternatively, to install into a new environment, run::

    conda create -n envname fastqe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastqe:<tag>

(see `fastqe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastqe| image:: https://img.shields.io/conda/dn/bioconda/fastqe.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqe
   :alt:   (downloads)
.. |docker_fastqe| image:: https://quay.io/repository/biocontainers/fastqe/status
   :target: https://quay.io/repository/biocontainers/fastqe
.. _`fastqe/tags`: https://quay.io/repository/biocontainers/fastqe?tab=tags


.. raw:: html

    <script>
        var package = "fastqe";
        var versions = ["0.5.2","0.5.0","0.3.3","0.3.1","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqe/README.html