:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atactk'
.. highlight: bash

atactk
======

.. conda:recipe:: atactk
   :replaces_section_title:
   :noindex:

   A toolkit for working with ATAC\-seq data.

   :homepage: http://theparkerlab.org/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`atactk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk/meta.yaml>`_

   


.. conda:package:: atactk

   |downloads_atactk| |docker_atactk|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends on pysam: ``>=0.15.0``
   :depends on python: 
   :depends on python-levenshtein: 
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-rcolorbrewer: 
   :depends on sexpdata: 

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

    pixi global install atactk

to add into an existing workspace instead, run::

    pixi add atactk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atactk

Alternatively, to install into a new environment, run::

    conda create -n envname atactk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atactk:<tag>

(see `atactk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atactk| image:: https://img.shields.io/conda/dn/bioconda/atactk.svg?style=flat
   :target: https://anaconda.org/bioconda/atactk
   :alt:   (downloads)
.. |docker_atactk| image:: https://quay.io/repository/biocontainers/atactk/status
   :target: https://quay.io/repository/biocontainers/atactk
.. _`atactk/tags`: https://quay.io/repository/biocontainers/atactk?tab=tags


.. raw:: html

    <script>
        var package = "atactk";
        var versions = ["0.1.9","0.1.6","0.1.6","0.1.6","0.1.6"];
    </script>





Notes
-----
Adds 3 scripts\, namely \"trim\_adapters\"\, \"make\_cut\_matrix\" and \"plot\_aggregate\_matrix.R\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atactk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atactk/README.html