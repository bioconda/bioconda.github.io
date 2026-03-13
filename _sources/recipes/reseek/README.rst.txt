:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reseek'
.. highlight: bash

reseek
======

.. conda:recipe:: reseek
   :replaces_section_title:
   :noindex:

   Protein structure alignment and search algorithm.

   :homepage: https://github.com/rcedgar/reseek
   :documentation: https://drive5.com/reseek/doc.html
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`reseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseek/meta.yaml>`_

   


.. conda:package:: reseek

   |downloads_reseek| |docker_reseek|

   :versions:
      
      

      ``2.6.1-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.02-0``,  ``2.0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install reseek

to add into an existing workspace instead, run::

    pixi add reseek

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reseek

Alternatively, to install into a new environment, run::

    conda create -n envname reseek

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reseek:<tag>

(see `reseek/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reseek| image:: https://img.shields.io/conda/dn/bioconda/reseek.svg?style=flat
   :target: https://anaconda.org/bioconda/reseek
   :alt:   (downloads)
.. |docker_reseek| image:: https://quay.io/repository/biocontainers/reseek/status
   :target: https://quay.io/repository/biocontainers/reseek
.. _`reseek/tags`: https://quay.io/repository/biocontainers/reseek?tab=tags


.. raw:: html

    <script>
        var package = "reseek";
        var versions = ["2.6.1","2.5","2.4","2.3","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reseek/README.html