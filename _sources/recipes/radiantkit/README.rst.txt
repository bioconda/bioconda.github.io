:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radiantkit'
.. highlight: bash

radiantkit
==========

.. conda:recipe:: radiantkit
   :replaces_section_title:
   :noindex:

   Radiantkit is a Python package containing tools for full\-stack image analysis YFISH images.

   :homepage: https://github.com/bicrolab/radiantkit
   :license: MIT / MIT
   :recipe: /`radiantkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiantkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radiantkit/meta.yaml>`_

   


.. conda:package:: radiantkit

   |downloads_radiantkit| |docker_radiantkit|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on czifile: ``>=2019.7.2``
   :depends on joblib: ``>=0.16``
   :depends on nd2reader: ``>=3.3``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.1``
   :depends on pims: ``>=0.5``
   :depends on plotly: ``>=4.13``
   :depends on python: 
   :depends on rich: ``>=13``
   :depends on scikit-image: ``>=0.19``
   :depends on tifffile: ``2024.6.18``

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

    pixi global install radiantkit

to add into an existing workspace instead, run::

    pixi add radiantkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install radiantkit

Alternatively, to install into a new environment, run::

    conda create -n envname radiantkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/radiantkit:<tag>

(see `radiantkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_radiantkit| image:: https://img.shields.io/conda/dn/bioconda/radiantkit.svg?style=flat
   :target: https://anaconda.org/bioconda/radiantkit
   :alt:   (downloads)
.. |docker_radiantkit| image:: https://quay.io/repository/biocontainers/radiantkit/status
   :target: https://quay.io/repository/biocontainers/radiantkit
.. _`radiantkit/tags`: https://quay.io/repository/biocontainers/radiantkit?tab=tags


.. raw:: html

    <script>
        var package = "radiantkit";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radiantkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radiantkit/README.html