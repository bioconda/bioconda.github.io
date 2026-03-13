:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fithic'
.. highlight: bash

fithic
======

.. conda:recipe:: fithic
   :replaces_section_title:
   :noindex:

   Fit\-Hi\-C is a tool for assigning statistical confidence estimates to chromosomal contact maps produced by genome architecture assays.

   :homepage: https://github.com/ay-lab/fithic/tree/master
   :license: MIT
   :recipe: /`fithic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fithic/meta.yaml>`_

   


.. conda:package:: fithic

   |downloads_fithic| |docker_fithic|

   :versions:
      
      

      ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.2``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on sortedcontainers: 

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

    pixi global install fithic

to add into an existing workspace instead, run::

    pixi add fithic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fithic

Alternatively, to install into a new environment, run::

    conda create -n envname fithic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fithic:<tag>

(see `fithic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fithic| image:: https://img.shields.io/conda/dn/bioconda/fithic.svg?style=flat
   :target: https://anaconda.org/bioconda/fithic
   :alt:   (downloads)
.. |docker_fithic| image:: https://quay.io/repository/biocontainers/fithic/status
   :target: https://quay.io/repository/biocontainers/fithic
.. _`fithic/tags`: https://quay.io/repository/biocontainers/fithic?tab=tags


.. raw:: html

    <script>
        var package = "fithic";
        var versions = ["2.0.8","2.0.8","2.0.7","2.0.6","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fithic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fithic/README.html