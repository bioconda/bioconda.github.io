:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sanitizeme'
.. highlight: bash

sanitizeme
==========

.. conda:recipe:: sanitizeme
   :replaces_section_title:
   :noindex:

   GUI and CLI tool for removing host DNA from NGS data.

   :homepage: https://github.com/jiangweiyao/SanitizeMe
   :license: APACHE / Apache License 2.0
   :recipe: /`sanitizeme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme/meta.yaml>`_

   


.. conda:package:: sanitizeme

   |downloads_sanitizeme| |docker_sanitizeme|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on colored: 
   :depends on gawk: 
   :depends on gooey: 
   :depends on grep: 
   :depends on minimap2: 
   :depends on python: ``>=3``
   :depends on samtools: 

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

    pixi global install sanitizeme

to add into an existing workspace instead, run::

    pixi add sanitizeme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sanitizeme

Alternatively, to install into a new environment, run::

    conda create -n envname sanitizeme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sanitizeme:<tag>

(see `sanitizeme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sanitizeme| image:: https://img.shields.io/conda/dn/bioconda/sanitizeme.svg?style=flat
   :target: https://anaconda.org/bioconda/sanitizeme
   :alt:   (downloads)
.. |docker_sanitizeme| image:: https://quay.io/repository/biocontainers/sanitizeme/status
   :target: https://quay.io/repository/biocontainers/sanitizeme
.. _`sanitizeme/tags`: https://quay.io/repository/biocontainers/sanitizeme?tab=tags


.. raw:: html

    <script>
        var package = "sanitizeme";
        var versions = ["1.1","1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sanitizeme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sanitizeme/README.html