:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binge'
.. highlight: bash

binge
=====

.. conda:recipe:: binge
   :replaces_section_title:
   :noindex:

   A Python process for clustering transcripts based on locus orthology.

   :homepage: https://github.com/zkstewart/BINge
   :documentation: https://github.com/zkstewart/BINge/wiki
   
   :license: GPL / GPL-3.0-only
   :recipe: /`binge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binge/meta.yaml>`_

   


.. conda:package:: binge

   |downloads_binge| |docker_binge|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on biopython: 
   :depends on cd-hit: 
   :depends on gmap: 
   :depends on goatools: 
   :depends on intervaltree: 
   :depends on mmseqs2: 
   :depends on ncls: ``>=0.0.68``
   :depends on networkx: 
   :depends on numpy: 
   :depends on pyfaidx: 
   :depends on python: ``>=3.9,<=3.13``
   :depends on salmon: 
   :depends on scikit-learn: 

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

    pixi global install binge

to add into an existing workspace instead, run::

    pixi add binge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binge

Alternatively, to install into a new environment, run::

    conda create -n envname binge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binge:<tag>

(see `binge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binge| image:: https://img.shields.io/conda/dn/bioconda/binge.svg?style=flat
   :target: https://anaconda.org/bioconda/binge
   :alt:   (downloads)
.. |docker_binge| image:: https://quay.io/repository/biocontainers/binge/status
   :target: https://quay.io/repository/biocontainers/binge
.. _`binge/tags`: https://quay.io/repository/biocontainers/binge?tab=tags


.. raw:: html

    <script>
        var package = "binge";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binge/README.html