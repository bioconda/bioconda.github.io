:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'c4counter'
.. highlight: bash

c4counter
=========

.. conda:recipe:: c4counter
   :replaces_section_title:
   :noindex:

   returns the number and types of human C4 regions in a fasta file

   :homepage: https://github.com/irunonayran/c4counter.git
   :license: MIT / MIT
   :recipe: /`c4counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c4counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c4counter/meta.yaml>`_

   


.. conda:package:: c4counter

   |downloads_c4counter| |docker_c4counter|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends on biopython: 
   :depends on docopt: 
   :depends on minimap2: 
   :depends on python: ``>=3.7``

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

    pixi global install c4counter

to add into an existing workspace instead, run::

    pixi add c4counter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install c4counter

Alternatively, to install into a new environment, run::

    conda create -n envname c4counter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/c4counter:<tag>

(see `c4counter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_c4counter| image:: https://img.shields.io/conda/dn/bioconda/c4counter.svg?style=flat
   :target: https://anaconda.org/bioconda/c4counter
   :alt:   (downloads)
.. |docker_c4counter| image:: https://quay.io/repository/biocontainers/c4counter/status
   :target: https://quay.io/repository/biocontainers/c4counter
.. _`c4counter/tags`: https://quay.io/repository/biocontainers/c4counter?tab=tags


.. raw:: html

    <script>
        var package = "c4counter";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/c4counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/c4counter/README.html