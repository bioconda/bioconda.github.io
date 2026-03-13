:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yasma'
.. highlight: bash

yasma
=====

.. conda:recipe:: yasma
   :replaces_section_title:
   :noindex:

   Small RNA annotation suite

   :homepage: https://github.com/NateyJay/YASMA
   :license: GPL-3.0-only
   :recipe: /`yasma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yasma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yasma/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.csbj.2025.05.045`

   This is a fully integrated pipeline for analysis of small RNAs based on short\-read sequence data\, focused on its annotation tool \(YASMA\-tradeoff\). This tool produces accurate sRNA annotations in diverse species and library qualities\, built specifically for dealing with samples with higher noise.



.. conda:package:: yasma

   |downloads_yasma| |docker_yasma|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends on bowtie: 
   :depends on click: 
   :depends on click-option-group: 
   :depends on cutadapt: 
   :depends on levenshtein: 
   :depends on numpy: 
   :depends on pprintpp: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.12``
   :depends on sra-tools: 
   :depends on viennarna: 

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

    pixi global install yasma

to add into an existing workspace instead, run::

    pixi add yasma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yasma

Alternatively, to install into a new environment, run::

    conda create -n envname yasma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yasma:<tag>

(see `yasma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yasma| image:: https://img.shields.io/conda/dn/bioconda/yasma.svg?style=flat
   :target: https://anaconda.org/bioconda/yasma
   :alt:   (downloads)
.. |docker_yasma| image:: https://quay.io/repository/biocontainers/yasma/status
   :target: https://quay.io/repository/biocontainers/yasma
.. _`yasma/tags`: https://quay.io/repository/biocontainers/yasma?tab=tags


.. raw:: html

    <script>
        var package = "yasma";
        var versions = ["1.1.1","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yasma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yasma/README.html