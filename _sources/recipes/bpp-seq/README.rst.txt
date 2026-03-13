:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-seq'
.. highlight: bash

bpp-seq
=======

.. conda:recipe:: bpp-seq
   :replaces_section_title:
   :noindex:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-seq
   :license: CeCILL
   :recipe: /`bpp-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq/meta.yaml>`_

   


.. conda:package:: bpp-seq

   |downloads_bpp-seq| |docker_bpp-seq|

   :versions:
      
      

      ``2.4.1-5``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends on bpp-core: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install bpp-seq

to add into an existing workspace instead, run::

    pixi add bpp-seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bpp-seq

Alternatively, to install into a new environment, run::

    conda create -n envname bpp-seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bpp-seq:<tag>

(see `bpp-seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bpp-seq| image:: https://img.shields.io/conda/dn/bioconda/bpp-seq.svg?style=flat
   :target: https://anaconda.org/bioconda/bpp-seq
   :alt:   (downloads)
.. |docker_bpp-seq| image:: https://quay.io/repository/biocontainers/bpp-seq/status
   :target: https://quay.io/repository/biocontainers/bpp-seq
.. _`bpp-seq/tags`: https://quay.io/repository/biocontainers/bpp-seq?tab=tags


.. raw:: html

    <script>
        var package = "bpp-seq";
        var versions = ["2.4.1","2.4.1","2.4.1","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-seq/README.html