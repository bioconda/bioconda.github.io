:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comebin'
.. highlight: bash

comebin
=======

.. conda:recipe:: comebin
   :replaces_section_title:
   :noindex:

   COMEBin allows effective binning of metagenomic contigs using COntrastive Multi\-viEw representation learning

   :homepage: https://github.com/ziyewang/COMEBin
   :license: BSD
   :recipe: /`comebin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comebin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comebin/meta.yaml>`_

   


.. conda:package:: comebin

   |downloads_comebin| |docker_comebin|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on atomicwrites: ``1.4.0.*``
   :depends on bedtools: ``2.30.0.*``
   :depends on biolib: ``0.1.6.*``
   :depends on biopython: ``1.76.*``
   :depends on bwa: ``0.7.17.*``
   :depends on checkm-genome: ``1.1.3.*``
   :depends on click: ``8.0.4.*``
   :depends on fraggenescan: ``1.31.*``
   :depends on hmmer: ``3.1b2.*``
   :depends on hnswlib: ``0.6.2.*``
   :depends on igraph: ``0.9.9.*``
   :depends on joblib: ``1.1.0.*``
   :depends on leidenalg: ``0.8.10.*``
   :depends on matplotlib-base: ``3.5.1.*``
   :depends on matplotlib-inline: ``0.1.3.*``
   :depends on networkx: ``2.6.3.*``
   :depends on numpy: ``1.19.0.*``
   :depends on pandas: ``1.3.5.*``
   :depends on pip: ``22.0.4.*``
   :depends on pplacer: ``1.1.alpha19.*``
   :depends on prodigal: ``2.6.3.*``
   :depends on python: ``3.7.*``
   :depends on python-dateutil: ``2.8.2.*``
   :depends on python-fastjsonschema: ``2.15.3.*``
   :depends on pytorch: ``1.10.2.*``
   :depends on pyyaml: ``6.0.*``
   :depends on samtools: ``1.15.1.*``
   :depends on scanpy: ``1.9.1.*``
   :depends on scikit-learn: ``0.22.1.*``
   :depends on scipy: ``1.7.3.*``
   :depends on seaborn: ``0.12.1.*``
   :depends on setuptools: ``59.5.0.*``
   :depends on tensorboard: ``1.15.0.*``

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

    pixi global install comebin

to add into an existing workspace instead, run::

    pixi add comebin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install comebin

Alternatively, to install into a new environment, run::

    conda create -n envname comebin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/comebin:<tag>

(see `comebin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_comebin| image:: https://img.shields.io/conda/dn/bioconda/comebin.svg?style=flat
   :target: https://anaconda.org/bioconda/comebin
   :alt:   (downloads)
.. |docker_comebin| image:: https://quay.io/repository/biocontainers/comebin/status
   :target: https://quay.io/repository/biocontainers/comebin
.. _`comebin/tags`: https://quay.io/repository/biocontainers/comebin?tab=tags


.. raw:: html

    <script>
        var package = "comebin";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comebin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comebin/README.html