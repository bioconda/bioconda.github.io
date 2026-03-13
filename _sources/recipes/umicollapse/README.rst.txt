:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umicollapse'
.. highlight: bash

umicollapse
===========

.. conda:recipe:: umicollapse
   :replaces_section_title:
   :noindex:

   Accelerating the deduplication and collapsing process for reads with Unique Molecular Identifiers \(UMI\).

   :homepage: https://github.com/Daniel-Liu-c0deb0t/UMICollapse
   :license: MIT / MIT
   :recipe: /`umicollapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umicollapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umicollapse/meta.yaml>`_

   UMIs are a popular way to identify duplicate DNA\/RNA reads caused by PCR amplification. This requires software for collapsing duplicate reads with the same UMI\, while accounting for sequencing\/PCR errors. This tool implements many efficient algorithms for orders\-of\-magnitude faster UMI deduplication than previous tools \(UMI\-tools\, etc.\)\, while maintaining similar functionality. This is achieved by using faster data structures with n\-grams and BK\-trees\, along other techniques that are carefully implemented to scale well to larger datasets and longer UMIs. Users of UMICollapse have reported speedups from taking hours or days to run with a previous tool to taking only a few minutes with this tool with real datasets\! doi 10.7717\/peerj.8275.


.. conda:package:: umicollapse

   |downloads_umicollapse| |docker_umicollapse|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on openjdk: ``>=17``
   :depends on python: 

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

    pixi global install umicollapse

to add into an existing workspace instead, run::

    pixi add umicollapse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install umicollapse

Alternatively, to install into a new environment, run::

    conda create -n envname umicollapse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/umicollapse:<tag>

(see `umicollapse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_umicollapse| image:: https://img.shields.io/conda/dn/bioconda/umicollapse.svg?style=flat
   :target: https://anaconda.org/bioconda/umicollapse
   :alt:   (downloads)
.. |docker_umicollapse| image:: https://quay.io/repository/biocontainers/umicollapse/status
   :target: https://quay.io/repository/biocontainers/umicollapse
.. _`umicollapse/tags`: https://quay.io/repository/biocontainers/umicollapse?tab=tags


.. raw:: html

    <script>
        var package = "umicollapse";
        var versions = ["1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umicollapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umicollapse/README.html