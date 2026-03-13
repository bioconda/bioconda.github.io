:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_finder_parallel'
.. highlight: bash

ltr_finder_parallel
===================

.. conda:recipe:: ltr_finder_parallel
   :replaces_section_title:
   :noindex:

   Perl wrapper to parallelize ltr\_finder

   :homepage: https://github.com/oushujun/LTR_FINDER_parallel
   :license: MIT / MIT
   :recipe: /`ltr_finder_parallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder_parallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder_parallel/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13100-019-0193-0`

   


.. conda:package:: ltr_finder_parallel

   |downloads_ltr_finder_parallel| |docker_ltr_finder_parallel|

   :versions:
      
      

      ``1.4-0``,  ``1.3-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends on ltr_finder: 

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

    pixi global install ltr_finder_parallel

to add into an existing workspace instead, run::

    pixi add ltr_finder_parallel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ltr_finder_parallel

Alternatively, to install into a new environment, run::

    conda create -n envname ltr_finder_parallel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ltr_finder_parallel:<tag>

(see `ltr_finder_parallel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ltr_finder_parallel| image:: https://img.shields.io/conda/dn/bioconda/ltr_finder_parallel.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_finder_parallel
   :alt:   (downloads)
.. |docker_ltr_finder_parallel| image:: https://quay.io/repository/biocontainers/ltr_finder_parallel/status
   :target: https://quay.io/repository/biocontainers/ltr_finder_parallel
.. _`ltr_finder_parallel/tags`: https://quay.io/repository/biocontainers/ltr_finder_parallel?tab=tags


.. raw:: html

    <script>
        var package = "ltr_finder_parallel";
        var versions = ["1.4","1.3","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_finder_parallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_finder_parallel/README.html