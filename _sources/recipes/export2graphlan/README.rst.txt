:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'export2graphlan'
.. highlight: bash

export2graphlan
===============

.. conda:recipe:: export2graphlan
   :replaces_section_title:
   :noindex:

   Conversion software tool for annotating tree with GraPhlAn

   :homepage: https://github.com/segatalab/export2graphlan
   :license: MIT / MIT License
   :recipe: /`export2graphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/export2graphlan/meta.yaml>`_

   export2graphlan is a conversion software tool for producing both annotation and tree file for GraPhlAn.
   It automatically generate the input tree and the annotation file for GraPhlAn\, starting from the
   input\/output of MetaPhlAn\, LEfSe\, and HUMAnN. It supports also the biom file format. The annotation file
   will highlight specific sub\-trees\/clades automatically inferred from input file\(s\) provided. The two output
   file of export2graphlan should then be used with GraPhlAn.


.. conda:package:: export2graphlan

   |downloads_export2graphlan| |docker_export2graphlan|

   :versions:
      
      

      ``0.22-0``,  ``0.20-0``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      

   
   :depends on hclust2: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``2.7.*``
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

    pixi global install export2graphlan

to add into an existing workspace instead, run::

    pixi add export2graphlan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install export2graphlan

Alternatively, to install into a new environment, run::

    conda create -n envname export2graphlan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/export2graphlan:<tag>

(see `export2graphlan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_export2graphlan| image:: https://img.shields.io/conda/dn/bioconda/export2graphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/export2graphlan
   :alt:   (downloads)
.. |docker_export2graphlan| image:: https://quay.io/repository/biocontainers/export2graphlan/status
   :target: https://quay.io/repository/biocontainers/export2graphlan
.. _`export2graphlan/tags`: https://quay.io/repository/biocontainers/export2graphlan?tab=tags


.. raw:: html

    <script>
        var package = "export2graphlan";
        var versions = ["0.22","0.20","0.19","0.19","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/export2graphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/export2graphlan/README.html