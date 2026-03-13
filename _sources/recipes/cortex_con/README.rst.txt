:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cortex_con'
.. highlight: bash

cortex_con
==========

.. conda:recipe:: cortex_con
   :replaces_section_title:
   :noindex:

   cortex\_con \(primary contact Mario Caccamo\) is for consensus genome assembly

   :homepage: http://cortexassembler.sourceforge.net/index.html
   :license: GPL3
   :recipe: /`cortex_con <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con/meta.yaml>`_
   :links: biotools: :biotools:`cortex`, doi: :doi:`10.1038/ng.1028`

   


.. conda:package:: cortex_con

   |downloads_cortex_con| |docker_cortex_con|

   :versions:
      
      

      ``0.04c-1``,  ``0.04c-0``

      

   
   :depends on libgcc-ng: ``>=4.9``

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

    pixi global install cortex_con

to add into an existing workspace instead, run::

    pixi add cortex_con

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cortex_con

Alternatively, to install into a new environment, run::

    conda create -n envname cortex_con

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cortex_con:<tag>

(see `cortex_con/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cortex_con| image:: https://img.shields.io/conda/dn/bioconda/cortex_con.svg?style=flat
   :target: https://anaconda.org/bioconda/cortex_con
   :alt:   (downloads)
.. |docker_cortex_con| image:: https://quay.io/repository/biocontainers/cortex_con/status
   :target: https://quay.io/repository/biocontainers/cortex_con
.. _`cortex_con/tags`: https://quay.io/repository/biocontainers/cortex_con?tab=tags


.. raw:: html

    <script>
        var package = "cortex_con";
        var versions = ["0.04c","0.04c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortex_con/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortex_con/README.html