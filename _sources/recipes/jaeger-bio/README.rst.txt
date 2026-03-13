:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jaeger-bio'
.. highlight: bash

jaeger-bio
==========

.. conda:recipe:: jaeger-bio
   :replaces_section_title:
   :noindex:

   A quick and precise pipeline for detecting phages in sequence assemblies.

   :homepage: https://github.com/Yasas1994/Jaeger
   :documentation: https://readthedocs.org/projects/jaeger-docs/
   
   :license: MIT / MIT
   :recipe: /`jaeger-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaeger-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaeger-bio/meta.yaml>`_

   


.. conda:package:: jaeger-bio

   |downloads_jaeger-bio| |docker_jaeger-bio|

   :versions:
      
      

      ``1.1.30-0``,  ``1.1.26-0``

      

   
   :depends on h5py: ``>=3.8``
   :depends on kneed: ``>=0.8.5``
   :depends on matplotlib-base: ``>=3.7``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=1.5``
   :depends on parasail-python: ``>=1.3.4``
   :depends on progressbar2: ``>=4.4.2``
   :depends on psutil: ``>=5``
   :depends on pycirclize: 
   :depends on pyfastx: ``>=2``
   :depends on python: ``>=3.9,<3.12``
   :depends on ruptures: ``>=1.1.9``
   :depends on scikit-learn: ``1.3.2``
   :depends on tensorflow: ``>=2.15,<2.16``

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

    pixi global install jaeger-bio

to add into an existing workspace instead, run::

    pixi add jaeger-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jaeger-bio

Alternatively, to install into a new environment, run::

    conda create -n envname jaeger-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jaeger-bio:<tag>

(see `jaeger-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jaeger-bio| image:: https://img.shields.io/conda/dn/bioconda/jaeger-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/jaeger-bio
   :alt:   (downloads)
.. |docker_jaeger-bio| image:: https://quay.io/repository/biocontainers/jaeger-bio/status
   :target: https://quay.io/repository/biocontainers/jaeger-bio
.. _`jaeger-bio/tags`: https://quay.io/repository/biocontainers/jaeger-bio?tab=tags


.. raw:: html

    <script>
        var package = "jaeger-bio";
        var versions = ["1.1.30","1.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaeger-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaeger-bio/README.html