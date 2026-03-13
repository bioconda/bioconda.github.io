:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'visor'
.. highlight: bash

visor
=====

.. conda:recipe:: visor
   :replaces_section_title:
   :noindex:

   Haplotype\-aware structural variants simulator for short\, long and linked reads

   :homepage: https://github.com/davidebolo1993/VISOR.git
   :license: LGPL-3.0
   :recipe: /`visor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor/meta.yaml>`_

   


.. conda:package:: visor

   |downloads_visor| |docker_visor|

   :versions:
      
      

      ``1.1.2.1-0``,  ``1.1.2-0``

      

   
   :depends on badread: ``>=0.4.0``
   :depends on mappy: ``>=2.17``
   :depends on minimap2: ``>=2.17``
   :depends on numpy: ``>=1.15.3``
   :depends on plotly: ``3.10.0``
   :depends on pybedtools: ``>=0.8.0``
   :depends on pyfaidx: ``>=0.5.5.2``
   :depends on pysam: ``>=0.15.0``
   :depends on python: 
   :depends on pywgsim: ``>=0.3.3``
   :depends on samtools: ``>=1.9``

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

    pixi global install visor

to add into an existing workspace instead, run::

    pixi add visor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install visor

Alternatively, to install into a new environment, run::

    conda create -n envname visor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/visor:<tag>

(see `visor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_visor| image:: https://img.shields.io/conda/dn/bioconda/visor.svg?style=flat
   :target: https://anaconda.org/bioconda/visor
   :alt:   (downloads)
.. |docker_visor| image:: https://quay.io/repository/biocontainers/visor/status
   :target: https://quay.io/repository/biocontainers/visor
.. _`visor/tags`: https://quay.io/repository/biocontainers/visor?tab=tags


.. raw:: html

    <script>
        var package = "visor";
        var versions = ["1.1.2.1","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/visor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/visor/README.html