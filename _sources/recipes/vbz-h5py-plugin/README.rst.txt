:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vbz-h5py-plugin'
.. highlight: bash

vbz-h5py-plugin
===============

.. conda:recipe:: vbz-h5py-plugin
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies VBZ HDF plugin for h5py.

   :homepage: https://github.com/nanoporetech/vbz-h5py-plugin
   :license: MPL-2.0
   :recipe: /`vbz-h5py-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vbz-h5py-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vbz-h5py-plugin/meta.yaml>`_

   


.. conda:package:: vbz-h5py-plugin

   |downloads_vbz-h5py-plugin| |docker_vbz-h5py-plugin|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on h5py: 
   :depends on python: ``>=3.7``

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

    pixi global install vbz-h5py-plugin

to add into an existing workspace instead, run::

    pixi add vbz-h5py-plugin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vbz-h5py-plugin

Alternatively, to install into a new environment, run::

    conda create -n envname vbz-h5py-plugin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vbz-h5py-plugin:<tag>

(see `vbz-h5py-plugin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vbz-h5py-plugin| image:: https://img.shields.io/conda/dn/bioconda/vbz-h5py-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/vbz-h5py-plugin
   :alt:   (downloads)
.. |docker_vbz-h5py-plugin| image:: https://quay.io/repository/biocontainers/vbz-h5py-plugin/status
   :target: https://quay.io/repository/biocontainers/vbz-h5py-plugin
.. _`vbz-h5py-plugin/tags`: https://quay.io/repository/biocontainers/vbz-h5py-plugin?tab=tags


.. raw:: html

    <script>
        var package = "vbz-h5py-plugin";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vbz-h5py-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vbz-h5py-plugin/README.html