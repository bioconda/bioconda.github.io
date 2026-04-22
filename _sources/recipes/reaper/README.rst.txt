:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reaper'
.. highlight: bash

reaper
======

.. conda:recipe:: reaper
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing\, trimming and filtering sequencing data.

   :homepage: https://www.ebi.ac.uk/~stijn/reaper/reaper.html
   :license: GPL3
   :recipe: /`reaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper/meta.yaml>`_

   


.. conda:package:: reaper

   |downloads_reaper| |docker_reaper|

   :versions:
      
      

      ``16.098-3``,  ``16.098-2``,  ``16.098-1``,  ``16.098-0``

      

   
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install reaper

to add into an existing workspace instead, run::

    pixi add reaper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reaper

Alternatively, to install into a new environment, run::

    conda create -n envname reaper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reaper:<tag>

(see `reaper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reaper| image:: https://img.shields.io/conda/dn/bioconda/reaper.svg?style=flat
   :target: https://anaconda.org/bioconda/reaper
   :alt:   (downloads)
.. |docker_reaper| image:: https://quay.io/repository/biocontainers/reaper/status
   :target: https://quay.io/repository/biocontainers/reaper
.. _`reaper/tags`: https://quay.io/repository/biocontainers/reaper?tab=tags


.. raw:: html

    <script>
        var package = "reaper";
        var versions = ["16.098","16.098","16.098","16.098"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reaper/README.html