:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mango'
.. highlight: bash

mango
=====

.. conda:recipe:: mango
   :replaces_section_title:
   :noindex:

   A scalable genomic visualization tool

   :homepage: https://github.com/bdgenomics/mango
   :documentation: https://bdg-mango.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/bigdatagenomics/mango
   :license: Apache 2
   :recipe: /`mango <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango/meta.yaml>`_

   


.. conda:package:: mango

   |downloads_mango| |docker_mango|

   :versions:
      
      

      ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends on cigar: ``0.1.3``
   :depends on dask: 
   :depends on distributed: 
   :depends on ipykernel: ``>=5.1.2``
   :depends on ipython: ``7.8.0``
   :depends on ipywidgets: ``7.0.0``
   :depends on matplotlib: ``2.0.2``
   :depends on modin: 
   :depends on openjdk: ``>=8,<9``
   :depends on psutil: 
   :depends on pyspark: ``2.4.4``
   :depends on python: ``>3``
   :depends on traitlets: ``>=4.3.0,<5.0``
   :depends on traittypes: ``>=0.0.6``
   :depends on widgetsnbextension: ``>=3.5.0``

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

    pixi global install mango

to add into an existing workspace instead, run::

    pixi add mango

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mango

Alternatively, to install into a new environment, run::

    conda create -n envname mango

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mango:<tag>

(see `mango/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mango| image:: https://img.shields.io/conda/dn/bioconda/mango.svg?style=flat
   :target: https://anaconda.org/bioconda/mango
   :alt:   (downloads)
.. |docker_mango| image:: https://quay.io/repository/biocontainers/mango/status
   :target: https://quay.io/repository/biocontainers/mango
.. _`mango/tags`: https://quay.io/repository/biocontainers/mango?tab=tags


.. raw:: html

    <script>
        var package = "mango";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mango/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mango/README.html