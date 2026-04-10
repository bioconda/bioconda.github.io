:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microview'
.. highlight: bash

microview
=========

.. conda:recipe:: microview
   :replaces_section_title:
   :noindex:

   Generate reports from taxonomic classification data

   :homepage: https://github.com/jvfe/microview
   :license: BSD-3-Clause
   :recipe: /`microview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microview/meta.yaml>`_

   


.. conda:package:: microview

   |downloads_microview| |docker_microview|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.1-0``

      

   
   :depends on click-option-group: 
   :depends on cython: 
   :depends on decorator: 
   :depends on frictionless: ``>=4.32.0,<5``
   :depends on jinja2: 
   :depends on libgcc-ng: ``>=12``
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on rich: 
   :depends on rich-click: 
   :depends on scikit-bio: 
   :depends on scipy: 

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

    pixi global install microview

to add into an existing workspace instead, run::

    pixi add microview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install microview

Alternatively, to install into a new environment, run::

    conda create -n envname microview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/microview:<tag>

(see `microview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_microview| image:: https://img.shields.io/conda/dn/bioconda/microview.svg?style=flat
   :target: https://anaconda.org/bioconda/microview
   :alt:   (downloads)
.. |docker_microview| image:: https://quay.io/repository/biocontainers/microview/status
   :target: https://quay.io/repository/biocontainers/microview
.. _`microview/tags`: https://quay.io/repository/biocontainers/microview?tab=tags


.. raw:: html

    <script>
        var package = "microview";
        var versions = ["0.11.0","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microview/README.html