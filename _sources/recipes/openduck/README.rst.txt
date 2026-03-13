:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openduck'
.. highlight: bash

openduck
========

.. conda:recipe:: openduck
   :replaces_section_title:
   :noindex:

   Open source library for dynamic undocking \(DUck\)

   :homepage: https://github.com/galaxycomputationalchemistry/duck
   :license: Apache / Apache 2.0
   :recipe: /`openduck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck/meta.yaml>`_
   :links: doi: :doi:`10.1038/nchem.2660`, usegalaxy-eu: :usegalaxy-eu:`openduck_run_smd`

   


.. conda:package:: openduck

   |downloads_openduck| |docker_openduck|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on cudatoolkit: 
   :depends on networkx: 
   :depends on python: 
   :depends on rdkit: 

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

    pixi global install openduck

to add into an existing workspace instead, run::

    pixi add openduck

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openduck

Alternatively, to install into a new environment, run::

    conda create -n envname openduck

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openduck:<tag>

(see `openduck/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openduck| image:: https://img.shields.io/conda/dn/bioconda/openduck.svg?style=flat
   :target: https://anaconda.org/bioconda/openduck
   :alt:   (downloads)
.. |docker_openduck| image:: https://quay.io/repository/biocontainers/openduck/status
   :target: https://quay.io/repository/biocontainers/openduck
.. _`openduck/tags`: https://quay.io/repository/biocontainers/openduck?tab=tags


.. raw:: html

    <script>
        var package = "openduck";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openduck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openduck/README.html