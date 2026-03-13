:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polyat'
.. highlight: bash

polyat
======

.. conda:recipe:: polyat
   :replaces_section_title:
   :noindex:

   Command\-line tool to quantify poly\-A\/T homopolymers within FASTQ sequencing reads.

   :homepage: https://github.com/DaanJansen94/polyat
   :documentation: https://github.com/DaanJansen94/polyat/blob/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`polyat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polyat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polyat/meta.yaml>`_

   polyat counts poly\-A\/T homopolymers across FASTQ reads \(\>\=10\/15\/20 nt\)\,
   summarizes per sample\, and writes both TSV and HTML reports with interactive filters.



.. conda:package:: polyat

   |downloads_polyat| |docker_polyat|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on python: ``>=3.8``

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

    pixi global install polyat

to add into an existing workspace instead, run::

    pixi add polyat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install polyat

Alternatively, to install into a new environment, run::

    conda create -n envname polyat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/polyat:<tag>

(see `polyat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_polyat| image:: https://img.shields.io/conda/dn/bioconda/polyat.svg?style=flat
   :target: https://anaconda.org/bioconda/polyat
   :alt:   (downloads)
.. |docker_polyat| image:: https://quay.io/repository/biocontainers/polyat/status
   :target: https://quay.io/repository/biocontainers/polyat
.. _`polyat/tags`: https://quay.io/repository/biocontainers/polyat?tab=tags


.. raw:: html

    <script>
        var package = "polyat";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polyat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polyat/README.html