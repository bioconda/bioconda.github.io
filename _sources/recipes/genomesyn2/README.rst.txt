:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomesyn2'
.. highlight: bash

genomesyn2
==========

.. conda:recipe:: genomesyn2
   :replaces_section_title:
   :noindex:

   A Comparative Genomics Framework Integrating Synteny Visualization

   :homepage: https://github.com/banzhou59/GenomeSyn2
   :license: MIT
   :recipe: /`genomesyn2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomesyn2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomesyn2/meta.yaml>`_

   GenomeSyn2 is a flexible and high\-performance framework for comparative
   genomics visualization\, synteny construction\, and multi\-genome feature
   analysis. It supports multiple alignment engines \(MUMmer\, minimap2\, BLASTp\,
   Diamond\, MMseqs2\) and provides rich downstream visualization modules.



.. conda:package:: genomesyn2

   |downloads_genomesyn2| |docker_genomesyn2|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on blast: 
   :depends on cairosvg: 
   :depends on diamond: 
   :depends on gffread: 
   :depends on minimap2: 
   :depends on mmseqs2: 
   :depends on mummer4: 
   :depends on perl: ``>=5.32``
   :depends on perl-bioperl-core: 
   :depends on perl-svg: 
   :depends on python: ``>=3.8``
   :depends on seqkit: 

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

    pixi global install genomesyn2

to add into an existing workspace instead, run::

    pixi add genomesyn2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomesyn2

Alternatively, to install into a new environment, run::

    conda create -n envname genomesyn2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomesyn2:<tag>

(see `genomesyn2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomesyn2| image:: https://img.shields.io/conda/dn/bioconda/genomesyn2.svg?style=flat
   :target: https://anaconda.org/bioconda/genomesyn2
   :alt:   (downloads)
.. |docker_genomesyn2| image:: https://quay.io/repository/biocontainers/genomesyn2/status
   :target: https://quay.io/repository/biocontainers/genomesyn2
.. _`genomesyn2/tags`: https://quay.io/repository/biocontainers/genomesyn2?tab=tags


.. raw:: html

    <script>
        var package = "genomesyn2";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomesyn2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomesyn2/README.html