:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vafator'
.. highlight: bash

vafator
=======

.. conda:recipe:: vafator
   :replaces_section_title:
   :noindex:

   VAFator annotates the variants in a VCF file with technical annotations extracted from one or more BAM alignment files. We implement a set of basic coverage annotations and also more sophisticated published annotations used to assess the quality of every variant call.

   :homepage: https://github.com/tron-bioinformatics/vafator
   :license: MIT / MIT
   :recipe: /`vafator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.6976425`

   


.. conda:package:: vafator

   |downloads_vafator| |docker_vafator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cyvcf2: ``>=0.30.14,<0.31``
   :depends on logzero: ``>=1.7.0,<1.8``
   :depends on pandas: ``>=1.3.3,<1.4``
   :depends on pybedtools: ``>=0.9.0,<0.10``
   :depends on pysam: ``>=0.19.1,<0.20``
   :depends on python: ``>=3.7,<=3.9``
   :depends on scipy: ``>=1.8.1,<1.9``

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

    pixi global install vafator

to add into an existing workspace instead, run::

    pixi add vafator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vafator

Alternatively, to install into a new environment, run::

    conda create -n envname vafator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vafator:<tag>

(see `vafator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vafator| image:: https://img.shields.io/conda/dn/bioconda/vafator.svg?style=flat
   :target: https://anaconda.org/bioconda/vafator
   :alt:   (downloads)
.. |docker_vafator| image:: https://quay.io/repository/biocontainers/vafator/status
   :target: https://quay.io/repository/biocontainers/vafator
.. _`vafator/tags`: https://quay.io/repository/biocontainers/vafator?tab=tags


.. raw:: html

    <script>
        var package = "vafator";
        var versions = ["2.2.2","2.2.0","2.1.0","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vafator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vafator/README.html