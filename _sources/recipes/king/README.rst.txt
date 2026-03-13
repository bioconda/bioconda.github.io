:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'king'
.. highlight: bash

king
====

.. conda:recipe:: king
   :replaces_section_title:
   :noindex:

   \`Kinship\-based INference for Gwas \(KING\) is a toolset that makes use of high\-throughput SNP data typically seen in a genome\-wide association study \<http\:\/\/people.virginia.edu\/\~wc9c\/KING\/\>\`\_

   :homepage: http://people.virginia.edu/~wc9c/KING/
   :license: GPLv3
   :recipe: /`king <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king/meta.yaml>`_

   


.. conda:package:: king

   |downloads_king| |docker_king|

   :versions:
      
      

      ``2.2.7-3``,  ``2.2.7-2``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openmp: 
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

    pixi global install king

to add into an existing workspace instead, run::

    pixi add king

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install king

Alternatively, to install into a new environment, run::

    conda create -n envname king

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/king:<tag>

(see `king/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_king| image:: https://img.shields.io/conda/dn/bioconda/king.svg?style=flat
   :target: https://anaconda.org/bioconda/king
   :alt:   (downloads)
.. |docker_king| image:: https://quay.io/repository/biocontainers/king/status
   :target: https://quay.io/repository/biocontainers/king
.. _`king/tags`: https://quay.io/repository/biocontainers/king?tab=tags


.. raw:: html

    <script>
        var package = "king";
        var versions = ["2.2.7","2.2.7","2.2.7","2.2.7","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/king/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/king/README.html