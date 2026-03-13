:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwise'
.. highlight: bash

bwise
=====

.. conda:recipe:: bwise
   :replaces_section_title:
   :noindex:

   BWISE is a de Bruijn assembly Workflow using Integral information of Short paired\-End reads

   :homepage: https://github.com/Malfoy/BWISE
   :license: AGPL-3.0
   :recipe: /`bwise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise/meta.yaml>`_

   


.. conda:package:: bwise

   |downloads_bwise| |docker_bwise|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bcalm: 
   :depends on bgreat: 
   :depends on btrim: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on python: ``>=3``
   :depends on zlib: 

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

    pixi global install bwise

to add into an existing workspace instead, run::

    pixi add bwise

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bwise

Alternatively, to install into a new environment, run::

    conda create -n envname bwise

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bwise:<tag>

(see `bwise/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bwise| image:: https://img.shields.io/conda/dn/bioconda/bwise.svg?style=flat
   :target: https://anaconda.org/bioconda/bwise
   :alt:   (downloads)
.. |docker_bwise| image:: https://quay.io/repository/biocontainers/bwise/status
   :target: https://quay.io/repository/biocontainers/bwise
.. _`bwise/tags`: https://quay.io/repository/biocontainers/bwise?tab=tags


.. raw:: html

    <script>
        var package = "bwise";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwise/README.html