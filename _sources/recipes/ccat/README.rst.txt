:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccat'
.. highlight: bash

ccat
====

.. conda:recipe:: ccat
   :replaces_section_title:
   :noindex:

   CCAT is a software package for the analysis of ChIP\-seq data with negative control.

   :homepage: http://cmb.gis.a-star.edu.sg/ChIPSeq/paperCCAT.htm
   :license: unknown
   :recipe: /`ccat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccat/meta.yaml>`_
   :links: biotools: :biotools:`CCAT`, doi: :doi:`10.1093/bioinformatics/btq128`, usegalaxy-eu: :usegalaxy-eu:`peakcalling_ccat`

   


.. conda:package:: ccat

   |downloads_ccat| |docker_ccat|

   :versions:
      
      

      ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``

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

    pixi global install ccat

to add into an existing workspace instead, run::

    pixi add ccat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ccat

Alternatively, to install into a new environment, run::

    conda create -n envname ccat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ccat:<tag>

(see `ccat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ccat| image:: https://img.shields.io/conda/dn/bioconda/ccat.svg?style=flat
   :target: https://anaconda.org/bioconda/ccat
   :alt:   (downloads)
.. |docker_ccat| image:: https://quay.io/repository/biocontainers/ccat/status
   :target: https://quay.io/repository/biocontainers/ccat
.. _`ccat/tags`: https://quay.io/repository/biocontainers/ccat?tab=tags


.. raw:: html

    <script>
        var package = "ccat";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccat/README.html