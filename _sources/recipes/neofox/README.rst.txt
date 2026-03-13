:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neofox'
.. highlight: bash

neofox
======

.. conda:recipe:: neofox
   :replaces_section_title:
   :noindex:

   Annotation of mutated peptide sequences \(mps\) with published or novel potential neo\-epitope descriptors

   :homepage: https://github.com/tron-bioinformatics/neofox
   :documentation: https://neofox.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`neofox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab344`

   


.. conda:package:: neofox

   |downloads_neofox| |docker_neofox|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.2-0``,  ``1.1.0-0``

      

   
   :depends on betterproto: ``>=1.2.5,<1.3.0``
   :depends on biopython: ``>1.80``
   :depends on blast: 
   :depends on dask: ``>=2024.0.0,<=2024.6.3``
   :depends on distributed: ``>=2024.0.0,<=2024.6.2``
   :depends on faker: ``>=13.13.0,<13.14.0``
   :depends on logzero: ``>=1.5.0``
   :depends on mock: ``>=4.0.3,<4.1.0``
   :depends on numpy: ``>=1.24,<1.27``
   :depends on pandas: ``>=2.1,<2.3``
   :depends on poetry: ``1.8.2``
   :depends on pysam: ``>0.20``
   :depends on python: ``3.11``
   :depends on python-dotenv: ``>=0.12.0,<0.13.0``
   :depends on scipy: ``>=1.10.0``
   :depends on xmltodict: ``>=0.12.0,<0.13.0``

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

    pixi global install neofox

to add into an existing workspace instead, run::

    pixi add neofox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install neofox

Alternatively, to install into a new environment, run::

    conda create -n envname neofox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/neofox:<tag>

(see `neofox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_neofox| image:: https://img.shields.io/conda/dn/bioconda/neofox.svg?style=flat
   :target: https://anaconda.org/bioconda/neofox
   :alt:   (downloads)
.. |docker_neofox| image:: https://quay.io/repository/biocontainers/neofox/status
   :target: https://quay.io/repository/biocontainers/neofox
.. _`neofox/tags`: https://quay.io/repository/biocontainers/neofox?tab=tags


.. raw:: html

    <script>
        var package = "neofox";
        var versions = ["1.2.3","1.2.2","1.1.0"];
    </script>





Notes
-----
NeoFox has some required and optional third party dependencies that have a non commercial use license. These dependencies can be installed following the guidelines here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#step\-by\-step\-guide\-without\-docker. Furthermore\, NeoFox requires to install some reference data\, the installation process is described here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#configuration\-of\-the\-reference\-folder


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neofox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neofox/README.html