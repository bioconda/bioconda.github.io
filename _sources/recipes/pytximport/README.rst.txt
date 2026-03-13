:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytximport'
.. highlight: bash

pytximport
==========

.. conda:recipe:: pytximport
   :replaces_section_title:
   :noindex:

   pytximport \- gene count estimation from transcript\-level quantification

   :homepage: https://pytximport.readthedocs.io/en/stable/start.html
   :documentation: https://pytximport.readthedocs.io
   
   :developer docs: https://github.com/complextissue/pytximport
   :license: GPL / GPL-3.0-only
   :recipe: /`pytximport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytximport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytximport/meta.yaml>`_

   pytximport is a Python port of tximport that allows users to import transcript counts from tools such as kallisto and Salmon\, correct them for differential isoform usage\, and summarize them at the gene level.



.. conda:package:: pytximport

   |downloads_pytximport| |docker_pytximport|

   :versions:
      
      

      ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends on anndata: ``>=0.11.0``
   :depends on click: ``>=8.0.0,<9``
   :depends on click-default-group: ``>=1.2.0,<2``
   :depends on flox: ``>=0.10.0,<0.11.0``
   :depends on h5py: ``>=3.0.0,<4``
   :depends on numpy: ``>=2.0.0,<3``
   :depends on pandas: ``>=2.2.0,<4``
   :depends on pybiomart: ``0.2.0.*``
   :depends on python: ``>=3.11``
   :depends on tqdm: ``>=4.0.0,<5``
   :depends on xarray: ``>=2024.0.0``

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

    pixi global install pytximport

to add into an existing workspace instead, run::

    pixi add pytximport

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytximport

Alternatively, to install into a new environment, run::

    conda create -n envname pytximport

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytximport:<tag>

(see `pytximport/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytximport| image:: https://img.shields.io/conda/dn/bioconda/pytximport.svg?style=flat
   :target: https://anaconda.org/bioconda/pytximport
   :alt:   (downloads)
.. |docker_pytximport| image:: https://quay.io/repository/biocontainers/pytximport/status
   :target: https://quay.io/repository/biocontainers/pytximport
.. _`pytximport/tags`: https://quay.io/repository/biocontainers/pytximport?tab=tags


.. raw:: html

    <script>
        var package = "pytximport";
        var versions = ["0.13.0","0.12.0","0.11.0","0.10.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytximport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytximport/README.html