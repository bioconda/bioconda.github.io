:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakrep-cli'
.. highlight: bash

bakrep-cli
==========

.. conda:recipe:: bakrep-cli
   :replaces_section_title:
   :noindex:

   BakRep\-CLI\: a commandline tool for the batch download of BakRep datasets

   :homepage: https://github.com/oschwengers/bakrep-cli
   :documentation: https://github.com/ag-computational-bio/bakrep-cli/blob/v1.1.0/README.md
   
   :developer docs: https://github.com/ag-computational-bio/bakrep-cli
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bakrep-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakrep-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakrep-cli/meta.yaml>`_
   :links: biotools: :biotools:`bakrep-cli`, doi: :doi:`10.1099/mgen.0.001305`

   


.. conda:package:: bakrep-cli

   |downloads_bakrep-cli| |docker_bakrep-cli|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.32``

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

    pixi global install bakrep-cli

to add into an existing workspace instead, run::

    pixi add bakrep-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bakrep-cli

Alternatively, to install into a new environment, run::

    conda create -n envname bakrep-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bakrep-cli:<tag>

(see `bakrep-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bakrep-cli| image:: https://img.shields.io/conda/dn/bioconda/bakrep-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/bakrep-cli
   :alt:   (downloads)
.. |docker_bakrep-cli| image:: https://quay.io/repository/biocontainers/bakrep-cli/status
   :target: https://quay.io/repository/biocontainers/bakrep-cli
.. _`bakrep-cli/tags`: https://quay.io/repository/biocontainers/bakrep-cli?tab=tags


.. raw:: html

    <script>
        var package = "bakrep-cli";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakrep-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakrep-cli/README.html