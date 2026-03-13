:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgsa'
.. highlight: bash

pgsa
====

.. conda:recipe:: pgsa
   :replaces_section_title:
   :noindex:

   Pseudogenome Suffix Array is a compact index for collections of reads from sequencing.

   :homepage: http://sun.aei.polsl.pl/pgsa/
   :license: Creative Commons Attribution License
   :recipe: /`pgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgsa/meta.yaml>`_

   


.. conda:package:: pgsa

   |downloads_pgsa| |docker_pgsa|

   :versions:
      
      

      ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install pgsa

to add into an existing workspace instead, run::

    pixi add pgsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgsa

Alternatively, to install into a new environment, run::

    conda create -n envname pgsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgsa:<tag>

(see `pgsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgsa| image:: https://img.shields.io/conda/dn/bioconda/pgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/pgsa
   :alt:   (downloads)
.. |docker_pgsa| image:: https://quay.io/repository/biocontainers/pgsa/status
   :target: https://quay.io/repository/biocontainers/pgsa
.. _`pgsa/tags`: https://quay.io/repository/biocontainers/pgsa?tab=tags


.. raw:: html

    <script>
        var package = "pgsa";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgsa/README.html