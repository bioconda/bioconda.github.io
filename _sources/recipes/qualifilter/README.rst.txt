:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qualifilter'
.. highlight: bash

qualifilter
===========

.. conda:recipe:: qualifilter
   :replaces_section_title:
   :noindex:

   Generate a QC report summarizing key quality metrics and sample pass\/fail status according to user\-defined thresholds.

   :homepage: https://github.com/buhlentozini/QualiFilter
   :license: MIT / MIT
   :recipe: /`qualifilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualifilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualifilter/meta.yaml>`_

   


.. conda:package:: qualifilter

   |downloads_qualifilter| |docker_qualifilter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on pandas: ``>=1.0``
   :depends on python: 
   :depends on pyyaml: 

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

    pixi global install qualifilter

to add into an existing workspace instead, run::

    pixi add qualifilter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qualifilter

Alternatively, to install into a new environment, run::

    conda create -n envname qualifilter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qualifilter:<tag>

(see `qualifilter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qualifilter| image:: https://img.shields.io/conda/dn/bioconda/qualifilter.svg?style=flat
   :target: https://anaconda.org/bioconda/qualifilter
   :alt:   (downloads)
.. |docker_qualifilter| image:: https://quay.io/repository/biocontainers/qualifilter/status
   :target: https://quay.io/repository/biocontainers/qualifilter
.. _`qualifilter/tags`: https://quay.io/repository/biocontainers/qualifilter?tab=tags


.. raw:: html

    <script>
        var package = "qualifilter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualifilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualifilter/README.html