:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zavolan-multiqc-plugins'
.. highlight: bash

zavolan-multiqc-plugins
=======================

.. conda:recipe:: zavolan-multiqc-plugins
   :replaces_section_title:
   :noindex:

   MultiQC plugins for the Zavolan Lab\@ University of Basel\, Switzerland

   :homepage: https://github.com/zavolanlab/multiqc-plugins
   :license: APACHE / Apache Software
   :recipe: /`zavolan-multiqc-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins/meta.yaml>`_

   


.. conda:package:: zavolan-multiqc-plugins

   |downloads_zavolan-multiqc-plugins| |docker_zavolan-multiqc-plugins|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends on multiqc: 
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

    pixi global install zavolan-multiqc-plugins

to add into an existing workspace instead, run::

    pixi add zavolan-multiqc-plugins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zavolan-multiqc-plugins

Alternatively, to install into a new environment, run::

    conda create -n envname zavolan-multiqc-plugins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zavolan-multiqc-plugins:<tag>

(see `zavolan-multiqc-plugins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zavolan-multiqc-plugins| image:: https://img.shields.io/conda/dn/bioconda/zavolan-multiqc-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/zavolan-multiqc-plugins
   :alt:   (downloads)
.. |docker_zavolan-multiqc-plugins| image:: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins/status
   :target: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins
.. _`zavolan-multiqc-plugins/tags`: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins?tab=tags


.. raw:: html

    <script>
        var package = "zavolan-multiqc-plugins";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html