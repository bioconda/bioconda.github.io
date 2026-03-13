:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickbam'
.. highlight: bash

quickbam
========

.. conda:recipe:: quickbam
   :replaces_section_title:
   :noindex:

   Parallel BAM file access API for high throughput sequence analysis informatics

   :homepage: https://gitlab.com/yiq/quickbam/-/tree/master/
   :license: BSD
   :recipe: /`quickbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickbam/meta.yaml>`_

   


.. conda:package:: quickbam

   |downloads_quickbam| |docker_quickbam|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libdeflate: ``>=1.13,<1.14.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on tbb: ``>=2021.9.0``
   :depends on tbb-devel: 

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

    pixi global install quickbam

to add into an existing workspace instead, run::

    pixi add quickbam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quickbam

Alternatively, to install into a new environment, run::

    conda create -n envname quickbam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quickbam:<tag>

(see `quickbam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quickbam| image:: https://img.shields.io/conda/dn/bioconda/quickbam.svg?style=flat
   :target: https://anaconda.org/bioconda/quickbam
   :alt:   (downloads)
.. |docker_quickbam| image:: https://quay.io/repository/biocontainers/quickbam/status
   :target: https://quay.io/repository/biocontainers/quickbam
.. _`quickbam/tags`: https://quay.io/repository/biocontainers/quickbam?tab=tags


.. raw:: html

    <script>
        var package = "quickbam";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickbam/README.html