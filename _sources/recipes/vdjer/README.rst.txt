:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vdjer'
.. highlight: bash

vdjer
=====

.. conda:recipe:: vdjer
   :replaces_section_title:
   :noindex:

   B Cell Receptor Repertoire Reconstruction from short read mRNA\-Seq data

   :homepage: https://github.com/mozack/vdjer
   :license: https://github.com/mozack/vdjer/blob/master/LICENSE.txt
   :recipe: /`vdjer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vdjer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vdjer/meta.yaml>`_

   


.. conda:package:: vdjer

   |downloads_vdjer| |docker_vdjer|

   :versions:
      
      

      ``0.12-8``,  ``0.12-7``,  ``0.12-6``,  ``0.12-5``,  ``0.12-4``,  ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install vdjer

to add into an existing workspace instead, run::

    pixi add vdjer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vdjer

Alternatively, to install into a new environment, run::

    conda create -n envname vdjer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vdjer:<tag>

(see `vdjer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vdjer| image:: https://img.shields.io/conda/dn/bioconda/vdjer.svg?style=flat
   :target: https://anaconda.org/bioconda/vdjer
   :alt:   (downloads)
.. |docker_vdjer| image:: https://quay.io/repository/biocontainers/vdjer/status
   :target: https://quay.io/repository/biocontainers/vdjer
.. _`vdjer/tags`: https://quay.io/repository/biocontainers/vdjer?tab=tags


.. raw:: html

    <script>
        var package = "vdjer";
        var versions = ["0.12","0.12","0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vdjer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vdjer/README.html