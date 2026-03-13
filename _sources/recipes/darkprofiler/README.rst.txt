:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'darkprofiler'
.. highlight: bash

darkprofiler
============

.. conda:recipe:: darkprofiler
   :replaces_section_title:
   :noindex:

   DarkProfiler\: Alignment and Classification of Peptides from Reference\-Independent De Novo Peptide Sequencing Experiments.

   :homepage: https://pypi.org/project/darkprofiler/
   :license: MIT
   :recipe: /`darkprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/darkprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/darkprofiler/meta.yaml>`_

   


.. conda:package:: darkprofiler

   |downloads_darkprofiler| |docker_darkprofiler|

   :versions:
      
      

      ``0.2.6-0``,  ``0.1.3-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on matplotlib-base: ``>=3.3``
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

    pixi global install darkprofiler

to add into an existing workspace instead, run::

    pixi add darkprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install darkprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname darkprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/darkprofiler:<tag>

(see `darkprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_darkprofiler| image:: https://img.shields.io/conda/dn/bioconda/darkprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/darkprofiler
   :alt:   (downloads)
.. |docker_darkprofiler| image:: https://quay.io/repository/biocontainers/darkprofiler/status
   :target: https://quay.io/repository/biocontainers/darkprofiler
.. _`darkprofiler/tags`: https://quay.io/repository/biocontainers/darkprofiler?tab=tags


.. raw:: html

    <script>
        var package = "darkprofiler";
        var versions = ["0.2.6","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/darkprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/darkprofiler/README.html