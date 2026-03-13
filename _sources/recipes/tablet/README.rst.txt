:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tablet'
.. highlight: bash

tablet
======

.. conda:recipe:: tablet
   :replaces_section_title:
   :noindex:

   Tablet is a lightweight\, high\-performance graphical viewer for next generation sequence assemblies and alignments.

   :homepage: https://ics.hutton.ac.uk/tablet
   :license: BSD-2-Clause
   :recipe: /`tablet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet/meta.yaml>`_

   


.. conda:package:: tablet

   |downloads_tablet| |docker_tablet|

   :versions:
      
      

      ``1.17.08.17-1``,  ``1.17.08.17-0``

      

   
   :depends on openjdk: ``>=8,<9``

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

    pixi global install tablet

to add into an existing workspace instead, run::

    pixi add tablet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tablet

Alternatively, to install into a new environment, run::

    conda create -n envname tablet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tablet:<tag>

(see `tablet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tablet| image:: https://img.shields.io/conda/dn/bioconda/tablet.svg?style=flat
   :target: https://anaconda.org/bioconda/tablet
   :alt:   (downloads)
.. |docker_tablet| image:: https://quay.io/repository/biocontainers/tablet/status
   :target: https://quay.io/repository/biocontainers/tablet
.. _`tablet/tags`: https://quay.io/repository/biocontainers/tablet?tab=tags


.. raw:: html

    <script>
        var package = "tablet";
        var versions = ["1.17.08.17","1.17.08.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tablet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tablet/README.html