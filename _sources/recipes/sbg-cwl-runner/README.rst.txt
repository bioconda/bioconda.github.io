:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbg-cwl-runner'
.. highlight: bash

sbg-cwl-runner
==============

.. conda:recipe:: sbg-cwl-runner
   :replaces_section_title:
   :noindex:

   A CWL Runner for SBG platform

   :homepage: https://github.com/kaushik-work/sbg-cwl-runner
   :license: Apache / Apache-2.0
   :recipe: /`sbg-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner/meta.yaml>`_

   A CWL Runner for the Seven Bridges Genomics cloud platform


.. conda:package:: sbg-cwl-runner

   |downloads_sbg-cwl-runner| |docker_sbg-cwl-runner|

   :versions:
      
      

      ``2018.11-1``,  ``2018.11-0``

      

   
   :depends on docopt: 
   :depends on python: ``>3.5``
   :depends on pyyaml: 
   :depends on sevenbridges-python: 

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

    pixi global install sbg-cwl-runner

to add into an existing workspace instead, run::

    pixi add sbg-cwl-runner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sbg-cwl-runner

Alternatively, to install into a new environment, run::

    conda create -n envname sbg-cwl-runner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sbg-cwl-runner:<tag>

(see `sbg-cwl-runner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sbg-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/sbg-cwl-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/sbg-cwl-runner
   :alt:   (downloads)
.. |docker_sbg-cwl-runner| image:: https://quay.io/repository/biocontainers/sbg-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/sbg-cwl-runner
.. _`sbg-cwl-runner/tags`: https://quay.io/repository/biocontainers/sbg-cwl-runner?tab=tags


.. raw:: html

    <script>
        var package = "sbg-cwl-runner";
        var versions = ["2018.11","2018.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbg-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbg-cwl-runner/README.html