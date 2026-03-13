:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cadd-scripts'
.. highlight: bash

cadd-scripts
============

.. conda:recipe:: cadd-scripts
   :replaces_section_title:
   :noindex:

   CADD scripts release for offline scoring

   :homepage: https://github.com/kircherlab/CADD-scripts
   :license: Restricted. Free for non-commercial users.
   :recipe: /`cadd-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cadd-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cadd-scripts/meta.yaml>`_

   This package contains the CADD\-scripts.  Please note that the \"CADD.sh\"
   script is available as \"cadd.sh\" while the \"install.sh\" script is
   available as \"cadd\-install.sh\".

   The \"Prerequisite\" steps from the CADD\-scripts repository README can
   be skipped as you already have conda installed with the proper channels
   if you can install this package and this package depends on the proper
   Snakemake version.



.. conda:package:: cadd-scripts

   |downloads_cadd-scripts| |docker_cadd-scripts|

   :versions:
      
      

      ``1.7.3-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6.1-0``,  ``1.6.post1-0``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends on snakemake: ``>=8.25.2``

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

    pixi global install cadd-scripts

to add into an existing workspace instead, run::

    pixi add cadd-scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cadd-scripts

Alternatively, to install into a new environment, run::

    conda create -n envname cadd-scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cadd-scripts:<tag>

(see `cadd-scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cadd-scripts| image:: https://img.shields.io/conda/dn/bioconda/cadd-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/cadd-scripts
   :alt:   (downloads)
.. |docker_cadd-scripts| image:: https://quay.io/repository/biocontainers/cadd-scripts/status
   :target: https://quay.io/repository/biocontainers/cadd-scripts
.. _`cadd-scripts/tags`: https://quay.io/repository/biocontainers/cadd-scripts?tab=tags


.. raw:: html

    <script>
        var package = "cadd-scripts";
        var versions = ["1.7.3","1.7.2","1.7.2","1.7.1","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cadd-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cadd-scripts/README.html