:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emirge'
.. highlight: bash

emirge
======

.. conda:recipe:: emirge
   :replaces_section_title:
   :noindex:

   EMIRGE reconstructs full length sequences from short sequencing reads

   :homepage: https://github.com/csmiller/EMIRGE
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`emirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge/meta.yaml>`_

   


.. conda:package:: emirge

   |downloads_emirge| |docker_emirge|

   :versions:
      
      

      ``0.61.1-7``,  ``0.61.1-6``,  ``0.61.1-5``,  ``0.61.1-4``,  ``0.61.1-3``,  ``0.61.1-2``,  ``0.61.1-1``,  ``0.61.1-0``

      

   
   :depends on biopython: 
   :depends on bowtie: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: 
   :depends on scipy: 
   :depends on vsearch: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install emirge

to add into an existing workspace instead, run::

    pixi add emirge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emirge

Alternatively, to install into a new environment, run::

    conda create -n envname emirge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emirge:<tag>

(see `emirge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emirge| image:: https://img.shields.io/conda/dn/bioconda/emirge.svg?style=flat
   :target: https://anaconda.org/bioconda/emirge
   :alt:   (downloads)
.. |docker_emirge| image:: https://quay.io/repository/biocontainers/emirge/status
   :target: https://quay.io/repository/biocontainers/emirge
.. _`emirge/tags`: https://quay.io/repository/biocontainers/emirge?tab=tags


.. raw:: html

    <script>
        var package = "emirge";
        var versions = ["0.61.1","0.61.1","0.61.1","0.61.1","0.61.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emirge/README.html