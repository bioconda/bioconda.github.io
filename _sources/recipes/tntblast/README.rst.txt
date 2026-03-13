:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tntblast'
.. highlight: bash

tntblast
========

.. conda:recipe:: tntblast
   :replaces_section_title:
   :noindex:

   Searching DNA\/RNA sequence databases with PCR and\/or probe queries

   :homepage: https://github.com/jgans/thermonucleotideBLAST
   :documentation: https://github.com/jgans/thermonucleotideBLAST#readme
   
   :license: BSD / BSD License
   :recipe: /`tntblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tntblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tntblast/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkn301`

   


.. conda:package:: tntblast

   |downloads_tntblast| |docker_tntblast|

   :versions:
      
      

      ``2.77-0``,  ``2.66-1``,  ``2.66-0``,  ``2.61-0``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mpich: ``>=4.3,<5.0a0``
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

    pixi global install tntblast

to add into an existing workspace instead, run::

    pixi add tntblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tntblast

Alternatively, to install into a new environment, run::

    conda create -n envname tntblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tntblast:<tag>

(see `tntblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tntblast| image:: https://img.shields.io/conda/dn/bioconda/tntblast.svg?style=flat
   :target: https://anaconda.org/bioconda/tntblast
   :alt:   (downloads)
.. |docker_tntblast| image:: https://quay.io/repository/biocontainers/tntblast/status
   :target: https://quay.io/repository/biocontainers/tntblast
.. _`tntblast/tags`: https://quay.io/repository/biocontainers/tntblast?tab=tags


.. raw:: html

    <script>
        var package = "tntblast";
        var versions = ["2.77","2.66","2.66","2.61","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tntblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tntblast/README.html