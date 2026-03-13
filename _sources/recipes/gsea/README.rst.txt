:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsea'
.. highlight: bash

gsea
====

.. conda:recipe:: gsea
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis \(GSEA\)

   :homepage: https://www.gsea-msigdb.org/gsea
   :license: BSD / BSD-3-Clause
   :recipe: /`gsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsea/meta.yaml>`_

   


.. conda:package:: gsea

   |downloads_gsea| |docker_gsea|

   :versions:
      
      

      ``4.3.2-0``

      

   
   :depends on openjdk: 

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

    pixi global install gsea

to add into an existing workspace instead, run::

    pixi add gsea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gsea

Alternatively, to install into a new environment, run::

    conda create -n envname gsea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gsea:<tag>

(see `gsea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gsea| image:: https://img.shields.io/conda/dn/bioconda/gsea.svg?style=flat
   :target: https://anaconda.org/bioconda/gsea
   :alt:   (downloads)
.. |docker_gsea| image:: https://quay.io/repository/biocontainers/gsea/status
   :target: https://quay.io/repository/biocontainers/gsea
.. _`gsea/tags`: https://quay.io/repository/biocontainers/gsea?tab=tags


.. raw:: html

    <script>
        var package = "gsea";
        var versions = ["4.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsea/README.html