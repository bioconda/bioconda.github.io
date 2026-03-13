:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-util-legacy'
.. highlight: bash

ncbi-util-legacy
================

.. conda:recipe:: ncbi-util-legacy
   :replaces_section_title:
   :noindex:

   NCBI software development toolkit

   :homepage: ftp://ftp.ncbi.nih.gov/toolbox/ncbi_tools/
   :license: Public Domain
   :recipe: /`ncbi-util-legacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-util-legacy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-util-legacy/meta.yaml>`_

   


.. conda:package:: ncbi-util-legacy

   |downloads_ncbi-util-legacy| |docker_ncbi-util-legacy|

   :versions:
      
      

      ``6.1-3``,  ``6.1-2``,  ``6.1-1``,  ``6.1-0``

      

   
   :depends on fontconfig: ``>=2.13.96,<3.0a0``
   :depends on fonts-conda-ecosystem: 
   :depends on gmp: ``>=6.2.1,<7.0a0``
   :depends on gnutls: ``>=3.6.13,<3.7.0a0``
   :depends on jpeg: ``>=9e,<10a``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libpng: ``>=1.6.37,<1.7.0a0``
   :depends on openmotif: ``>=2.3.8,<3.0a0``
   :depends on tcsh: 
   :depends on xorg-libx11: 
   :depends on xorg-libxft: 
   :depends on xorg-libxmu: 
   :depends on xorg-libxp: 
   :depends on xorg-libxt: 

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

    pixi global install ncbi-util-legacy

to add into an existing workspace instead, run::

    pixi add ncbi-util-legacy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-util-legacy

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-util-legacy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-util-legacy:<tag>

(see `ncbi-util-legacy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-util-legacy| image:: https://img.shields.io/conda/dn/bioconda/ncbi-util-legacy.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-util-legacy
   :alt:   (downloads)
.. |docker_ncbi-util-legacy| image:: https://quay.io/repository/biocontainers/ncbi-util-legacy/status
   :target: https://quay.io/repository/biocontainers/ncbi-util-legacy
.. _`ncbi-util-legacy/tags`: https://quay.io/repository/biocontainers/ncbi-util-legacy?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-util-legacy";
        var versions = ["6.1","6.1","6.1","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-util-legacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-util-legacy/README.html