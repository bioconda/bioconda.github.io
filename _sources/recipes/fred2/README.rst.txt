:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fred2'
.. highlight: bash

fred2
=====

.. conda:recipe:: fred2
   :replaces_section_title:
   :noindex:

   Python\-based framework for computational immunomics.

   :homepage: https://fred-2.github.io
   :license: BSD
   :recipe: /`fred2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2/meta.yaml>`_

   


.. conda:package:: fred2

   |downloads_fred2| |docker_fred2|

   :versions:
      
      

      ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-1``,  ``2.0.2-2``,  ``2.0.2-1``

      

   
   :depends on biopython: 
   :depends on pandas: 
   :depends on pymysql: 
   :depends on pyomo: 
   :depends on pysvmlight: 
   :depends on python: ``<3``
   :depends on pyvcf: 
   :depends on svmlight: 

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

    pixi global install fred2

to add into an existing workspace instead, run::

    pixi add fred2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fred2

Alternatively, to install into a new environment, run::

    conda create -n envname fred2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fred2:<tag>

(see `fred2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fred2| image:: https://img.shields.io/conda/dn/bioconda/fred2.svg?style=flat
   :target: https://anaconda.org/bioconda/fred2
   :alt:   (downloads)
.. |docker_fred2| image:: https://quay.io/repository/biocontainers/fred2/status
   :target: https://quay.io/repository/biocontainers/fred2
.. _`fred2/tags`: https://quay.io/repository/biocontainers/fred2?tab=tags


.. raw:: html

    <script>
        var package = "fred2";
        var versions = ["2.0.7","2.0.6","2.0.5","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fred2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fred2/README.html