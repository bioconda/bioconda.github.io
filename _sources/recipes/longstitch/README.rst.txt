:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longstitch'
.. highlight: bash

longstitch
==========

.. conda:recipe:: longstitch
   :replaces_section_title:
   :noindex:

   A genome assembly correction and scaffolding pipeline using long reads.

   :homepage: https://bcgsc.ca/resources/software/longstitch
   :documentation: https://github.com/bcgsc/LongStitch/blob/v1.0.5/README.md
   
   :developer docs: https://github.com/bcgsc/longstitch
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`longstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longstitch/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.06.17.448848`, biotools: :biotools:`longstitch`

   


.. conda:package:: longstitch

   |downloads_longstitch| |docker_longstitch|

   :versions:
      
      

      ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on arcs: ``>=1.2.2``
   :depends on links: ``2.0.1``
   :depends on make: 
   :depends on ntlink: 
   :depends on python: 
   :depends on samtools: 
   :depends on tigmint: ``>=1.2.4``

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

    pixi global install longstitch

to add into an existing workspace instead, run::

    pixi add longstitch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longstitch

Alternatively, to install into a new environment, run::

    conda create -n envname longstitch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longstitch:<tag>

(see `longstitch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longstitch| image:: https://img.shields.io/conda/dn/bioconda/longstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/longstitch
   :alt:   (downloads)
.. |docker_longstitch| image:: https://quay.io/repository/biocontainers/longstitch/status
   :target: https://quay.io/repository/biocontainers/longstitch
.. _`longstitch/tags`: https://quay.io/repository/biocontainers/longstitch?tab=tags


.. raw:: html

    <script>
        var package = "longstitch";
        var versions = ["1.0.5","1.0.5","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longstitch/README.html