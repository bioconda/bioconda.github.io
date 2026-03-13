:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'remag'
.. highlight: bash

remag
=====

.. conda:recipe:: remag
   :replaces_section_title:
   :noindex:

   Recovery of high\-quality eukaryotic genomes from complex metagenomes

   :homepage: https://github.com/danielzmbp/remag
   :license: MIT / MIT
   :recipe: /`remag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remag/meta.yaml>`_

   REMAG is a specialized metagenomic binning tool designed for recovering 
   high\-quality eukaryotic genomes from mixed prokaryotic\-eukaryotic samples. 
   It uses contrastive learning with Siamese neural networks to generate 
   meaningful contig embeddings for clustering.



.. conda:package:: remag

   |downloads_remag| |docker_remag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.80``
   :depends on einops: ``>=0.6.0``
   :depends on joblib: ``>=1.1.0``
   :depends on leidenalg: ``>=0.9.0``
   :depends on loguru: ``>=0.6.0``
   :depends on miniprot: 
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.3.0``
   :depends on psutil: ``>=5.8.0``
   :depends on pysam: ``>=0.18.0``
   :depends on python: ``>=3.8``
   :depends on python-igraph: ``>=0.10.0``
   :depends on pytorch: ``>=1.11.0``
   :depends on rich-click: ``>=1.5.0``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on tqdm: ``>=4.62.0``
   :depends on transformers: ``>=4.30.0``

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

    pixi global install remag

to add into an existing workspace instead, run::

    pixi add remag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install remag

Alternatively, to install into a new environment, run::

    conda create -n envname remag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/remag:<tag>

(see `remag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_remag| image:: https://img.shields.io/conda/dn/bioconda/remag.svg?style=flat
   :target: https://anaconda.org/bioconda/remag
   :alt:   (downloads)
.. |docker_remag| image:: https://quay.io/repository/biocontainers/remag/status
   :target: https://quay.io/repository/biocontainers/remag
.. _`remag/tags`: https://quay.io/repository/biocontainers/remag?tab=tags


.. raw:: html

    <script>
        var package = "remag";
        var versions = ["0.4.0","0.3.4","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/remag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/remag/README.html