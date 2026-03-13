:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta_windows'
.. highlight: bash

fasta_windows
=============

.. conda:recipe:: fasta_windows
   :replaces_section_title:
   :noindex:

   Generate fast sequence statistics in windows for each record in a fasta file.

   :homepage: https://github.com/tolkit/fasta_windows
   :license: MIT
   :recipe: /`fasta_windows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_windows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_windows/meta.yaml>`_

   


.. conda:package:: fasta_windows

   |downloads_fasta_windows| |docker_fasta_windows|

   :versions:
      
      

      ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
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

    pixi global install fasta_windows

to add into an existing workspace instead, run::

    pixi add fasta_windows

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fasta_windows

Alternatively, to install into a new environment, run::

    conda create -n envname fasta_windows

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fasta_windows:<tag>

(see `fasta_windows/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fasta_windows| image:: https://img.shields.io/conda/dn/bioconda/fasta_windows.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta_windows
   :alt:   (downloads)
.. |docker_fasta_windows| image:: https://quay.io/repository/biocontainers/fasta_windows/status
   :target: https://quay.io/repository/biocontainers/fasta_windows
.. _`fasta_windows/tags`: https://quay.io/repository/biocontainers/fasta_windows?tab=tags


.. raw:: html

    <script>
        var package = "fasta_windows";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta_windows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta_windows/README.html