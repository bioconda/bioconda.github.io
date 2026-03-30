:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alpaqa-bio'
.. highlight: bash

alpaqa-bio
==========

.. conda:recipe:: alpaqa-bio
   :replaces_section_title:
   :noindex:

   a quality control tool for bacterial ONT\-only assemblies

   :homepage: https://pypi.org/project/alpaqa-bio/
   :license: GPL-3.0-only
   :recipe: /`alpaqa-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpaqa-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpaqa-bio/meta.yaml>`_

   


.. conda:package:: alpaqa-bio

   |downloads_alpaqa-bio| |docker_alpaqa-bio|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.10.0``

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

    pixi global install alpaqa-bio

to add into an existing workspace instead, run::

    pixi add alpaqa-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alpaqa-bio

Alternatively, to install into a new environment, run::

    conda create -n envname alpaqa-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alpaqa-bio:<tag>

(see `alpaqa-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alpaqa-bio| image:: https://img.shields.io/conda/dn/bioconda/alpaqa-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/alpaqa-bio
   :alt:   (downloads)
.. |docker_alpaqa-bio| image:: https://quay.io/repository/biocontainers/alpaqa-bio/status
   :target: https://quay.io/repository/biocontainers/alpaqa-bio
.. _`alpaqa-bio/tags`: https://quay.io/repository/biocontainers/alpaqa-bio?tab=tags


.. raw:: html

    <script>
        var package = "alpaqa-bio";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alpaqa-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alpaqa-bio/README.html