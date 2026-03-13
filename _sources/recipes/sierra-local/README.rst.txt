:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sierra-local'
.. highlight: bash

sierra-local
============

.. conda:recipe:: sierra-local
   :replaces_section_title:
   :noindex:

   sierra\-local is a Python3 implementation of the Stanford HIVdb Sierra service for generating drug resistance predictions from HIV\-1 sequences.

   :homepage: https://github.com/PoonLab/sierra-local
   :license: GPL3 / GPLv3
   :recipe: /`sierra-local <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierra-local>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierra-local/meta.yaml>`_

   


.. conda:package:: sierra-local

   |downloads_sierra-local| |docker_sierra-local|

   :versions:
      
      

      ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``

      

   
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on requests: 

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

    pixi global install sierra-local

to add into an existing workspace instead, run::

    pixi add sierra-local

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sierra-local

Alternatively, to install into a new environment, run::

    conda create -n envname sierra-local

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sierra-local:<tag>

(see `sierra-local/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sierra-local| image:: https://img.shields.io/conda/dn/bioconda/sierra-local.svg?style=flat
   :target: https://anaconda.org/bioconda/sierra-local
   :alt:   (downloads)
.. |docker_sierra-local| image:: https://quay.io/repository/biocontainers/sierra-local/status
   :target: https://quay.io/repository/biocontainers/sierra-local
.. _`sierra-local/tags`: https://quay.io/repository/biocontainers/sierra-local?tab=tags


.. raw:: html

    <script>
        var package = "sierra-local";
        var versions = ["0.4.4","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sierra-local/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sierra-local/README.html