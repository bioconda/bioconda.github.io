:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blaze2'
.. highlight: bash

blaze2
======

.. conda:recipe:: blaze2
   :replaces_section_title:
   :noindex:

   Barcode identification from \(Nanopore\) Long reads for AnalyZing single\-cell gene Expression.

   :homepage: https://github.com/shimlab/BLAZE
   :documentation: https://github.com/shimlab/BLAZE/blob/v2.5.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`blaze2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blaze2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blaze2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-023-02907-y`

   


.. conda:package:: blaze2

   |downloads_blaze2| |docker_blaze2|

   :versions:
      
      

      ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.1-0``

      

   
   :depends on fast-edit-distance: ``1.2.1``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on tqdm: 

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

    pixi global install blaze2

to add into an existing workspace instead, run::

    pixi add blaze2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blaze2

Alternatively, to install into a new environment, run::

    conda create -n envname blaze2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blaze2:<tag>

(see `blaze2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blaze2| image:: https://img.shields.io/conda/dn/bioconda/blaze2.svg?style=flat
   :target: https://anaconda.org/bioconda/blaze2
   :alt:   (downloads)
.. |docker_blaze2| image:: https://quay.io/repository/biocontainers/blaze2/status
   :target: https://quay.io/repository/biocontainers/blaze2
.. _`blaze2/tags`: https://quay.io/repository/biocontainers/blaze2?tab=tags


.. raw:: html

    <script>
        var package = "blaze2";
        var versions = ["2.5.1","2.5.0","2.4.0","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blaze2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blaze2/README.html