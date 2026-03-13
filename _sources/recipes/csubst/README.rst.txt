:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csubst'
.. highlight: bash

csubst
======

.. conda:recipe:: csubst
   :replaces_section_title:
   :noindex:

   Tool for analyzing combinatorial codon substitutions in DNA sequences.

   :homepage: https://github.com/kfuku52/csubst
   :documentation: https://github.com/kfuku52/csubst/blob/v1.8.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`csubst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csubst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csubst/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41559-022-01932-7`

   


.. conda:package:: csubst

   |downloads_csubst| |docker_csubst|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.20-1``,  ``1.4.20-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      

   
   :depends on biopython: 
   :depends on ete4: ``>=4.3.0``
   :depends on iqtree: ``>=2.0.0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.23,<3``
   :depends on pandas: 
   :depends on pymol-open-source: 
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on pyvolve: 
   :depends on scipy: 

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

    pixi global install csubst

to add into an existing workspace instead, run::

    pixi add csubst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install csubst

Alternatively, to install into a new environment, run::

    conda create -n envname csubst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/csubst:<tag>

(see `csubst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_csubst| image:: https://img.shields.io/conda/dn/bioconda/csubst.svg?style=flat
   :target: https://anaconda.org/bioconda/csubst
   :alt:   (downloads)
.. |docker_csubst| image:: https://quay.io/repository/biocontainers/csubst/status
   :target: https://quay.io/repository/biocontainers/csubst
.. _`csubst/tags`: https://quay.io/repository/biocontainers/csubst?tab=tags


.. raw:: html

    <script>
        var package = "csubst";
        var versions = ["1.8.0","1.4.20","1.4.20","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csubst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csubst/README.html