:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micro_razers'
.. highlight: bash

micro_razers
============

.. conda:recipe:: micro_razers
   :replaces_section_title:
   :noindex:

   MicroRazerS \- Rapid Alignment of Small RNA Reads

   :homepage: https://github.com/seqan/seqan/tree/seqan-v2.1.1/apps/micro_razers
   :license: GPLv3
   :recipe: /`micro_razers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micro_razers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micro_razers/meta.yaml>`_

   


.. conda:package:: micro_razers

   |downloads_micro_razers| |docker_micro_razers|

   :versions:
      
      

      ``1.0.6-8``,  ``1.0.6-7``,  ``1.0.6-6``,  ``1.0.6-5``,  ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install micro_razers

to add into an existing workspace instead, run::

    pixi add micro_razers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install micro_razers

Alternatively, to install into a new environment, run::

    conda create -n envname micro_razers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/micro_razers:<tag>

(see `micro_razers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_micro_razers| image:: https://img.shields.io/conda/dn/bioconda/micro_razers.svg?style=flat
   :target: https://anaconda.org/bioconda/micro_razers
   :alt:   (downloads)
.. |docker_micro_razers| image:: https://quay.io/repository/biocontainers/micro_razers/status
   :target: https://quay.io/repository/biocontainers/micro_razers
.. _`micro_razers/tags`: https://quay.io/repository/biocontainers/micro_razers?tab=tags


.. raw:: html

    <script>
        var package = "micro_razers";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micro_razers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micro_razers/README.html