:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illuminate'
.. highlight: bash

illuminate
==========

.. conda:recipe:: illuminate
   :replaces_section_title:
   :noindex:

   Analytics toolkit for Illumina sequencer metrics.

   :homepage: https://bitbucket.org/invitae/illuminate
   :license: MIT / MIT
   :recipe: /`illuminate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate/meta.yaml>`_
   :links: biotools: :biotools:`illuminate`

   


.. conda:package:: illuminate

   |downloads_illuminate| |docker_illuminate|

   :versions:
      
      

      ``0.6.3-0``

      

   
   :depends on bitstring: ``>=3.1.0``
   :depends on docopt: 
   :depends on numpy: ``>=1.6.2``
   :depends on openpyxl: ``==1.8.6``
   :depends on pandas: ``>=0.14``
   :depends on python: ``2.7*``
   :depends on xmltodict: 

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

    pixi global install illuminate

to add into an existing workspace instead, run::

    pixi add illuminate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install illuminate

Alternatively, to install into a new environment, run::

    conda create -n envname illuminate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/illuminate:<tag>

(see `illuminate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_illuminate| image:: https://img.shields.io/conda/dn/bioconda/illuminate.svg?style=flat
   :target: https://anaconda.org/bioconda/illuminate
   :alt:   (downloads)
.. |docker_illuminate| image:: https://quay.io/repository/biocontainers/illuminate/status
   :target: https://quay.io/repository/biocontainers/illuminate
.. _`illuminate/tags`: https://quay.io/repository/biocontainers/illuminate?tab=tags


.. raw:: html

    <script>
        var package = "illuminate";
        var versions = ["0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illuminate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illuminate/README.html