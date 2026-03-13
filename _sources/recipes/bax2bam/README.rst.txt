:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bax2bam'
.. highlight: bash

bax2bam
=======

.. conda:recipe:: bax2bam
   :replaces_section_title:
   :noindex:

   bax2bam converts the legacy PacBio basecall format \(bax.h5\) into the BAM basecall format

   :homepage: https://github.com/PacificBiosciences/bax2bam
   :license: BSD-3-Clause-Clear
   :recipe: /`bax2bam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bax2bam/meta.yaml>`_

   


.. conda:package:: bax2bam

   |downloads_bax2bam| |docker_bax2bam|

   :versions:
      
      

      ``0.0.11-0``,  ``0.0.9-7``,  ``0.0.9-6``,  ``0.0.9-5``,  ``0.0.9-4``,  ``0.0.9-3``,  ``0.0.9-1``,  ``0.0.9-0``

      

   

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

    pixi global install bax2bam

to add into an existing workspace instead, run::

    pixi add bax2bam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bax2bam

Alternatively, to install into a new environment, run::

    conda create -n envname bax2bam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bax2bam:<tag>

(see `bax2bam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bax2bam| image:: https://img.shields.io/conda/dn/bioconda/bax2bam.svg?style=flat
   :target: https://anaconda.org/bioconda/bax2bam
   :alt:   (downloads)
.. |docker_bax2bam| image:: https://quay.io/repository/biocontainers/bax2bam/status
   :target: https://quay.io/repository/biocontainers/bax2bam
.. _`bax2bam/tags`: https://quay.io/repository/biocontainers/bax2bam?tab=tags


.. raw:: html

    <script>
        var package = "bax2bam";
        var versions = ["0.0.11","0.0.9","0.0.9","0.0.9","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bax2bam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bax2bam/README.html