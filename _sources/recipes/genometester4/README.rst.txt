:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometester4'
.. highlight: bash

genometester4
=============

.. conda:recipe:: genometester4
   :replaces_section_title:
   :noindex:

   A toolkit for performing set operations \- union\, intersection and complement \- on k\-mer lists.

   :homepage: https://github.com/bioinfo-ut/GenomeTester4
   :license: GPL3
   :recipe: /`genometester4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometester4/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0097-y`

   


.. conda:package:: genometester4

   |downloads_genometester4| |docker_genometester4|

   :versions:
      
      

      ``4.0-7``,  ``4.0-6``,  ``4.0-5``,  ``4.0-4``,  ``4.0-3``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install genometester4

to add into an existing workspace instead, run::

    pixi add genometester4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genometester4

Alternatively, to install into a new environment, run::

    conda create -n envname genometester4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genometester4:<tag>

(see `genometester4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genometester4| image:: https://img.shields.io/conda/dn/bioconda/genometester4.svg?style=flat
   :target: https://anaconda.org/bioconda/genometester4
   :alt:   (downloads)
.. |docker_genometester4| image:: https://quay.io/repository/biocontainers/genometester4/status
   :target: https://quay.io/repository/biocontainers/genometester4
.. _`genometester4/tags`: https://quay.io/repository/biocontainers/genometester4?tab=tags


.. raw:: html

    <script>
        var package = "genometester4";
        var versions = ["4.0","4.0","4.0","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometester4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometester4/README.html