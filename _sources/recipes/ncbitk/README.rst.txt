:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbitk'
.. highlight: bash

ncbitk
======

.. conda:recipe:: ncbitk
   :replaces_section_title:
   :noindex:

   A tool kit for accessing NCBI\'s GenBank

   :homepage: https://github.com/andrewsanchez/NCBITK
   :license: MIT / MIT License
   :recipe: /`ncbitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk/meta.yaml>`_

   


.. conda:package:: ncbitk

   |downloads_ncbitk| |docker_ncbitk|

   :versions:
      
      

      ``1.0a17-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on click: 
   :depends on numpy: ``>=1.12.0``
   :depends on pandas: ``>=0.19.2``
   :depends on python: ``>=3``
   :depends on python-dateutil: ``>=2.6.0``
   :depends on pytz: ``>=2016.10``
   :depends on six: ``>=1.10.0``

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

    pixi global install ncbitk

to add into an existing workspace instead, run::

    pixi add ncbitk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbitk

Alternatively, to install into a new environment, run::

    conda create -n envname ncbitk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbitk:<tag>

(see `ncbitk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbitk| image:: https://img.shields.io/conda/dn/bioconda/ncbitk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbitk
   :alt:   (downloads)
.. |docker_ncbitk| image:: https://quay.io/repository/biocontainers/ncbitk/status
   :target: https://quay.io/repository/biocontainers/ncbitk
.. _`ncbitk/tags`: https://quay.io/repository/biocontainers/ncbitk?tab=tags


.. raw:: html

    <script>
        var package = "ncbitk";
        var versions = ["1.0a17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbitk/README.html