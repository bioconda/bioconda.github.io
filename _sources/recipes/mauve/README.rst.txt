:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauve'
.. highlight: bash

mauve
=====

.. conda:recipe:: mauve
   :replaces_section_title:
   :noindex:

   Mauve is a system for constructing multiple genome alignments in the presence of large\-scale evolutionary events such as rearrangement and inversion

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve/meta.yaml>`_

   


.. conda:package:: mauve

   |downloads_mauve| |docker_mauve|

   :versions:
      
      

      ``2.4.0.snapshot_2015_02_13-4``,  ``2.4.0.snapshot_2015_02_13-3``,  ``2.4.0.snapshot_2015_02_13-2``,  ``2.4.0.snapshot_2015_02_13-1``,  ``2.4.0.snapshot_2015_02_13-0``,  ``2.4.0.r4736-3``,  ``2.4.0.r4736-2``,  ``2.4.0.r4736-1``,  ``2.4.0.r4736-0``

      

   
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on fontconfig: 
   :depends on mauvealigner: 
   :depends on openjdk: ``8.0.192.*``
   :depends on xorg-libxi: 
   :depends on xorg-libxrender: 
   :depends on xorg-libxtst: 

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

    pixi global install mauve

to add into an existing workspace instead, run::

    pixi add mauve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mauve

Alternatively, to install into a new environment, run::

    conda create -n envname mauve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mauve:<tag>

(see `mauve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mauve| image:: https://img.shields.io/conda/dn/bioconda/mauve.svg?style=flat
   :target: https://anaconda.org/bioconda/mauve
   :alt:   (downloads)
.. |docker_mauve| image:: https://quay.io/repository/biocontainers/mauve/status
   :target: https://quay.io/repository/biocontainers/mauve
.. _`mauve/tags`: https://quay.io/repository/biocontainers/mauve?tab=tags


.. raw:: html

    <script>
        var package = "mauve";
        var versions = ["2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauve/README.html