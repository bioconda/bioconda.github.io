:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimeo'
.. highlight: bash

mimeo
=====

.. conda:recipe:: mimeo
   :replaces_section_title:
   :noindex:

   Scan genomes for internally repeated sequences\, elements which are repetitive in another species\, or high\-identity HGT candidate regions between species.

   :homepage: https://github.com/Adamtaranto/mimeo
   :documentation: https://adamtaranto.github.io/mimeo
   
   :license: MIT / MIT
   :recipe: /`mimeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo/meta.yaml>`_

   


.. conda:package:: mimeo

   |downloads_mimeo| |docker_mimeo|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on pandas: ``>=0.20.3``
   :depends on python: ``>=3.8``
   :depends on rich: 

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

    pixi global install mimeo

to add into an existing workspace instead, run::

    pixi add mimeo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mimeo

Alternatively, to install into a new environment, run::

    conda create -n envname mimeo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mimeo:<tag>

(see `mimeo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mimeo| image:: https://img.shields.io/conda/dn/bioconda/mimeo.svg?style=flat
   :target: https://anaconda.org/bioconda/mimeo
   :alt:   (downloads)
.. |docker_mimeo| image:: https://quay.io/repository/biocontainers/mimeo/status
   :target: https://quay.io/repository/biocontainers/mimeo
.. _`mimeo/tags`: https://quay.io/repository/biocontainers/mimeo?tab=tags


.. raw:: html

    <script>
        var package = "mimeo";
        var versions = ["1.2.1","1.2.0","1.1.2","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimeo/README.html