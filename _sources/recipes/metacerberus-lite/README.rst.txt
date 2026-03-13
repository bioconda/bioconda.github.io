:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacerberus-lite'
.. highlight: bash

metacerberus-lite
=================

.. conda:recipe:: metacerberus-lite
   :replaces_section_title:
   :noindex:

   MetaCerberus with reduced dependencies\: Versatile Functional Ontology Assignments for Metagenomes via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun meta\'omics data

   :homepage: https://github.com/raw-lab/metacerberus
   :license: BSD / BSD-3-Clause
   :recipe: /`metacerberus-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus-lite/meta.yaml>`_

   


.. conda:package:: metacerberus-lite

   |downloads_metacerberus-lite| |docker_metacerberus-lite|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends on configargparse: 
   :depends on dominate: 
   :depends on flash2: 
   :depends on hydrampp: 
   :depends on metaomestats: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on psutil: 
   :depends on pyhmmer: ``0.10.*``
   :depends on pyrodigal: 
   :depends on pyrodigal-gv: 
   :depends on python: ``>=3.8``
   :depends on python-kaleido: 
   :depends on scikit-learn: 
   :depends on setuptools: ``<70.0.0``

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

    pixi global install metacerberus-lite

to add into an existing workspace instead, run::

    pixi add metacerberus-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metacerberus-lite

Alternatively, to install into a new environment, run::

    conda create -n envname metacerberus-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metacerberus-lite:<tag>

(see `metacerberus-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metacerberus-lite| image:: https://img.shields.io/conda/dn/bioconda/metacerberus-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/metacerberus-lite
   :alt:   (downloads)
.. |docker_metacerberus-lite| image:: https://quay.io/repository/biocontainers/metacerberus-lite/status
   :target: https://quay.io/repository/biocontainers/metacerberus-lite
.. _`metacerberus-lite/tags`: https://quay.io/repository/biocontainers/metacerberus-lite?tab=tags


.. raw:: html

    <script>
        var package = "metacerberus-lite";
        var versions = ["1.4.0","1.4.0","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacerberus-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacerberus-lite/README.html