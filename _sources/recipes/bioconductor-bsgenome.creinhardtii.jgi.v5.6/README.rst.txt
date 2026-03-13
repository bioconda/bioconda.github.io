:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.creinhardtii.jgi.v5.6'
.. highlight: bash

bioconductor-bsgenome.creinhardtii.jgi.v5.6
===========================================

.. conda:recipe:: bioconductor-bsgenome.creinhardtii.jgi.v5.6
   :replaces_section_title:
   :noindex:

   Full genome sequences for Chlamydomonas reinhardtii \(v5.6\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Creinhardtii.JGI.v5.6.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.creinhardtii.jgi.v5.6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.creinhardtii.jgi.v5.6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.creinhardtii.jgi.v5.6/meta.yaml>`_

   Full genome sequences for Chlamydomonas reinhardtii \(v5.6\) as provided by JGI and stored in Biostrings objects. The data in this package is public. See \'citation\(\"BSgenome.Creinhardtii.JGI.v5.6\"\)\' for how to cite in publications.


.. conda:package:: bioconductor-bsgenome.creinhardtii.jgi.v5.6

   |downloads_bioconductor-bsgenome.creinhardtii.jgi.v5.6| |docker_bioconductor-bsgenome.creinhardtii.jgi.v5.6|

   :versions:
      
      

      ``1.5.0-7``,  ``1.5.0-6``,  ``1.5.0-5``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-bsgenome.creinhardtii.jgi.v5.6

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.creinhardtii.jgi.v5.6

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.creinhardtii.jgi.v5.6

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.creinhardtii.jgi.v5.6

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.creinhardtii.jgi.v5.6:<tag>

(see `bioconductor-bsgenome.creinhardtii.jgi.v5.6/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.creinhardtii.jgi.v5.6| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.creinhardtii.jgi.v5.6.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.creinhardtii.jgi.v5.6
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.creinhardtii.jgi.v5.6| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.creinhardtii.jgi.v5.6/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.creinhardtii.jgi.v5.6
.. _`bioconductor-bsgenome.creinhardtii.jgi.v5.6/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.creinhardtii.jgi.v5.6?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.creinhardtii.jgi.v5.6";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.creinhardtii.jgi.v5.6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.creinhardtii.jgi.v5.6/README.html