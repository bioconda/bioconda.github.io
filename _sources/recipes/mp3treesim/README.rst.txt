:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mp3treesim'
.. highlight: bash

mp3treesim
==========

.. conda:recipe:: mp3treesim
   :replaces_section_title:
   :noindex:

   Triplet\-based similarity score for fully multi\-labeled trees with poly\-occurring labels

   :homepage: https://algolab.github.io/mp3treesim/
   :license: MIT
   :recipe: /`mp3treesim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp3treesim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp3treesim/meta.yaml>`_

   


.. conda:package:: mp3treesim

   |downloads_mp3treesim| |docker_mp3treesim|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.1-0``

      

   
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.18.1``
   :depends on pygraphviz: ``>=1.5``
   :depends on python: ``>=3.6``

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

    pixi global install mp3treesim

to add into an existing workspace instead, run::

    pixi add mp3treesim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mp3treesim

Alternatively, to install into a new environment, run::

    conda create -n envname mp3treesim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mp3treesim:<tag>

(see `mp3treesim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mp3treesim| image:: https://img.shields.io/conda/dn/bioconda/mp3treesim.svg?style=flat
   :target: https://anaconda.org/bioconda/mp3treesim
   :alt:   (downloads)
.. |docker_mp3treesim| image:: https://quay.io/repository/biocontainers/mp3treesim/status
   :target: https://quay.io/repository/biocontainers/mp3treesim
.. _`mp3treesim/tags`: https://quay.io/repository/biocontainers/mp3treesim?tab=tags


.. raw:: html

    <script>
        var package = "mp3treesim";
        var versions = ["1.0.6","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mp3treesim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mp3treesim/README.html