:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apoc'
.. highlight: bash

apoc
====

.. conda:recipe:: apoc
   :replaces_section_title:
   :noindex:

   Large\-scale structural comparison of protein pockets

   :homepage: http://cssb.biology.gatech.edu/APoc
   :license: This software is freely available to ALL users.
   :recipe: /`apoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc/meta.yaml>`_

   


.. conda:package:: apoc

   |downloads_apoc| |docker_apoc|

   :versions:
      
      

      ``1b16-5``,  ``1b16-4``,  ``1b16-3``,  ``1b16-2``,  ``1b16-1``,  ``1b16-0``

      

   
   :depends on libgfortran: ``5.*``
   :depends on libgfortran5: ``>=9.3.0``

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

    pixi global install apoc

to add into an existing workspace instead, run::

    pixi add apoc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install apoc

Alternatively, to install into a new environment, run::

    conda create -n envname apoc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/apoc:<tag>

(see `apoc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_apoc| image:: https://img.shields.io/conda/dn/bioconda/apoc.svg?style=flat
   :target: https://anaconda.org/bioconda/apoc
   :alt:   (downloads)
.. |docker_apoc| image:: https://quay.io/repository/biocontainers/apoc/status
   :target: https://quay.io/repository/biocontainers/apoc
.. _`apoc/tags`: https://quay.io/repository/biocontainers/apoc?tab=tags


.. raw:: html

    <script>
        var package = "apoc";
        var versions = ["1b16","1b16","1b16","1b16","1b16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apoc/README.html