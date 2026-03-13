:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strcount'
.. highlight: bash

strcount
========

.. conda:recipe:: strcount
   :replaces_section_title:
   :noindex:

   A package to count the number of repeats in a Short Tandem Repeat Expansion from long reads.

   :homepage: https://github.com/sabiqali/strcount
   :license: MIT / MIT
   :recipe: /`strcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strcount/meta.yaml>`_

   


.. conda:package:: strcount

   |downloads_strcount| |docker_strcount|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on pysam: 
   :depends on python: 

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

    pixi global install strcount

to add into an existing workspace instead, run::

    pixi add strcount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strcount

Alternatively, to install into a new environment, run::

    conda create -n envname strcount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strcount:<tag>

(see `strcount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strcount| image:: https://img.shields.io/conda/dn/bioconda/strcount.svg?style=flat
   :target: https://anaconda.org/bioconda/strcount
   :alt:   (downloads)
.. |docker_strcount| image:: https://quay.io/repository/biocontainers/strcount/status
   :target: https://quay.io/repository/biocontainers/strcount
.. _`strcount/tags`: https://quay.io/repository/biocontainers/strcount?tab=tags


.. raw:: html

    <script>
        var package = "strcount";
        var versions = ["0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strcount/README.html