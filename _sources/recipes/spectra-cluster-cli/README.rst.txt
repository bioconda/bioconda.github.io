:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectra-cluster-cli'
.. highlight: bash

spectra-cluster-cli
===================

.. conda:recipe:: spectra-cluster-cli
   :replaces_section_title:
   :noindex:

   This is a stand\-alone implementation of the new updated PRIDE Cluster algorithm. It is based on the spectra\-cluster API and uses a highly similar logic as the Hadoop implementation spectra\-cluster\-hadoop used to build the PRIDE Cluster resource.

   :homepage: https://github.com/spectra-cluster/spectra-cluster-cli
   :license: Apache / Apache-2.0
   :recipe: /`spectra-cluster-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli/meta.yaml>`_

   


.. conda:package:: spectra-cluster-cli

   |downloads_spectra-cluster-cli| |docker_spectra-cluster-cli|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on openjdk: ``>=6``
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

    pixi global install spectra-cluster-cli

to add into an existing workspace instead, run::

    pixi add spectra-cluster-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectra-cluster-cli

Alternatively, to install into a new environment, run::

    conda create -n envname spectra-cluster-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectra-cluster-cli:<tag>

(see `spectra-cluster-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectra-cluster-cli| image:: https://img.shields.io/conda/dn/bioconda/spectra-cluster-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/spectra-cluster-cli
   :alt:   (downloads)
.. |docker_spectra-cluster-cli| image:: https://quay.io/repository/biocontainers/spectra-cluster-cli/status
   :target: https://quay.io/repository/biocontainers/spectra-cluster-cli
.. _`spectra-cluster-cli/tags`: https://quay.io/repository/biocontainers/spectra-cluster-cli?tab=tags


.. raw:: html

    <script>
        var package = "spectra-cluster-cli";
        var versions = ["1.1.2","1.1.2","1.0.1","1.0.1"];
    </script>





Notes
-----
spectra\-cluster\-cli is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"spectra\-cluster\-cli \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectra-cluster-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectra-cluster-cli/README.html