:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semeta'
.. highlight: bash

semeta
======

.. conda:recipe:: semeta
   :replaces_section_title:
   :noindex:

   SeMeta is a new software for taxonomic assignment of metagenomic reads. It
   supports both single\-end and paired\-end reads. The software is implemented
   in C\+\+


   :homepage: http://it.hcmute.edu.vn/bioinfo/metapro/SeMeta.html
   :license: GPL-3
   :recipe: /`semeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0872-x`

   


.. conda:package:: semeta

   |downloads_semeta| |docker_semeta|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on blast: 
   :depends on libgcc: 

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

    pixi global install semeta

to add into an existing workspace instead, run::

    pixi add semeta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install semeta

Alternatively, to install into a new environment, run::

    conda create -n envname semeta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/semeta:<tag>

(see `semeta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_semeta| image:: https://img.shields.io/conda/dn/bioconda/semeta.svg?style=flat
   :target: https://anaconda.org/bioconda/semeta
   :alt:   (downloads)
.. |docker_semeta| image:: https://quay.io/repository/biocontainers/semeta/status
   :target: https://quay.io/repository/biocontainers/semeta
.. _`semeta/tags`: https://quay.io/repository/biocontainers/semeta?tab=tags


.. raw:: html

    <script>
        var package = "semeta";
        var versions = ["1.0"];
    </script>





Notes
-----
Databases are required. Please see the project homepage.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semeta/README.html