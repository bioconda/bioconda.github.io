:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carnac-lr'
.. highlight: bash

carnac-lr
=========

.. conda:recipe:: carnac-lr
   :replaces_section_title:
   :noindex:

   Clustering coefficient\-based Acquisition of RNA Communities in Long Read

   :homepage: https://github.com/kamimrcht/CARNAC-LR
   :license: AGPL / GNU Affero General Public License
   :recipe: /`carnac-lr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr/meta.yaml>`_

   


.. conda:package:: carnac-lr

   |downloads_carnac-lr| |docker_carnac-lr|

   :versions:
      
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3``

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

    pixi global install carnac-lr

to add into an existing workspace instead, run::

    pixi add carnac-lr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install carnac-lr

Alternatively, to install into a new environment, run::

    conda create -n envname carnac-lr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/carnac-lr:<tag>

(see `carnac-lr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_carnac-lr| image:: https://img.shields.io/conda/dn/bioconda/carnac-lr.svg?style=flat
   :target: https://anaconda.org/bioconda/carnac-lr
   :alt:   (downloads)
.. |docker_carnac-lr| image:: https://quay.io/repository/biocontainers/carnac-lr/status
   :target: https://quay.io/repository/biocontainers/carnac-lr
.. _`carnac-lr/tags`: https://quay.io/repository/biocontainers/carnac-lr?tab=tags


.. raw:: html

    <script>
        var package = "carnac-lr";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carnac-lr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carnac-lr/README.html