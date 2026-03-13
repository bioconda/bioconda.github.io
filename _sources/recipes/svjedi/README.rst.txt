:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svjedi'
.. highlight: bash

svjedi
======

.. conda:recipe:: svjedi
   :replaces_section_title:
   :noindex:

   SVJedi is a structural variation \(SV\) genotyper for long read data.

   :homepage: https://github.com/llecompte/SVJedi
   :license: AGPL-3.0-or-later
   :recipe: /`svjedi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi/meta.yaml>`_

   


.. conda:package:: svjedi

   |downloads_svjedi| |docker_svjedi|

   :versions:
      
      

      ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.0-0``

      

   
   :depends on biopython: 
   :depends on minimap2: ``2.17.*``
   :depends on numpy: 
   :depends on python: ``>=3``

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

    pixi global install svjedi

to add into an existing workspace instead, run::

    pixi add svjedi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svjedi

Alternatively, to install into a new environment, run::

    conda create -n envname svjedi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svjedi:<tag>

(see `svjedi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svjedi| image:: https://img.shields.io/conda/dn/bioconda/svjedi.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi
   :alt:   (downloads)
.. |docker_svjedi| image:: https://quay.io/repository/biocontainers/svjedi/status
   :target: https://quay.io/repository/biocontainers/svjedi
.. _`svjedi/tags`: https://quay.io/repository/biocontainers/svjedi?tab=tags


.. raw:: html

    <script>
        var package = "svjedi";
        var versions = ["1.1.6","1.1.6","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svjedi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svjedi/README.html