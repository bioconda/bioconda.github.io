:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secapr'
.. highlight: bash

secapr
======

.. conda:recipe:: secapr
   :replaces_section_title:
   :noindex:

   Process sequence\-capture FASTQ files into alignments for phylogenetic analyses. Integrates allele phasing.

   :homepage: https://github.com/AntonelliLab/seqcap_processor
   :license: MIT
   :recipe: /`secapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr/meta.yaml>`_

   


.. conda:package:: secapr

   |downloads_secapr| |docker_secapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.8-0</code>,  <code>2.2.6-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.1-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``2.2.8-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.1-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.1.15-2``,  ``1.1.15-1``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.10-2``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.4-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abyss: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bwa: 
   :depends on emboss: 
   :depends on fastqc: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on muscle: 
   :depends on pandas: 
   :depends on python: 
   :depends on samtools: ``1.9.*``
   :depends on spades: 
   :depends on trimal: 
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

    pixi global install secapr

to add into an existing workspace instead, run::

    pixi add secapr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install secapr

Alternatively, to install into a new environment, run::

    conda create -n envname secapr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/secapr:<tag>

(see `secapr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_secapr| image:: https://img.shields.io/conda/dn/bioconda/secapr.svg?style=flat
   :target: https://anaconda.org/bioconda/secapr
   :alt:   (downloads)
.. |docker_secapr| image:: https://quay.io/repository/biocontainers/secapr/status
   :target: https://quay.io/repository/biocontainers/secapr
.. _`secapr/tags`: https://quay.io/repository/biocontainers/secapr?tab=tags


.. raw:: html

    <script>
        var package = "secapr";
        var versions = ["2.2.8","2.2.6","2.2.5","2.2.4","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secapr/README.html