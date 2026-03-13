:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selenzy_wrapper'
.. highlight: bash

selenzy_wrapper
===============

.. conda:recipe:: selenzy_wrapper
   :replaces_section_title:
   :noindex:

   Python wrapper of selenzy tool

   :homepage: https://github.com/brsynth/selenzy-wrapper
   :license: MIT
   :recipe: /`selenzy_wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selenzy_wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selenzy_wrapper/meta.yaml>`_

   


.. conda:package:: selenzy_wrapper

   |downloads_selenzy_wrapper| |docker_selenzy_wrapper|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends on biopython: ``>1.70,<=1.77``
   :depends on brs_utils: 
   :depends on emboss: 
   :depends on python: ``>=3.7,<3.10``
   :depends on rptools: ``>=6.2.3``

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

    pixi global install selenzy_wrapper

to add into an existing workspace instead, run::

    pixi add selenzy_wrapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install selenzy_wrapper

Alternatively, to install into a new environment, run::

    conda create -n envname selenzy_wrapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/selenzy_wrapper:<tag>

(see `selenzy_wrapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_selenzy_wrapper| image:: https://img.shields.io/conda/dn/bioconda/selenzy_wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/selenzy_wrapper
   :alt:   (downloads)
.. |docker_selenzy_wrapper| image:: https://quay.io/repository/biocontainers/selenzy_wrapper/status
   :target: https://quay.io/repository/biocontainers/selenzy_wrapper
.. _`selenzy_wrapper/tags`: https://quay.io/repository/biocontainers/selenzy_wrapper?tab=tags


.. raw:: html

    <script>
        var package = "selenzy_wrapper";
        var versions = ["0.3.0","0.3.0","0.2.0","0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selenzy_wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selenzy_wrapper/README.html