:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacluster'
.. highlight: bash

metacluster
===========

.. conda:recipe:: metacluster
   :replaces_section_title:
   :noindex:

   MetaCluster5.1 is a new software for binning short pair\-end reads

   :homepage: http://i.cs.hku.hk/~alse/MetaCluster/
   :license: GPLv2
   :recipe: /`metacluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts397`

   MetaCluster5.1 is an unsupervised binning method that can \(1\) samples with
   low\-abundance species\, or \(2\) samples \(even with high\-abundance\) with many
   extremely\-low\-abundance species. The input file should be in fasta format.
   Every odd\-number read and its next read are supposed to be pair\-end reads.



.. conda:package:: metacluster

   |downloads_metacluster| |docker_metacluster|

   :versions:
      
      

      ``5.1-7``,  ``5.1-6``,  ``5.1-5``,  ``5.1-4``,  ``5.1-3``,  ``5.1-2``,  ``5.1-1``,  ``5.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install metacluster

to add into an existing workspace instead, run::

    pixi add metacluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metacluster

Alternatively, to install into a new environment, run::

    conda create -n envname metacluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metacluster:<tag>

(see `metacluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metacluster| image:: https://img.shields.io/conda/dn/bioconda/metacluster.svg?style=flat
   :target: https://anaconda.org/bioconda/metacluster
   :alt:   (downloads)
.. |docker_metacluster| image:: https://quay.io/repository/biocontainers/metacluster/status
   :target: https://quay.io/repository/biocontainers/metacluster
.. _`metacluster/tags`: https://quay.io/repository/biocontainers/metacluster?tab=tags


.. raw:: html

    <script>
        var package = "metacluster";
        var versions = ["5.1","5.1","5.1","5.1","5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacluster/README.html