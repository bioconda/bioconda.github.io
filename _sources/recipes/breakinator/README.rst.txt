:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakinator'
.. highlight: bash

breakinator
===========

.. conda:recipe:: breakinator
   :replaces_section_title:
   :noindex:

   Detection of foldback and chimeric read artifacts in SAM\/BAM\/CRAM and PAF files

   :homepage: https://github.com/jheinz27/breakinator
   :license: MIT
   :recipe: /`breakinator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakinator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakinator/meta.yaml>`_

   


.. conda:package:: breakinator

   |downloads_breakinator| |docker_breakinator|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.6.0,<4.0a0``
   :depends on xz: 
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

    pixi global install breakinator

to add into an existing workspace instead, run::

    pixi add breakinator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install breakinator

Alternatively, to install into a new environment, run::

    conda create -n envname breakinator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/breakinator:<tag>

(see `breakinator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_breakinator| image:: https://img.shields.io/conda/dn/bioconda/breakinator.svg?style=flat
   :target: https://anaconda.org/bioconda/breakinator
   :alt:   (downloads)
.. |docker_breakinator| image:: https://quay.io/repository/biocontainers/breakinator/status
   :target: https://quay.io/repository/biocontainers/breakinator
.. _`breakinator/tags`: https://quay.io/repository/biocontainers/breakinator?tab=tags


.. raw:: html

    <script>
        var package = "breakinator";
        var versions = ["1.1.1","1.1.1","1.1.0","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakinator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakinator/README.html