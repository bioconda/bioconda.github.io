:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tipp'
.. highlight: bash

tipp
====

.. conda:recipe:: tipp
   :replaces_section_title:
   :noindex:

   TIPPo\: A User\-Friendly Tool for De Novo Assembly of Organellar Genomes with HiFi Data

   :homepage: https://github.com/Wenfei-Xian/TIPP
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tipp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tipp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tipp/meta.yaml>`_

   


.. conda:package:: tipp

   |downloads_tipp| |docker_tipp|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on bioconductor-biostrings: ``2.68.1.*``
   :depends on flye: 
   :depends on graphaligner: ``1.0.17.*``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libxcrypt: 
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on mcl: ``22.282.*``
   :depends on minimap2: ``2.26.*``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on python_abi: ``3.8.* *_cp38``
   :depends on r-ggplot2: ``3.4.4.*``
   :depends on r-igraph: ``1.5.1.*``
   :depends on r-pheatmap: ``1.0.12.*``
   :depends on r-stringdist: ``0.9.10.*``
   :depends on spoa: ``4.1.4.*``
   :depends on tiara: 
   :depends on trf: ``4.09.1.*``
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

    pixi global install tipp

to add into an existing workspace instead, run::

    pixi add tipp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tipp

Alternatively, to install into a new environment, run::

    conda create -n envname tipp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tipp:<tag>

(see `tipp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tipp| image:: https://img.shields.io/conda/dn/bioconda/tipp.svg?style=flat
   :target: https://anaconda.org/bioconda/tipp
   :alt:   (downloads)
.. |docker_tipp| image:: https://quay.io/repository/biocontainers/tipp/status
   :target: https://quay.io/repository/biocontainers/tipp
.. _`tipp/tags`: https://quay.io/repository/biocontainers/tipp?tab=tags


.. raw:: html

    <script>
        var package = "tipp";
        var versions = ["1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tipp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tipp/README.html