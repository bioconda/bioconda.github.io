:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitubam'
.. highlight: bash

splitubam
=========

.. conda:recipe:: splitubam
   :replaces_section_title:
   :noindex:

   Split one ubam into multiple\, per line\, fast

   :homepage: https://github.com/fellen31/splitubam
   :license: MIT / MIT
   :recipe: /`splitubam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitubam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitubam/meta.yaml>`_

   


.. conda:package:: splitubam

   |downloads_splitubam| |docker_splitubam|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install splitubam

to add into an existing workspace instead, run::

    pixi add splitubam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install splitubam

Alternatively, to install into a new environment, run::

    conda create -n envname splitubam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/splitubam:<tag>

(see `splitubam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_splitubam| image:: https://img.shields.io/conda/dn/bioconda/splitubam.svg?style=flat
   :target: https://anaconda.org/bioconda/splitubam
   :alt:   (downloads)
.. |docker_splitubam| image:: https://quay.io/repository/biocontainers/splitubam/status
   :target: https://quay.io/repository/biocontainers/splitubam
.. _`splitubam/tags`: https://quay.io/repository/biocontainers/splitubam?tab=tags


.. raw:: html

    <script>
        var package = "splitubam";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitubam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitubam/README.html