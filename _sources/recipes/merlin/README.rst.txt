:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merlin'
.. highlight: bash

merlin
======

.. conda:recipe:: merlin
   :replaces_section_title:
   :noindex:

   MERLIN uses sparse trees to represent gene flow in pedigrees and is a fast pedigree analysis package

   :homepage: http://csg.sph.umich.edu/abecasis/merlin
   :license: OpenSource
   :recipe: /`merlin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merlin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merlin/meta.yaml>`_
   :links: biotools: :biotools:`Merlin`, doi: :doi:`10.1038/ng786`

   


.. conda:package:: merlin

   |downloads_merlin| |docker_merlin|

   :versions:
      
      

      ``1.1.2-8``,  ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
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

    pixi global install merlin

to add into an existing workspace instead, run::

    pixi add merlin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install merlin

Alternatively, to install into a new environment, run::

    conda create -n envname merlin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/merlin:<tag>

(see `merlin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_merlin| image:: https://img.shields.io/conda/dn/bioconda/merlin.svg?style=flat
   :target: https://anaconda.org/bioconda/merlin
   :alt:   (downloads)
.. |docker_merlin| image:: https://quay.io/repository/biocontainers/merlin/status
   :target: https://quay.io/repository/biocontainers/merlin
.. _`merlin/tags`: https://quay.io/repository/biocontainers/merlin?tab=tags


.. raw:: html

    <script>
        var package = "merlin";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merlin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merlin/README.html