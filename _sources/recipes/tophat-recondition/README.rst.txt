:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tophat-recondition'
.. highlight: bash

tophat-recondition
==================

.. conda:recipe:: tophat-recondition
   :replaces_section_title:
   :noindex:

   Post\-processor for TopHat unmapped reads

   :homepage: https://github.com/cbrueffer/tophat-recondition
   :license: BSD-2-Clause
   :recipe: /`tophat-recondition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition/meta.yaml>`_
   :links: biotools: :biotools:`tophat-recondition`, doi: :doi:`10.1186/s12859-016-1058-x`

   


.. conda:package:: tophat-recondition

   |downloads_tophat-recondition| |docker_tophat-recondition|

   :versions:
      
      

      ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends on pysam: 
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

    pixi global install tophat-recondition

to add into an existing workspace instead, run::

    pixi add tophat-recondition

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tophat-recondition

Alternatively, to install into a new environment, run::

    conda create -n envname tophat-recondition

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tophat-recondition:<tag>

(see `tophat-recondition/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tophat-recondition| image:: https://img.shields.io/conda/dn/bioconda/tophat-recondition.svg?style=flat
   :target: https://anaconda.org/bioconda/tophat-recondition
   :alt:   (downloads)
.. |docker_tophat-recondition| image:: https://quay.io/repository/biocontainers/tophat-recondition/status
   :target: https://quay.io/repository/biocontainers/tophat-recondition
.. _`tophat-recondition/tags`: https://quay.io/repository/biocontainers/tophat-recondition?tab=tags


.. raw:: html

    <script>
        var package = "tophat-recondition";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat-recondition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat-recondition/README.html