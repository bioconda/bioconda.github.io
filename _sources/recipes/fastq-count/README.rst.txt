:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-count'
.. highlight: bash

fastq-count
===========

.. conda:recipe:: fastq-count
   :replaces_section_title:
   :noindex:

   Simple fastq read and base counter for paired data.

   :homepage: https://github.com/sndrtj/fastq-count
   :license: MIT
   :recipe: /`fastq-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count/meta.yaml>`_

   


.. conda:package:: fastq-count

   |downloads_fastq-count| |docker_fastq-count|

   :versions:
      
      

      ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install fastq-count

to add into an existing workspace instead, run::

    pixi add fastq-count

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-count

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-count

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-count:<tag>

(see `fastq-count/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-count| image:: https://img.shields.io/conda/dn/bioconda/fastq-count.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-count
   :alt:   (downloads)
.. |docker_fastq-count| image:: https://quay.io/repository/biocontainers/fastq-count/status
   :target: https://quay.io/repository/biocontainers/fastq-count
.. _`fastq-count/tags`: https://quay.io/repository/biocontainers/fastq-count?tab=tags


.. raw:: html

    <script>
        var package = "fastq-count";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-count/README.html