:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baczy'
.. highlight: bash

baczy
=====

.. conda:recipe:: baczy
   :replaces_section_title:
   :noindex:

   Bacterial toolkit

   :homepage: https://github.com/npbhavya/baczy/
   :documentation: https://github.com/npbhavya/baczy
   
   :developer docs: https://github.com/npbhavya/baczy
   :license: MIT / MIT
   :recipe: /`baczy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baczy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baczy/meta.yaml>`_

   Bacterial genome analysis workflow that identifies antibiotic resistance\, defense mechanisms\, virulence factors\, prophages\, and capsule\-related genes.


.. conda:package:: baczy

   |downloads_baczy| |docker_baczy|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends on attrmap: ``>=0.0.7``
   :depends on biopython: ``>=1.8.1``
   :depends on click: ``>=8.1.3``
   :depends on jinja2: ``>=3.0.2``
   :depends on metasnek: ``>=0.0.4``
   :depends on pandas: 
   :depends on python: ``<3.12``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.14.0``
   :depends on snaketool-utils: ``>=0.0.4``

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

    pixi global install baczy

to add into an existing workspace instead, run::

    pixi add baczy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install baczy

Alternatively, to install into a new environment, run::

    conda create -n envname baczy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/baczy:<tag>

(see `baczy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_baczy| image:: https://img.shields.io/conda/dn/bioconda/baczy.svg?style=flat
   :target: https://anaconda.org/bioconda/baczy
   :alt:   (downloads)
.. |docker_baczy| image:: https://quay.io/repository/biocontainers/baczy/status
   :target: https://quay.io/repository/biocontainers/baczy
.. _`baczy/tags`: https://quay.io/repository/biocontainers/baczy?tab=tags


.. raw:: html

    <script>
        var package = "baczy";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baczy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baczy/README.html