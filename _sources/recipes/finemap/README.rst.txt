:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finemap'
.. highlight: bash

finemap
=======

.. conda:recipe:: finemap
   :replaces_section_title:
   :noindex:

   Program for identifying causal SNPs and their effect sizes and heritability contributions


   :homepage: http://www.christianbenner.com
   :license: `Custom Academic <http://www.christianbenner.com/license_finemap_v1.4.html>`_
   :recipe: /`finemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finemap/meta.yaml>`_

   


.. conda:package:: finemap

   |downloads_finemap| |docker_finemap|

   :versions:
      
      

      ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: 
   :depends on libgomp: 
   :depends on sysroot_linux-64: ``2.17.*``

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

    pixi global install finemap

to add into an existing workspace instead, run::

    pixi add finemap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install finemap

Alternatively, to install into a new environment, run::

    conda create -n envname finemap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/finemap:<tag>

(see `finemap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_finemap| image:: https://img.shields.io/conda/dn/bioconda/finemap.svg?style=flat
   :target: https://anaconda.org/bioconda/finemap
   :alt:   (downloads)
.. |docker_finemap| image:: https://quay.io/repository/biocontainers/finemap/status
   :target: https://quay.io/repository/biocontainers/finemap
.. _`finemap/tags`: https://quay.io/repository/biocontainers/finemap?tab=tags


.. raw:: html

    <script>
        var package = "finemap";
        var versions = ["1.4.2","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finemap/README.html