:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biovalid'
.. highlight: bash

biovalid
========

.. conda:recipe:: biovalid
   :replaces_section_title:
   :noindex:

   Quick validation of common bioinformatics files in pure Python

   :homepage: https://github.com/RIVM-bioinformatics/biovalid
   :license: AGPL-3.0-or-later
   :recipe: /`biovalid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biovalid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biovalid/meta.yaml>`_

   


.. conda:package:: biovalid

   |downloads_biovalid| |docker_biovalid|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``

      

   
   :depends on python: ``>=3.10``

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

    pixi global install biovalid

to add into an existing workspace instead, run::

    pixi add biovalid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biovalid

Alternatively, to install into a new environment, run::

    conda create -n envname biovalid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biovalid:<tag>

(see `biovalid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biovalid| image:: https://img.shields.io/conda/dn/bioconda/biovalid.svg?style=flat
   :target: https://anaconda.org/bioconda/biovalid
   :alt:   (downloads)
.. |docker_biovalid| image:: https://quay.io/repository/biocontainers/biovalid/status
   :target: https://quay.io/repository/biocontainers/biovalid
.. _`biovalid/tags`: https://quay.io/repository/biocontainers/biovalid?tab=tags


.. raw:: html

    <script>
        var package = "biovalid";
        var versions = ["0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biovalid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biovalid/README.html