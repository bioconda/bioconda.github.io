:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lash'
.. highlight: bash

lash
====

.. conda:recipe:: lash
   :replaces_section_title:
   :noindex:

   Space\-efficient distance approximation for \(meta\)genomes\, using HyperMinHash\, HyperLogLog\, and UltraLogLog

   :homepage: https://github.com/jianshu93/lash
   :license: MIT
   :recipe: /`lash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lash/meta.yaml>`_

   


.. conda:package:: lash

   |downloads_lash| |docker_lash|

   :versions:
      
      

      

      

   

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

    pixi global install lash

to add into an existing workspace instead, run::

    pixi add lash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lash

Alternatively, to install into a new environment, run::

    conda create -n envname lash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lash:<tag>

(see `lash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lash| image:: https://img.shields.io/conda/dn/bioconda/lash.svg?style=flat
   :target: https://anaconda.org/bioconda/lash
   :alt:   (downloads)
.. |docker_lash| image:: https://quay.io/repository/biocontainers/lash/status
   :target: https://quay.io/repository/biocontainers/lash
.. _`lash/tags`: https://quay.io/repository/biocontainers/lash?tab=tags


.. raw:: html

    <script>
        var package = "lash";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lash/README.html