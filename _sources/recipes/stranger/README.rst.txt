:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stranger'
.. highlight: bash

stranger
========

.. conda:recipe:: stranger
   :replaces_section_title:
   :noindex:

   Annotate VCF files with STR variants with pathogenicity implications.

   :homepage: https://github.com/Clinical-Genomics/stranger
   :documentation: https://github.com/Clinical-Genomics/stranger/blob/v0.10.0/README.md
   
   :license: MIT / MIT
   :recipe: /`stranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger/meta.yaml>`_

   


.. conda:package:: stranger

   |downloads_stranger| |docker_stranger|

   :versions:
      
      

      ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``

      

   
   :depends on click: 
   :depends on coloredlogs: 
   :depends on importlib-resources: ``>=5.12.0``
   :depends on python: ``>=3.7``
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

    pixi global install stranger

to add into an existing workspace instead, run::

    pixi add stranger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stranger

Alternatively, to install into a new environment, run::

    conda create -n envname stranger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stranger:<tag>

(see `stranger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stranger| image:: https://img.shields.io/conda/dn/bioconda/stranger.svg?style=flat
   :target: https://anaconda.org/bioconda/stranger
   :alt:   (downloads)
.. |docker_stranger| image:: https://quay.io/repository/biocontainers/stranger/status
   :target: https://quay.io/repository/biocontainers/stranger
.. _`stranger/tags`: https://quay.io/repository/biocontainers/stranger?tab=tags


.. raw:: html

    <script>
        var package = "stranger";
        var versions = ["0.10.0","0.9.5","0.9.4","0.9.3","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stranger/README.html