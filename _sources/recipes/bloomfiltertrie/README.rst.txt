:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bloomfiltertrie'
.. highlight: bash

bloomfiltertrie
===============

.. conda:recipe:: bloomfiltertrie
   :replaces_section_title:
   :noindex:

   An alignment\-free\, reference\-free and incremental data structure for colored de Bruijn graph with application to pan\-genome indexing.

   :homepage: https://github.com/GuillaumeHolley/BloomFilterTrie
   :license: MIT / MIT
   :recipe: /`bloomfiltertrie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie/meta.yaml>`_

   


.. conda:package:: bloomfiltertrie

   |downloads_bloomfiltertrie| |docker_bloomfiltertrie|

   :versions:
      
      

      ``0.8.7-6``,  ``0.8.7-5``,  ``0.8.7-4``,  ``0.8.7-3``,  ``0.8.7-2``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.1-0``

      

   
   :depends on jemalloc: 
   :depends on judy: 
   :depends on libgcc: ``>=13``
   :depends on libjemalloc: ``>=5.3.0``

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

    pixi global install bloomfiltertrie

to add into an existing workspace instead, run::

    pixi add bloomfiltertrie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bloomfiltertrie

Alternatively, to install into a new environment, run::

    conda create -n envname bloomfiltertrie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bloomfiltertrie:<tag>

(see `bloomfiltertrie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bloomfiltertrie| image:: https://img.shields.io/conda/dn/bioconda/bloomfiltertrie.svg?style=flat
   :target: https://anaconda.org/bioconda/bloomfiltertrie
   :alt:   (downloads)
.. |docker_bloomfiltertrie| image:: https://quay.io/repository/biocontainers/bloomfiltertrie/status
   :target: https://quay.io/repository/biocontainers/bloomfiltertrie
.. _`bloomfiltertrie/tags`: https://quay.io/repository/biocontainers/bloomfiltertrie?tab=tags


.. raw:: html

    <script>
        var package = "bloomfiltertrie";
        var versions = ["0.8.7","0.8.7","0.8.7","0.8.7","0.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloomfiltertrie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloomfiltertrie/README.html