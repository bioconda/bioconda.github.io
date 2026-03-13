:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantbreak'
.. highlight: bash

variantbreak
============

.. conda:recipe:: variantbreak
   :replaces_section_title:
   :noindex:

   Structural variant analyzer for data visualization on VariantMap

   :homepage: https://github.com/cytham/variantbreak
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantbreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak/meta.yaml>`_

   


.. conda:package:: variantbreak

   |downloads_variantbreak| |docker_variantbreak|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on bedtools: ``>=2.26.0``
   :depends on fastcluster: ``>=1.1.26``
   :depends on numpy: ``>=1.18.3``
   :depends on pandas: ``>=1.0.3``
   :depends on pybedtools: ``>=0.8.1``
   :depends on pysam: ``>=0.15.3``
   :depends on pytables: ``>=3.6.1``
   :depends on python: ``>=3.6``

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

    pixi global install variantbreak

to add into an existing workspace instead, run::

    pixi add variantbreak

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install variantbreak

Alternatively, to install into a new environment, run::

    conda create -n envname variantbreak

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/variantbreak:<tag>

(see `variantbreak/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_variantbreak| image:: https://img.shields.io/conda/dn/bioconda/variantbreak.svg?style=flat
   :target: https://anaconda.org/bioconda/variantbreak
   :alt:   (downloads)
.. |docker_variantbreak| image:: https://quay.io/repository/biocontainers/variantbreak/status
   :target: https://quay.io/repository/biocontainers/variantbreak
.. _`variantbreak/tags`: https://quay.io/repository/biocontainers/variantbreak?tab=tags


.. raw:: html

    <script>
        var package = "variantbreak";
        var versions = ["1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantbreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantbreak/README.html