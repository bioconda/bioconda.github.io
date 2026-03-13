:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ideas'
.. highlight: bash

ideas
=====

.. conda:recipe:: ideas/1.20
   :replaces_section_title:
   :noindex:

   A method for jointly and quantitatively characterizing multivariate epigenetic landscapes in many cell types\, tissues or conditions.

   :homepage: https://github.com/yuzhang123/IDEAS
   :license: MIT
   :recipe: /`ideas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas>`_/`1.20 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas/1.20>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ideas/1.20/meta.yaml>`_

   


.. conda:package:: ideas

   |downloads_ideas| |docker_ideas|

   :versions:
      
      

      ``1.20-7``,  ``1.20-6``,  ``1.20-5``,  ``1.20-4``,  ``1.20-3``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mkl: 

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

    pixi global install ideas

to add into an existing workspace instead, run::

    pixi add ideas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ideas

Alternatively, to install into a new environment, run::

    conda create -n envname ideas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ideas:<tag>

(see `ideas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ideas| image:: https://img.shields.io/conda/dn/bioconda/ideas.svg?style=flat
   :target: https://anaconda.org/bioconda/ideas
   :alt:   (downloads)
.. |docker_ideas| image:: https://quay.io/repository/biocontainers/ideas/status
   :target: https://quay.io/repository/biocontainers/ideas
.. _`ideas/tags`: https://quay.io/repository/biocontainers/ideas?tab=tags


.. raw:: html

    <script>
        var package = "ideas";
        var versions = ["1.20","1.20","1.20","1.20","1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ideas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ideas/README.html