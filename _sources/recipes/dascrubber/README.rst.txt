:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dascrubber'
.. highlight: bash

dascrubber
==========

.. conda:recipe:: dascrubber
   :replaces_section_title:
   :noindex:

   Alignment\-based Scrubbing pipeline

   :homepage: https://github.com/thegenemyers/DASCRUBBER
   :license: Custom
   :recipe: /`dascrubber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber/meta.yaml>`_

   


.. conda:package:: dascrubber

   |downloads_dascrubber| |docker_dascrubber|

   :versions:
      
      

      ``0.0.1a2-7``,  ``0.0.1a2-6``,  ``0.0.1a2-5``,  ``0.0.1a2-4``,  ``0.0.1a2-3``,  ``0.0.1a2-2``,  ``0.0.1a2-1``,  ``0.0.1a2-0``,  ``0.0.1a1-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install dascrubber

to add into an existing workspace instead, run::

    pixi add dascrubber

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dascrubber

Alternatively, to install into a new environment, run::

    conda create -n envname dascrubber

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dascrubber:<tag>

(see `dascrubber/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dascrubber| image:: https://img.shields.io/conda/dn/bioconda/dascrubber.svg?style=flat
   :target: https://anaconda.org/bioconda/dascrubber
   :alt:   (downloads)
.. |docker_dascrubber| image:: https://quay.io/repository/biocontainers/dascrubber/status
   :target: https://quay.io/repository/biocontainers/dascrubber
.. _`dascrubber/tags`: https://quay.io/repository/biocontainers/dascrubber?tab=tags


.. raw:: html

    <script>
        var package = "dascrubber";
        var versions = ["0.0.1a2","0.0.1a2","0.0.1a2","0.0.1a2","0.0.1a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dascrubber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dascrubber/README.html