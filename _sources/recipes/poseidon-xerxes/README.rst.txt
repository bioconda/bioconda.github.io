:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poseidon-xerxes'
.. highlight: bash

poseidon-xerxes
===============

.. conda:recipe:: poseidon-xerxes
   :replaces_section_title:
   :noindex:

   A tool \(xerxes\) to analyse genotype databases formatted using Poseidon.

   :homepage: https://www.poseidon-adna.org/#/
   :license: MIT
   :recipe: /`poseidon-xerxes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-xerxes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-xerxes/meta.yaml>`_

   


.. conda:package:: poseidon-xerxes

   |downloads_poseidon-xerxes| |docker_poseidon-xerxes|

   :versions:
      
      

      ``1.0.1.1-1``,  ``1.0.1.1-0``,  ``1.0.0.2-0``,  ``0.3.4.0-0``,  ``0.1.2.2-2``,  ``0.1.2.2-1``,  ``0.1.2.2-0``,  ``0.1.0.0-0``

      

   
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on libgcc: ``>=13``
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

    pixi global install poseidon-xerxes

to add into an existing workspace instead, run::

    pixi add poseidon-xerxes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poseidon-xerxes

Alternatively, to install into a new environment, run::

    conda create -n envname poseidon-xerxes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poseidon-xerxes:<tag>

(see `poseidon-xerxes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poseidon-xerxes| image:: https://img.shields.io/conda/dn/bioconda/poseidon-xerxes.svg?style=flat
   :target: https://anaconda.org/bioconda/poseidon-xerxes
   :alt:   (downloads)
.. |docker_poseidon-xerxes| image:: https://quay.io/repository/biocontainers/poseidon-xerxes/status
   :target: https://quay.io/repository/biocontainers/poseidon-xerxes
.. _`poseidon-xerxes/tags`: https://quay.io/repository/biocontainers/poseidon-xerxes?tab=tags


.. raw:: html

    <script>
        var package = "poseidon-xerxes";
        var versions = ["1.0.1.1","1.0.1.1","1.0.0.2","0.3.4.0","0.1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poseidon-xerxes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poseidon-xerxes/README.html