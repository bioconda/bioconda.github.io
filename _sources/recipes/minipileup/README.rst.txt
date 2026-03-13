:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minipileup'
.. highlight: bash

minipileup
==========

.. conda:recipe:: minipileup
   :replaces_section_title:
   :noindex:

   Minipileup is a simple pileup\-based variant caller

   :homepage: https://github.com/lh3/minipileup
   :license: MIT / MIT
   :recipe: /`minipileup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipileup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipileup/meta.yaml>`_
   :links: biotools: :biotools:`minipileup`

   Minipileup is a simple pileup\-based variant caller. It takes a reference FASTA and one or multiple alignment BAM as input\, and outputs a multi\-sample VCF along with allele counts.


.. conda:package:: minipileup

   |downloads_minipileup| |docker_minipileup|

   :versions:
      
      

      ``1.4b-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install minipileup

to add into an existing workspace instead, run::

    pixi add minipileup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minipileup

Alternatively, to install into a new environment, run::

    conda create -n envname minipileup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minipileup:<tag>

(see `minipileup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minipileup| image:: https://img.shields.io/conda/dn/bioconda/minipileup.svg?style=flat
   :target: https://anaconda.org/bioconda/minipileup
   :alt:   (downloads)
.. |docker_minipileup| image:: https://quay.io/repository/biocontainers/minipileup/status
   :target: https://quay.io/repository/biocontainers/minipileup
.. _`minipileup/tags`: https://quay.io/repository/biocontainers/minipileup?tab=tags


.. raw:: html

    <script>
        var package = "minipileup";
        var versions = ["1.4b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minipileup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minipileup/README.html