:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seacells'
.. highlight: bash

seacells
========

.. conda:recipe:: seacells
   :replaces_section_title:
   :noindex:

   SEACells algorithm for Inference of transcriptional and epigenomic cellular states from single\-cell genomics data.

   :homepage: https://github.com/dpeerlab/SEACells
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seacells <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacells>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacells/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01716-9`

   


.. conda:package:: seacells

   |downloads_seacells| |docker_seacells|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends on anndata: 
   :depends on numba: ``>=0.51.2``
   :depends on numpy: 
   :depends on palantir: 
   :depends on pandas: 
   :depends on pyranges: 
   :depends on python: ``>=3.8``
   :depends on scanpy: ``>1.8``
   :depends on scipy: ``>=1.5``

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

    pixi global install seacells

to add into an existing workspace instead, run::

    pixi add seacells

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seacells

Alternatively, to install into a new environment, run::

    conda create -n envname seacells

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seacells:<tag>

(see `seacells/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seacells| image:: https://img.shields.io/conda/dn/bioconda/seacells.svg?style=flat
   :target: https://anaconda.org/bioconda/seacells
   :alt:   (downloads)
.. |docker_seacells| image:: https://quay.io/repository/biocontainers/seacells/status
   :target: https://quay.io/repository/biocontainers/seacells
.. _`seacells/tags`: https://quay.io/repository/biocontainers/seacells?tab=tags


.. raw:: html

    <script>
        var package = "seacells";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seacells/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seacells/README.html