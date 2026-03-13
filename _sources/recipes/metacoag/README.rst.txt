:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacoag'
.. highlight: bash

metacoag
========

.. conda:recipe:: metacoag
   :replaces_section_title:
   :noindex:

   MetaCoAG\: Binning Metagenomic Contigs via Composition\, Coverage and Assembly Graphs

   :homepage: https://github.com/metagentools/MetaCoAG
   :documentation: https://metacoag.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metacoag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacoag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacoag/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-031-04749-7_5`

   MetaCoAG is a metagenomic contig binning tool that makes use of the connectivity information found in assembly graphs.



.. conda:package:: metacoag

   |downloads_metacoag| |docker_metacoag|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends on biopython: 
   :depends on cairocffi: 
   :depends on click: 
   :depends on fraggenescan: 
   :depends on hmmer: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python-igraph: 
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on scipy: 
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

    pixi global install metacoag

to add into an existing workspace instead, run::

    pixi add metacoag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metacoag

Alternatively, to install into a new environment, run::

    conda create -n envname metacoag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metacoag:<tag>

(see `metacoag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metacoag| image:: https://img.shields.io/conda/dn/bioconda/metacoag.svg?style=flat
   :target: https://anaconda.org/bioconda/metacoag
   :alt:   (downloads)
.. |docker_metacoag| image:: https://quay.io/repository/biocontainers/metacoag/status
   :target: https://quay.io/repository/biocontainers/metacoag
.. _`metacoag/tags`: https://quay.io/repository/biocontainers/metacoag?tab=tags


.. raw:: html

    <script>
        var package = "metacoag";
        var versions = ["1.2.2","1.2.1","1.2.0","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacoag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacoag/README.html