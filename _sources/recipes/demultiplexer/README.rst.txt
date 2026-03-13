:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplexer'
.. highlight: bash

demultiplexer
=============

.. conda:recipe:: demultiplexer
   :replaces_section_title:
   :noindex:

   python tool to demultiplex illumina reads tagged with the leeselab tagging scheme

   :homepage: https://github.com/DominikBuchner/demultiplexer
   :license: MIT
   :recipe: /`demultiplexer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplexer/meta.yaml>`_

   


.. conda:package:: demultiplexer

   |downloads_demultiplexer| |docker_demultiplexer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.1.2-0``,  ``1.1.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on joblib: ``>=0.16.0``
   :depends on openpyxl: ``>=3.0.3``
   :depends on psutil: ``>=5.7.3``
   :depends on pysimplegui: ``>=4.19.0``
   :depends on python: ``>=3.6``

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

    pixi global install demultiplexer

to add into an existing workspace instead, run::

    pixi add demultiplexer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install demultiplexer

Alternatively, to install into a new environment, run::

    conda create -n envname demultiplexer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/demultiplexer:<tag>

(see `demultiplexer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_demultiplexer| image:: https://img.shields.io/conda/dn/bioconda/demultiplexer.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplexer
   :alt:   (downloads)
.. |docker_demultiplexer| image:: https://quay.io/repository/biocontainers/demultiplexer/status
   :target: https://quay.io/repository/biocontainers/demultiplexer
.. _`demultiplexer/tags`: https://quay.io/repository/biocontainers/demultiplexer?tab=tags


.. raw:: html

    <script>
        var package = "demultiplexer";
        var versions = ["1.2.1","1.1.2","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplexer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplexer/README.html