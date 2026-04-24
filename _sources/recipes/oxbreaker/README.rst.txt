:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oxbreaker'
.. highlight: bash

oxbreaker
=========

.. conda:recipe:: oxbreaker
   :replaces_section_title:
   :noindex:

   GTK4 GUI wrapper that launches a Nextflow pipeline.

   :homepage: https://github.com/oxfordmmm/OxBreaker
   :license: LGPL / LGPL-2.1-only
   :recipe: /`oxbreaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxbreaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oxbreaker/meta.yaml>`_
   :links: doi: :doi:`10.64898/2026.03.18.709804`

   OxBreaker is a GTK4\-based interface that collects parameters and launches a Nextflow pipeline. The package bundles the Nextflow project files and assets so they are available at runtime.


.. conda:package:: oxbreaker

   |downloads_oxbreaker| |docker_oxbreaker|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on cairo: 
   :depends on glib: 
   :depends on gobject-introspection: 
   :depends on gtk4: 
   :depends on harfbuzz: 
   :depends on nextflow: ``>=24``
   :depends on pango: 
   :depends on pygobject: 
   :depends on python: ``>=3.9``

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

    pixi global install oxbreaker

to add into an existing workspace instead, run::

    pixi add oxbreaker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oxbreaker

Alternatively, to install into a new environment, run::

    conda create -n envname oxbreaker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oxbreaker:<tag>

(see `oxbreaker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oxbreaker| image:: https://img.shields.io/conda/dn/bioconda/oxbreaker.svg?style=flat
   :target: https://anaconda.org/bioconda/oxbreaker
   :alt:   (downloads)
.. |docker_oxbreaker| image:: https://quay.io/repository/biocontainers/oxbreaker/status
   :target: https://quay.io/repository/biocontainers/oxbreaker
.. _`oxbreaker/tags`: https://quay.io/repository/biocontainers/oxbreaker?tab=tags


.. raw:: html

    <script>
        var package = "oxbreaker";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oxbreaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oxbreaker/README.html