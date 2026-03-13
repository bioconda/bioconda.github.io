:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkage2allegro'
.. highlight: bash

linkage2allegro
===============

.. conda:recipe:: linkage2allegro
   :replaces_section_title:
   :noindex:

   Converts between the output linkage formats of Merlin\, Simwalk\, Genehunter\, and Swiftlink into Allegro.

   :homepage: https://github.com/BioTools-Tek/linkage-converter
   :license: GPL3
   :recipe: /`linkage2allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro/meta.yaml>`_

   


.. conda:package:: linkage2allegro

   |downloads_linkage2allegro| |docker_linkage2allegro|

   :versions:
      
      

      ``2017.3-1``,  ``2017.3-0``,  ``2017.2-0``,  ``2017.1-0``

      

   
   :depends on python: 

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

    pixi global install linkage2allegro

to add into an existing workspace instead, run::

    pixi add linkage2allegro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install linkage2allegro

Alternatively, to install into a new environment, run::

    conda create -n envname linkage2allegro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/linkage2allegro:<tag>

(see `linkage2allegro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_linkage2allegro| image:: https://img.shields.io/conda/dn/bioconda/linkage2allegro.svg?style=flat
   :target: https://anaconda.org/bioconda/linkage2allegro
   :alt:   (downloads)
.. |docker_linkage2allegro| image:: https://quay.io/repository/biocontainers/linkage2allegro/status
   :target: https://quay.io/repository/biocontainers/linkage2allegro
.. _`linkage2allegro/tags`: https://quay.io/repository/biocontainers/linkage2allegro?tab=tags


.. raw:: html

    <script>
        var package = "linkage2allegro";
        var versions = ["2017.3","2017.3","2017.2","2017.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkage2allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkage2allegro/README.html