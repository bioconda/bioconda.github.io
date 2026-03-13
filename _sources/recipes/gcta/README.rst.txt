:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcta'
.. highlight: bash

gcta
====

.. conda:recipe:: gcta
   :replaces_section_title:
   :noindex:

   GCTA \(Genome\-wide Complex Trait Analysis\) estimates the proportion of phenotypic variance explained by all genome\-wide SNPs for complex traits.

   :homepage: https://yanglab.westlake.edu.cn/software/gcta
   :license: GPL-3.0-only
   :recipe: /`gcta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcta/meta.yaml>`_
   :links: biotools: :biotools:`gcta`, doi: :doi:`10.1016/j.ajhg.2010.11.011`

   


.. conda:package:: gcta

   |downloads_gcta| |docker_gcta|

   :versions:
      
      

      ``1.94.1-0``,  ``1.93.2beta-1``,  ``1.93.2beta-0``

      

   

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

    pixi global install gcta

to add into an existing workspace instead, run::

    pixi add gcta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gcta

Alternatively, to install into a new environment, run::

    conda create -n envname gcta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gcta:<tag>

(see `gcta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gcta| image:: https://img.shields.io/conda/dn/bioconda/gcta.svg?style=flat
   :target: https://anaconda.org/bioconda/gcta
   :alt:   (downloads)
.. |docker_gcta| image:: https://quay.io/repository/biocontainers/gcta/status
   :target: https://quay.io/repository/biocontainers/gcta
.. _`gcta/tags`: https://quay.io/repository/biocontainers/gcta?tab=tags


.. raw:: html

    <script>
        var package = "gcta";
        var versions = ["1.94.1","1.93.2beta","1.93.2beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcta/README.html