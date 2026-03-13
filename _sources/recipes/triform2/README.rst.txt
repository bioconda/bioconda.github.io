:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'triform2'
.. highlight: bash

triform2
========

.. conda:recipe:: triform2
   :replaces_section_title:
   :noindex:

   Improved sensitivity\, specificity and control of false discovery rates in ChIP\-Seq peak finding.

   :homepage: http://github.com/endrebak/epic
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`triform2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2/meta.yaml>`_

   


.. conda:package:: triform2

   |downloads_triform2| |docker_triform2|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bx-python: 
   :depends on joblib: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends on rpy2: ``>=2.4.2``
   :depends on scipy: 

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

    pixi global install triform2

to add into an existing workspace instead, run::

    pixi add triform2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install triform2

Alternatively, to install into a new environment, run::

    conda create -n envname triform2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/triform2:<tag>

(see `triform2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_triform2| image:: https://img.shields.io/conda/dn/bioconda/triform2.svg?style=flat
   :target: https://anaconda.org/bioconda/triform2
   :alt:   (downloads)
.. |docker_triform2| image:: https://quay.io/repository/biocontainers/triform2/status
   :target: https://quay.io/repository/biocontainers/triform2
.. _`triform2/tags`: https://quay.io/repository/biocontainers/triform2?tab=tags


.. raw:: html

    <script>
        var package = "triform2";
        var versions = ["0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triform2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triform2/README.html