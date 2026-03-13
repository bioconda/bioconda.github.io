:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shmlast'
.. highlight: bash

shmlast
=======

.. conda:recipe:: shmlast
   :replaces_section_title:
   :noindex:

   conditional reciprocal best hits with LAST

   :homepage: https://github.com/camillescott/shmlast
   :license: BSD-3-Clause
   :recipe: /`shmlast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast/meta.yaml>`_

   


.. conda:package:: shmlast

   |downloads_shmlast| |docker_shmlast|

   :versions:
      
      

      ``1.6-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends on doit: ``>=0.29.0``
   :depends on ficus: ``>=0.5``
   :depends on filelock: ``>=2.0.6``
   :depends on last: ``<=874``
   :depends on matplotlib-base: ``>=3``
   :depends on numexpr: ``>=2.3.1``
   :depends on numpy: ``>=1.9.0``
   :depends on ope: ``>=0.6``
   :depends on pandas: ``>=0.17.0``
   :depends on parallel: 
   :depends on python: ``>=3``
   :depends on scipy: ``>=0.16.0``
   :depends on screed: ``>=0.9``
   :depends on seaborn: ``>=0.6.0``

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

    pixi global install shmlast

to add into an existing workspace instead, run::

    pixi add shmlast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shmlast

Alternatively, to install into a new environment, run::

    conda create -n envname shmlast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shmlast:<tag>

(see `shmlast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shmlast| image:: https://img.shields.io/conda/dn/bioconda/shmlast.svg?style=flat
   :target: https://anaconda.org/bioconda/shmlast
   :alt:   (downloads)
.. |docker_shmlast| image:: https://quay.io/repository/biocontainers/shmlast/status
   :target: https://quay.io/repository/biocontainers/shmlast
.. _`shmlast/tags`: https://quay.io/repository/biocontainers/shmlast?tab=tags


.. raw:: html

    <script>
        var package = "shmlast";
        var versions = ["1.6","1.4","1.4","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shmlast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shmlast/README.html