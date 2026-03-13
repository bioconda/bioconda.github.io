:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-pair'
.. highlight: bash

fastq-pair
==========

.. conda:recipe:: fastq-pair
   :replaces_section_title:
   :noindex:

   fastq\-pair\: efficient synchronization of paired\-end fastq files

   :homepage: https://github.com/linsalrob/fastq-pair
   :license: MIT
   :recipe: /`fastq-pair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair/meta.yaml>`_
   :links: doi: :doi:`10.1101/552885`

   


.. conda:package:: fastq-pair

   |downloads_fastq-pair| |docker_fastq-pair|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install fastq-pair

to add into an existing workspace instead, run::

    pixi add fastq-pair

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-pair

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-pair

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-pair:<tag>

(see `fastq-pair/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-pair| image:: https://img.shields.io/conda/dn/bioconda/fastq-pair.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-pair
   :alt:   (downloads)
.. |docker_fastq-pair| image:: https://quay.io/repository/biocontainers/fastq-pair/status
   :target: https://quay.io/repository/biocontainers/fastq-pair
.. _`fastq-pair/tags`: https://quay.io/repository/biocontainers/fastq-pair?tab=tags


.. raw:: html

    <script>
        var package = "fastq-pair";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-pair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-pair/README.html