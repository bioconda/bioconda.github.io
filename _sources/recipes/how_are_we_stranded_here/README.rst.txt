:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'how_are_we_stranded_here'
.. highlight: bash

how_are_we_stranded_here
========================

.. conda:recipe:: how_are_we_stranded_here
   :replaces_section_title:
   :noindex:

   Python package for testing strandedness of RNA\-Seq fastq files

   :homepage: https://github.com/betsig/how_are_we_stranded_here
   :license: MIT / MIT
   :recipe: /`how_are_we_stranded_here <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/how_are_we_stranded_here>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/how_are_we_stranded_here/meta.yaml>`_

   


.. conda:package:: how_are_we_stranded_here

   |downloads_how_are_we_stranded_here| |docker_how_are_we_stranded_here|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on kallisto: ``0.44.0.*``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on rseqc: 

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

    pixi global install how_are_we_stranded_here

to add into an existing workspace instead, run::

    pixi add how_are_we_stranded_here

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install how_are_we_stranded_here

Alternatively, to install into a new environment, run::

    conda create -n envname how_are_we_stranded_here

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/how_are_we_stranded_here:<tag>

(see `how_are_we_stranded_here/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_how_are_we_stranded_here| image:: https://img.shields.io/conda/dn/bioconda/how_are_we_stranded_here.svg?style=flat
   :target: https://anaconda.org/bioconda/how_are_we_stranded_here
   :alt:   (downloads)
.. |docker_how_are_we_stranded_here| image:: https://quay.io/repository/biocontainers/how_are_we_stranded_here/status
   :target: https://quay.io/repository/biocontainers/how_are_we_stranded_here
.. _`how_are_we_stranded_here/tags`: https://quay.io/repository/biocontainers/how_are_we_stranded_here?tab=tags


.. raw:: html

    <script>
        var package = "how_are_we_stranded_here";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/how_are_we_stranded_here/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/how_are_we_stranded_here/README.html