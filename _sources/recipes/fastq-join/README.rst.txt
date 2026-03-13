:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-join'
.. highlight: bash

fastq-join
==========

.. conda:recipe:: fastq-join
   :replaces_section_title:
   :noindex:

   Similar to audy\'s stitch program\, but in C\, more efficient and supports some automatic benchmarking and tuning. It uses the same \"squared distance for anchored alignment\" as other tools.

   :homepage: https://github.com/brwnj/fastq-join
   :license: MIT
   :recipe: /`fastq-join <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-join>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-join/meta.yaml>`_

   


.. conda:package:: fastq-join

   |downloads_fastq-join| |docker_fastq-join|

   :versions:
      
      

      ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``

      

   
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

    pixi global install fastq-join

to add into an existing workspace instead, run::

    pixi add fastq-join

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-join

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-join

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-join:<tag>

(see `fastq-join/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-join| image:: https://img.shields.io/conda/dn/bioconda/fastq-join.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-join
   :alt:   (downloads)
.. |docker_fastq-join| image:: https://quay.io/repository/biocontainers/fastq-join/status
   :target: https://quay.io/repository/biocontainers/fastq-join
.. _`fastq-join/tags`: https://quay.io/repository/biocontainers/fastq-join?tab=tags


.. raw:: html

    <script>
        var package = "fastq-join";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-join/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-join/README.html