:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqscreen'
.. highlight: bash

seqscreen
=========

.. conda:recipe:: seqscreen
   :replaces_section_title:
   :noindex:

   SeqScreen was created to sensitively assign taxonomic classifications\, functional annotations\, and Functions of Sequences of Concern \(FunSoCs\) to single\, short DNA sequences or open reading frames.

   :homepage: https://gitlab.com/treangenlab/seqscreen/-/wikis/home
   :license: GPL3
   :recipe: /`seqscreen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqscreen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqscreen/meta.yaml>`_

   


.. conda:package:: seqscreen

   |downloads_seqscreen| |docker_seqscreen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5-0</code>,  <code>4.4-0</code>,  <code>4.3-1</code>,  <code>4.3-0</code>,  <code>4.2-0</code>,  <code>4.1-2</code>,  <code>4.1-1</code>,  <code>4.1-0</code>,  <code>4.0-8</code>,  </span></summary>
      

      ``4.5-0``,  ``4.4-0``,  ``4.3-1``,  ``4.3-0``,  ``4.2-0``,  ``4.1-2``,  ``4.1-1``,  ``4.1-0``,  ``4.0-8``,  ``4.0-7``,  ``4.0-6``,  ``4.0-5``,  ``4.0-4``,  ``4.0-3``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-1``,  ``3.0-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.6.4-2``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.11-0``,  ``1.5.10-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.14-1``,  ``1.4.14-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bitarray: 
   :depends on blast: ``>=2.10``
   :depends on bowtie2: 
   :depends on bwa: ``>=0.7.17``
   :depends on centrifuge-core: 
   :depends on diamond: ``>=2.0.15``
   :depends on ete3: ``>=3.1.2``
   :depends on gdrive: 
   :depends on hmmer: 
   :depends on intervaltree: 
   :depends on jinja2: 
   :depends on minimap2: ``>=2.24``
   :depends on mmseqs2: 
   :depends on mummer: 
   :depends on ncbi-datasets-cli: ``>=13.20.1``
   :depends on nextflow: ``>=22.0.0,<22.11``
   :depends on pandas: ``>=1.4.3``
   :depends on pyfasta: ``>=0.5.2``
   :depends on python: ``>=3``
   :depends on rapsearch: 
   :depends on samtools: ``>=1.15.1``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on time: 

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

    pixi global install seqscreen

to add into an existing workspace instead, run::

    pixi add seqscreen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqscreen

Alternatively, to install into a new environment, run::

    conda create -n envname seqscreen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqscreen:<tag>

(see `seqscreen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqscreen| image:: https://img.shields.io/conda/dn/bioconda/seqscreen.svg?style=flat
   :target: https://anaconda.org/bioconda/seqscreen
   :alt:   (downloads)
.. |docker_seqscreen| image:: https://quay.io/repository/biocontainers/seqscreen/status
   :target: https://quay.io/repository/biocontainers/seqscreen
.. _`seqscreen/tags`: https://quay.io/repository/biocontainers/seqscreen?tab=tags


.. raw:: html

    <script>
        var package = "seqscreen";
        var versions = ["4.5","4.4","4.3","4.3","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqscreen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqscreen/README.html