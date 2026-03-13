:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soi'
.. highlight: bash

soi
===

.. conda:recipe:: soi
   :replaces_section_title:
   :noindex:

   Orthology Index \(OrthoIndex or OI\) determines the orthology of a syntenic block.

   :homepage: https://github.com/zhangrengang/SOI/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`soi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soi/meta.yaml>`_

   


.. conda:package:: soi

   |downloads_soi| |docker_soi|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.0-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on blast: ``>=2.14.1``
   :depends on diamond: ``>=2.1.8``
   :depends on drmaa: 
   :depends on entrez-direct: ``>=16.2``
   :depends on iqtree: ``>=2.2.5``
   :depends on lazy-property: ``>=0.0.1``
   :depends on mafft: ``>=7.520``
   :depends on matplotlib-base: 
   :depends on mcl: ``>=22.282``
   :depends on mmseqs2: ``>=14.7e284``
   :depends on muscle: ``>=3.8.1551``
   :depends on networkx: ``>=3.1``
   :depends on newick_utils: 
   :depends on orthofinder: ``>=2.5.5``
   :depends on pal2nal: 
   :depends on pp: ``>=1.6.4.4``
   :depends on psutil: 
   :depends on python: ``>=3``
   :depends on raxml-ng: ``>=1.2.0``
   :depends on trimal: 
   :depends on xopen: ``>=1.1.0``

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

    pixi global install soi

to add into an existing workspace instead, run::

    pixi add soi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soi

Alternatively, to install into a new environment, run::

    conda create -n envname soi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soi:<tag>

(see `soi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soi| image:: https://img.shields.io/conda/dn/bioconda/soi.svg?style=flat
   :target: https://anaconda.org/bioconda/soi
   :alt:   (downloads)
.. |docker_soi| image:: https://quay.io/repository/biocontainers/soi/status
   :target: https://quay.io/repository/biocontainers/soi
.. _`soi/tags`: https://quay.io/repository/biocontainers/soi?tab=tags


.. raw:: html

    <script>
        var package = "soi";
        var versions = ["1.3.0","1.2.3","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soi/README.html