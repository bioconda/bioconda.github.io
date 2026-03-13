:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtrim'
.. highlight: bash

fqtrim
======

.. conda:recipe:: fqtrim
   :replaces_section_title:
   :noindex:

   fqtrim is a versatile stand\-alone utility that can be used to trim adapters\, poly\-A tails\, terminal unknown bases \(Ns\) and low quality 3\' regions in reads from high\-throughput next\-generation sequencing machines.

   :homepage: https://ccb.jhu.edu/software/fqtrim/
   :license: Artistic License 2.0
   :recipe: /`fqtrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtrim/meta.yaml>`_

   


.. conda:package:: fqtrim

   |downloads_fqtrim| |docker_fqtrim|

   :versions:
      
      

      ``0.9.7-7``,  ``0.9.7-6``,  ``0.9.7-5``,  ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends on gclib: 
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

    pixi global install fqtrim

to add into an existing workspace instead, run::

    pixi add fqtrim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fqtrim

Alternatively, to install into a new environment, run::

    conda create -n envname fqtrim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fqtrim:<tag>

(see `fqtrim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fqtrim| image:: https://img.shields.io/conda/dn/bioconda/fqtrim.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtrim
   :alt:   (downloads)
.. |docker_fqtrim| image:: https://quay.io/repository/biocontainers/fqtrim/status
   :target: https://quay.io/repository/biocontainers/fqtrim
.. _`fqtrim/tags`: https://quay.io/repository/biocontainers/fqtrim?tab=tags


.. raw:: html

    <script>
        var package = "fqtrim";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtrim/README.html