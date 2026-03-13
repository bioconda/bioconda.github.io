:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libbambamc'
.. highlight: bash

libbambamc
==========

.. conda:recipe:: libbambamc/0.5.00
   :replaces_section_title:
   :noindex:

   lightweight C implementation of name collating BAM file input and BAM file output

   :homepage: https://github.com/gt1/bambamc
   :license: GPLv3
   :recipe: /`libbambamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc>`_/`0.5.00 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbambamc/0.5.00/meta.yaml>`_

   


.. conda:package:: libbambamc

   |downloads_libbambamc| |docker_libbambamc|

   :versions:
      
      

      ``0.0.50-6``,  ``0.0.50-5``,  ``0.0.50-4``,  ``0.0.50-3``,  ``0.0.50-2``,  ``0.0.50-1``,  ``0.0.50-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install libbambamc

to add into an existing workspace instead, run::

    pixi add libbambamc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libbambamc

Alternatively, to install into a new environment, run::

    conda create -n envname libbambamc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libbambamc:<tag>

(see `libbambamc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libbambamc| image:: https://img.shields.io/conda/dn/bioconda/libbambamc.svg?style=flat
   :target: https://anaconda.org/bioconda/libbambamc
   :alt:   (downloads)
.. |docker_libbambamc| image:: https://quay.io/repository/biocontainers/libbambamc/status
   :target: https://quay.io/repository/biocontainers/libbambamc
.. _`libbambamc/tags`: https://quay.io/repository/biocontainers/libbambamc?tab=tags


.. raw:: html

    <script>
        var package = "libbambamc";
        var versions = ["0.0.50","0.0.50","0.0.50","0.0.50","0.0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libbambamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libbambamc/README.html