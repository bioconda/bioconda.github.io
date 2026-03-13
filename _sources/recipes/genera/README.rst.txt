:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genera'
.. highlight: bash

genera
======

.. conda:recipe:: genera
   :replaces_section_title:
   :noindex:

   Uncovering gene\-family founder events during major evolutionary transitions in animals\, plants and fungi using GenEra

   :homepage: https://github.com/josuebarrera/GenEra
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`genera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genera/meta.yaml>`_

   


.. conda:package:: genera

   |downloads_genera| |docker_genera|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends on absense: ``>=1.0.1``
   :depends on diamond: ``>=2.1.10``
   :depends on foldseek: ``3.915ef7d.*``
   :depends on mmseqs2: ``14.7e284.*``
   :depends on ncbitax2lin: ``>=2.3.2``
   :depends on orthofinder: ``2.5.5.*``
   :depends on python: ``>=3.8,<3.9``
   :depends on r-bio3d: ``2.4_3.*``
   :depends on r-optparse: ``1.7.3.*``
   :depends on r-phytools: ``>=0.6_99``
   :depends on r-seqinr: ``4.2_16.*``
   :depends on r-tidyverse: ``1.3.2.*``
   :depends on scipy: ``1.7.3.*``

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

    pixi global install genera

to add into an existing workspace instead, run::

    pixi add genera

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genera

Alternatively, to install into a new environment, run::

    conda create -n envname genera

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genera:<tag>

(see `genera/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genera| image:: https://img.shields.io/conda/dn/bioconda/genera.svg?style=flat
   :target: https://anaconda.org/bioconda/genera
   :alt:   (downloads)
.. |docker_genera| image:: https://quay.io/repository/biocontainers/genera/status
   :target: https://quay.io/repository/biocontainers/genera
.. _`genera/tags`: https://quay.io/repository/biocontainers/genera?tab=tags


.. raw:: html

    <script>
        var package = "genera";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genera/README.html