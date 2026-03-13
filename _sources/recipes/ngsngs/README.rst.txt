:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsngs'
.. highlight: bash

ngsngs
======

.. conda:recipe:: ngsngs
   :replaces_section_title:
   :noindex:

   NGSNGS\: Next Generation Simulator for Next Generation Sequencing data

   :homepage: https://github.com/rahenriksen/ngsngs
   :license: GPLv3, MIT
   :recipe: /`ngsngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsngs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad041`

   


.. conda:package:: ngsngs

   |downloads_ngsngs| |docker_ngsngs|

   :versions:
      
      

      ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install ngsngs

to add into an existing workspace instead, run::

    pixi add ngsngs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngsngs

Alternatively, to install into a new environment, run::

    conda create -n envname ngsngs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngsngs:<tag>

(see `ngsngs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngsngs| image:: https://img.shields.io/conda/dn/bioconda/ngsngs.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsngs
   :alt:   (downloads)
.. |docker_ngsngs| image:: https://quay.io/repository/biocontainers/ngsngs/status
   :target: https://quay.io/repository/biocontainers/ngsngs
.. _`ngsngs/tags`: https://quay.io/repository/biocontainers/ngsngs?tab=tags


.. raw:: html

    <script>
        var package = "ngsngs";
        var versions = ["0.9.2","0.9.2","0.9.2","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsngs/README.html