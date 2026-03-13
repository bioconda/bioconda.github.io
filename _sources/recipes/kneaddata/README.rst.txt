:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kneaddata'
.. highlight: bash

kneaddata
=========

.. conda:recipe:: kneaddata
   :replaces_section_title:
   :noindex:

   KneadData is a tool designed to perform quality control on metagenomic sequencing data.

   :homepage: https://huttenhower.sph.harvard.edu/kneaddata
   :developer docs: https://github.com/biobakery/kneaddata
   :license: MIT / MIT
   :recipe: /`kneaddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata/meta.yaml>`_

   KneadData is a tool designed to perform quality control on metagenomic sequencing data\, especially data from microbiome experiments. In these experiments\, samples are typically taken from a host in hopes of learning something about the microbial community on the host. However\, metagenomic sequencing data from such experiments will often contain a high ratio of host to bacterial reads. This tool aims to perform principled in silico separation of bacterial reads from these \"contaminant\" reads\, be they from the host\, from bacterial 16S sequences\, or other user\-defined sources.


.. conda:package:: kneaddata

   |downloads_kneaddata| |docker_kneaddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.4-0</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.7.4-1</code>,  </span></summary>
      

      ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on bmtool: 
   :depends on bowtie2: ``>=2.2``
   :depends on fastqc: 
   :depends on python: ``>=3``
   :depends on samtools: 
   :depends on srprism: 
   :depends on trf: 
   :depends on trimmomatic: 

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

    pixi global install kneaddata

to add into an existing workspace instead, run::

    pixi add kneaddata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kneaddata

Alternatively, to install into a new environment, run::

    conda create -n envname kneaddata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kneaddata:<tag>

(see `kneaddata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kneaddata| image:: https://img.shields.io/conda/dn/bioconda/kneaddata.svg?style=flat
   :target: https://anaconda.org/bioconda/kneaddata
   :alt:   (downloads)
.. |docker_kneaddata| image:: https://quay.io/repository/biocontainers/kneaddata/status
   :target: https://quay.io/repository/biocontainers/kneaddata
.. _`kneaddata/tags`: https://quay.io/repository/biocontainers/kneaddata?tab=tags


.. raw:: html

    <script>
        var package = "kneaddata";
        var versions = ["0.12.4","0.12.3","0.12.2","0.12.1","0.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kneaddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kneaddata/README.html