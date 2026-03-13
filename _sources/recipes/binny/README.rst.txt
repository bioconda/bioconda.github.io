:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binny'
.. highlight: bash

binny
=====

.. conda:recipe:: binny
   :replaces_section_title:
   :noindex:

   An automated binning algorithm to recover high\-quality genomes from complex metagenomic datasets. Note\: This is a development version.

   :homepage: https://github.com/a-h-b/binny
   :license: GPL / GPL-3.0-or-later
   :recipe: /`binny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binny/meta.yaml>`_

   


.. conda:package:: binny

   |downloads_binny| |docker_binny|

   :versions:
      
      

      ``2.2.18-0``

      

   
   :depends on bedtools: ``2.31.0.*``
   :depends on gcc_linux-64: 
   :depends on git: 
   :depends on hdbscan: ``0.8.33.*``
   :depends on mantis_pfa: ``1.5.5.*``
   :depends on networkx: ``3.1.0.*``
   :depends on opentsne: ``1.0.0.*``
   :depends on pyarrow: ``12.0.1.*``
   :depends on python: ``>=3.6,<3.11``
   :depends on scikit-bio: ``0.5.9.*``
   :depends on seqkit: ``2.5.1.*``
   :depends on singularity: ``3.8.6.*``
   :depends on snakemake: ``7.19.0.*``

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

    pixi global install binny

to add into an existing workspace instead, run::

    pixi add binny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binny

Alternatively, to install into a new environment, run::

    conda create -n envname binny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binny:<tag>

(see `binny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binny| image:: https://img.shields.io/conda/dn/bioconda/binny.svg?style=flat
   :target: https://anaconda.org/bioconda/binny
   :alt:   (downloads)
.. |docker_binny| image:: https://quay.io/repository/biocontainers/binny/status
   :target: https://quay.io/repository/biocontainers/binny
.. _`binny/tags`: https://quay.io/repository/biocontainers/binny?tab=tags


.. raw:: html

    <script>
        var package = "binny";
        var versions = ["2.2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binny/README.html