:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'patholive'
.. highlight: bash

patholive
=========

.. conda:recipe:: patholive
   :replaces_section_title:
   :noindex:

   A real\-time pathogen diagnostics tool for metagenomic Illumina sequencing data.

   :homepage: https://gitlab.com/SimonHTausch/PathoLive
   :license: BSD / BSD 3-Clause
   :recipe: /`patholive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive/meta.yaml>`_

   


.. conda:package:: patholive

   |downloads_patholive| |docker_patholive|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on argparse: 
   :depends on hilive2: 
   :depends on matplotlib: 
   :depends on numpy: ``>=1.11``
   :depends on pysam: 
   :depends on python: ``>=3``

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

    pixi global install patholive

to add into an existing workspace instead, run::

    pixi add patholive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install patholive

Alternatively, to install into a new environment, run::

    conda create -n envname patholive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/patholive:<tag>

(see `patholive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_patholive| image:: https://img.shields.io/conda/dn/bioconda/patholive.svg?style=flat
   :target: https://anaconda.org/bioconda/patholive
   :alt:   (downloads)
.. |docker_patholive| image:: https://quay.io/repository/biocontainers/patholive/status
   :target: https://quay.io/repository/biocontainers/patholive
.. _`patholive/tags`: https://quay.io/repository/biocontainers/patholive?tab=tags


.. raw:: html

    <script>
        var package = "patholive";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/patholive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/patholive/README.html