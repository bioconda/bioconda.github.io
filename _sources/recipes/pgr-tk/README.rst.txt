:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgr-tk'
.. highlight: bash

pgr-tk
======

.. conda:recipe:: pgr-tk
   :replaces_section_title:
   :noindex:

   A PanGenomic Research Took Kit. This repository is a project to provide Python and Rust libraries to facilitate pangenomics analysis.

   :homepage: https://github.com/GeneDx/pgr-tk
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`pgr-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgr-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgr-tk/meta.yaml>`_

   


.. conda:package:: pgr-tk

   |downloads_pgr-tk| |docker_pgr-tk|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.4-1``,  ``0.3.4-0``

      

   
   :depends on graphviz: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on minimap2: 
   :depends on numpy: 
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on python_abi: ``3.8.* *_cp38``
   :depends on samtools: 

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

    pixi global install pgr-tk

to add into an existing workspace instead, run::

    pixi add pgr-tk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgr-tk

Alternatively, to install into a new environment, run::

    conda create -n envname pgr-tk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgr-tk:<tag>

(see `pgr-tk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgr-tk| image:: https://img.shields.io/conda/dn/bioconda/pgr-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/pgr-tk
   :alt:   (downloads)
.. |docker_pgr-tk| image:: https://quay.io/repository/biocontainers/pgr-tk/status
   :target: https://quay.io/repository/biocontainers/pgr-tk
.. _`pgr-tk/tags`: https://quay.io/repository/biocontainers/pgr-tk?tab=tags


.. raw:: html

    <script>
        var package = "pgr-tk";
        var versions = ["0.5.1","0.5.1","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgr-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgr-tk/README.html