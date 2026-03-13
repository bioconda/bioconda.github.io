:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gneiss'
.. highlight: bash

gneiss
======

.. conda:recipe:: gneiss
   :replaces_section_title:
   :noindex:

   Compositional data analysis tools and visualizations

   :homepage: https://biocore.github.io/gneiss/
   :license: BSD / BSD
   :recipe: /`gneiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss/meta.yaml>`_

   


.. conda:package:: gneiss

   |downloads_gneiss| |docker_gneiss|

   :versions:
      
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      

   
   :depends on biom-format: 
   :depends on bokeh: 
   :depends on ipython: ``>=3.2.0``
   :depends on matplotlib: ``>=1.4.3``
   :depends on nose: ``>=1.3.7``
   :depends on numpy: ``>=1.9.2``
   :depends on pandas: ``>=0.18.0``
   :depends on python: ``>3``
   :depends on scikit-bio: ``>=0.5.1``
   :depends on scipy: ``>=0.15.1``
   :depends on seaborn: 
   :depends on statsmodels: ``>=0.8.0``

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

    pixi global install gneiss

to add into an existing workspace instead, run::

    pixi add gneiss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gneiss

Alternatively, to install into a new environment, run::

    conda create -n envname gneiss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gneiss:<tag>

(see `gneiss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gneiss| image:: https://img.shields.io/conda/dn/bioconda/gneiss.svg?style=flat
   :target: https://anaconda.org/bioconda/gneiss
   :alt:   (downloads)
.. |docker_gneiss| image:: https://quay.io/repository/biocontainers/gneiss/status
   :target: https://quay.io/repository/biocontainers/gneiss
.. _`gneiss/tags`: https://quay.io/repository/biocontainers/gneiss?tab=tags


.. raw:: html

    <script>
        var package = "gneiss";
        var versions = ["0.4.6","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gneiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gneiss/README.html