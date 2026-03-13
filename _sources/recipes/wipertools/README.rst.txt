:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wipertools'
.. highlight: bash

wipertools
==========

.. conda:recipe:: wipertools
   :replaces_section_title:
   :noindex:

   A suite of programs that drop or fix pesky lines in FASTQ files and that split FASTQ files into chunks or merge them.

   :homepage: https://github.com/mazzalab/fastqwiper
   :license: GPL / GPL-2.0-or-later
   :recipe: /`wipertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wipertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wipertools/meta.yaml>`_

   


.. conda:package:: wipertools

   |downloads_wipertools| |docker_wipertools|

   :versions:
      
      

      ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on coreutils: ``>=8``
   :depends on python: ``>=3.10``

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

    pixi global install wipertools

to add into an existing workspace instead, run::

    pixi add wipertools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wipertools

Alternatively, to install into a new environment, run::

    conda create -n envname wipertools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wipertools:<tag>

(see `wipertools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wipertools| image:: https://img.shields.io/conda/dn/bioconda/wipertools.svg?style=flat
   :target: https://anaconda.org/bioconda/wipertools
   :alt:   (downloads)
.. |docker_wipertools| image:: https://quay.io/repository/biocontainers/wipertools/status
   :target: https://quay.io/repository/biocontainers/wipertools
.. _`wipertools/tags`: https://quay.io/repository/biocontainers/wipertools?tab=tags


.. raw:: html

    <script>
        var package = "wipertools";
        var versions = ["1.1.5","1.1.4","1.1.3","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wipertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wipertools/README.html