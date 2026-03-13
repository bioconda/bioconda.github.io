:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reneo'
.. highlight: bash

reneo
=====

.. conda:recipe:: reneo
   :replaces_section_title:
   :noindex:

   Reneo\: Unraveling Viral Genomes from Metagenomes

   :homepage: https://github.com/Vini2/phables
   :documentation: https://github.com/Vini2/reneo
   
   :developer docs: https://github.com/Vini2/reneo
   :license: MIT / MIT
   :recipe: /`reneo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reneo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reneo/meta.yaml>`_

   Reneo recovers high\-quality genomes from viral communities \(including both prokaryotic and eukaryotic viruses\) found within metagenomes.



.. conda:package:: reneo

   |downloads_reneo| |docker_reneo|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on click: ``>=8.1.3``
   :depends on jinja2: ``>=3.0.2``
   :depends on mamba: ``<1.4.2``
   :depends on metasnek: ``>=0.0.5``
   :depends on python: ``<3.11``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.14.0``
   :depends on snaketool-utils: ``>=0.0.3``

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

    pixi global install reneo

to add into an existing workspace instead, run::

    pixi add reneo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reneo

Alternatively, to install into a new environment, run::

    conda create -n envname reneo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reneo:<tag>

(see `reneo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reneo| image:: https://img.shields.io/conda/dn/bioconda/reneo.svg?style=flat
   :target: https://anaconda.org/bioconda/reneo
   :alt:   (downloads)
.. |docker_reneo| image:: https://quay.io/repository/biocontainers/reneo/status
   :target: https://quay.io/repository/biocontainers/reneo
.. _`reneo/tags`: https://quay.io/repository/biocontainers/reneo?tab=tags


.. raw:: html

    <script>
        var package = "reneo";
        var versions = ["0.5.0","0.4.0","0.3.1","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reneo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reneo/README.html