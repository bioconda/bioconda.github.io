:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemma'
.. highlight: bash

gemma
=====

.. conda:recipe:: gemma
   :replaces_section_title:
   :noindex:

   Linear mixed models \(LMMs\) for genome\-wide association \(GWA\)

   :homepage: https://github.com/genetics-statistics/GEMMA
   :license: GPLv3
   :recipe: /`gemma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemma/meta.yaml>`_

   


.. conda:package:: gemma

   |downloads_gemma| |docker_gemma|

   :versions:
      
      

      ``0.98.5-0``,  ``0.98.3-1``,  ``0.98.3-0``,  ``0.98.1-1``,  ``0.98.1-0``,  ``0.98-0``

      

   
   :depends on gsl: ``>=2.8,<2.9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openblas: 

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

    pixi global install gemma

to add into an existing workspace instead, run::

    pixi add gemma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gemma

Alternatively, to install into a new environment, run::

    conda create -n envname gemma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gemma:<tag>

(see `gemma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gemma| image:: https://img.shields.io/conda/dn/bioconda/gemma.svg?style=flat
   :target: https://anaconda.org/bioconda/gemma
   :alt:   (downloads)
.. |docker_gemma| image:: https://quay.io/repository/biocontainers/gemma/status
   :target: https://quay.io/repository/biocontainers/gemma
.. _`gemma/tags`: https://quay.io/repository/biocontainers/gemma?tab=tags


.. raw:: html

    <script>
        var package = "gemma";
        var versions = ["0.98.5","0.98.3","0.98.3","0.98.1","0.98.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemma/README.html