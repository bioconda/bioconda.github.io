:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hotspot3d'
.. highlight: bash

hotspot3d
=========

.. conda:recipe:: hotspot3d
   :replaces_section_title:
   :noindex:

   This 3D proximity tool can be used to identify mutation hotspots from linear protein sequence and correlate the hotspots with known or potentially interacting domains\, mutations\, or drugs. Mutation\-mutation and mutation\-drug clusters can also be identified and viewed.

   :homepage: https://github.com/ding-lab/hotspot3d
   :license: GPL / GPLv3
   :recipe: /`hotspot3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d/meta.yaml>`_

   


.. conda:package:: hotspot3d

   |downloads_hotspot3d| |docker_hotspot3d|

   :versions:
      
      

      ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``0.6.0-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-archive-extract: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-simple: ``>=6.39``
   :depends on perl-parallel-forkmanager: 
   :depends on perl-test-most: 

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

    pixi global install hotspot3d

to add into an existing workspace instead, run::

    pixi add hotspot3d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hotspot3d

Alternatively, to install into a new environment, run::

    conda create -n envname hotspot3d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hotspot3d:<tag>

(see `hotspot3d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hotspot3d| image:: https://img.shields.io/conda/dn/bioconda/hotspot3d.svg?style=flat
   :target: https://anaconda.org/bioconda/hotspot3d
   :alt:   (downloads)
.. |docker_hotspot3d| image:: https://quay.io/repository/biocontainers/hotspot3d/status
   :target: https://quay.io/repository/biocontainers/hotspot3d
.. _`hotspot3d/tags`: https://quay.io/repository/biocontainers/hotspot3d?tab=tags


.. raw:: html

    <script>
        var package = "hotspot3d";
        var versions = ["1.8.2","1.8.2","1.8.2","1.8.2","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hotspot3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hotspot3d/README.html