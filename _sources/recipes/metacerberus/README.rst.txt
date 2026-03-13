:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacerberus'
.. highlight: bash

metacerberus
============

.. conda:recipe:: metacerberus
   :replaces_section_title:
   :noindex:

   Versatile Functional Ontology Assignments for Metagenomes via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun meta\'omics data

   :homepage: https://github.com/raw-lab/metacerberus
   :license: BSD / BSD-3-Clause
   :recipe: /`metacerberus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacerberus/meta.yaml>`_

   


.. conda:package:: metacerberus

   |downloads_metacerberus| |docker_metacerberus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2-0</code>,  <code>1.1-1</code>,  </span></summary>
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on configargparse: 
   :depends on dominate: 
   :depends on fastp: 
   :depends on fastqc: 
   :depends on flash2: 
   :depends on hydrampp: 
   :depends on metaomestats: 
   :depends on pandas: 
   :depends on phanotate: 
   :depends on plotly: 
   :depends on porechop: 
   :depends on psutil: 
   :depends on pyhmmer: ``0.10.*``
   :depends on pyrodigal: 
   :depends on pyrodigal-gv: 
   :depends on python: ``>=3.8``
   :depends on python-kaleido: 
   :depends on scikit-learn: 
   :depends on setuptools: ``<70.0.0``
   :depends on trnascan-se: 

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

    pixi global install metacerberus

to add into an existing workspace instead, run::

    pixi add metacerberus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metacerberus

Alternatively, to install into a new environment, run::

    conda create -n envname metacerberus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metacerberus:<tag>

(see `metacerberus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metacerberus| image:: https://img.shields.io/conda/dn/bioconda/metacerberus.svg?style=flat
   :target: https://anaconda.org/bioconda/metacerberus
   :alt:   (downloads)
.. |docker_metacerberus| image:: https://quay.io/repository/biocontainers/metacerberus/status
   :target: https://quay.io/repository/biocontainers/metacerberus
.. _`metacerberus/tags`: https://quay.io/repository/biocontainers/metacerberus?tab=tags


.. raw:: html

    <script>
        var package = "metacerberus";
        var versions = ["1.4.0","1.4.0","1.3.1","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacerberus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacerberus/README.html