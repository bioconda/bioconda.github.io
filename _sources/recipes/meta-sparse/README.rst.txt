:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta-sparse'
.. highlight: bash

meta-sparse
===========

.. conda:recipe:: meta-sparse
   :replaces_section_title:
   :noindex:

   SPARSE indexes reference genomes in public databases into hierarchical clusters and uses it to predict origins of metagenomic reads.

   :homepage: https://github.com/zheminzhou/SPARSE/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`meta-sparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-sparse/meta.yaml>`_

   


.. conda:package:: meta-sparse

   |downloads_meta-sparse| |docker_meta-sparse|

   :versions:
      
      

      ``0.1.12-4``,  ``0.1.12-3``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends on bowtie2: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on mash: 
   :depends on msgpack-python: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pycapnp: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: 
   :depends on scipy: 

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

    pixi global install meta-sparse

to add into an existing workspace instead, run::

    pixi add meta-sparse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install meta-sparse

Alternatively, to install into a new environment, run::

    conda create -n envname meta-sparse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/meta-sparse:<tag>

(see `meta-sparse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_meta-sparse| image:: https://img.shields.io/conda/dn/bioconda/meta-sparse.svg?style=flat
   :target: https://anaconda.org/bioconda/meta-sparse
   :alt:   (downloads)
.. |docker_meta-sparse| image:: https://quay.io/repository/biocontainers/meta-sparse/status
   :target: https://quay.io/repository/biocontainers/meta-sparse
.. _`meta-sparse/tags`: https://quay.io/repository/biocontainers/meta-sparse?tab=tags


.. raw:: html

    <script>
        var package = "meta-sparse";
        var versions = ["0.1.12","0.1.12","0.1.12","0.1.12","0.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-sparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-sparse/README.html