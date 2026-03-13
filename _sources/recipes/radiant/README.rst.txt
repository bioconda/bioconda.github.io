:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radiant'
.. highlight: bash

radiant
=======

.. conda:recipe:: radiant
   :replaces_section_title:
   :noindex:

   Annotate proteomes with protein domains

   :homepage: https://domainworld.uni-muenster.de/data/radiant-db/index.html
   :license: GPL-3.0-or-later
   :recipe: /`radiant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiant/meta.yaml>`_

   This program rapidly annotates protein sequences with Pfam domains


.. conda:package:: radiant

   |downloads_radiant| |docker_radiant|

   :versions:
      
      

      ``1.1.5-0``

      

   
   :depends on boost-cpp: ``>=1.84.0,<1.84.1.0a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libsqlite: ``>=3.45.3,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on openmp: 
   :depends on sqlite: 

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

    pixi global install radiant

to add into an existing workspace instead, run::

    pixi add radiant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install radiant

Alternatively, to install into a new environment, run::

    conda create -n envname radiant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/radiant:<tag>

(see `radiant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_radiant| image:: https://img.shields.io/conda/dn/bioconda/radiant.svg?style=flat
   :target: https://anaconda.org/bioconda/radiant
   :alt:   (downloads)
.. |docker_radiant| image:: https://quay.io/repository/biocontainers/radiant/status
   :target: https://quay.io/repository/biocontainers/radiant
.. _`radiant/tags`: https://quay.io/repository/biocontainers/radiant?tab=tags


.. raw:: html

    <script>
        var package = "radiant";
        var versions = ["1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radiant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radiant/README.html