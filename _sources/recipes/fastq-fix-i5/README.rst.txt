:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-fix-i5'
.. highlight: bash

fastq-fix-i5
============

.. conda:recipe:: fastq-fix-i5
   :replaces_section_title:
   :noindex:

   Rewrite FASTQ headers by reverse\-complementing the i5 \(Index2\/P5\) barcode in \:i7\+i5

   :homepage: https://github.com/ssciwr/fastq-fix-i5
   :license: MIT
   :recipe: /`fastq-fix-i5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-fix-i5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-fix-i5/meta.yaml>`_

   A fast\, streaming tool to rewrite FASTQ headers by reverse\-complementing the i5 \(Index2 \/ P5\)
   barcode\, without modifying read sequences or quality scores. Headers are expected to end with the
   standard Illumina \`\:\<i7\>\+\<i5\>\` format.



.. conda:package:: fastq-fix-i5

   |downloads_fastq-fix-i5| |docker_fastq-fix-i5|

   :versions:
      
      

      ``1.0.0-0``

      

   

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

    pixi global install fastq-fix-i5

to add into an existing workspace instead, run::

    pixi add fastq-fix-i5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-fix-i5

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-fix-i5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-fix-i5:<tag>

(see `fastq-fix-i5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-fix-i5| image:: https://img.shields.io/conda/dn/bioconda/fastq-fix-i5.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-fix-i5
   :alt:   (downloads)
.. |docker_fastq-fix-i5| image:: https://quay.io/repository/biocontainers/fastq-fix-i5/status
   :target: https://quay.io/repository/biocontainers/fastq-fix-i5
.. _`fastq-fix-i5/tags`: https://quay.io/repository/biocontainers/fastq-fix-i5?tab=tags


.. raw:: html

    <script>
        var package = "fastq-fix-i5";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-fix-i5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-fix-i5/README.html