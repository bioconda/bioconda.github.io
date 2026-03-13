:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'busco'
.. highlight: bash

busco
=====

.. conda:recipe:: busco
   :replaces_section_title:
   :noindex:

   Assessment of assembly completeness using Universal Single Copy Orthologs.

   :homepage: https://busco.ezlab.org
   :documentation: https://busco.ezlab.org/busco_userguide.html
   
   :developer docs: https://gitlab.com/ezlab/busco
   :license: MIT / MIT
   :recipe: /`busco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco/meta.yaml>`_
   :links: biotools: :biotools:`busco`, doi: :doi:`10.1093/bioinformatics/btv351`, usegalaxy-eu: :usegalaxy-eu:`busco`

   BUSCO provides measures for quantitative assessment of genome assembly\, gene set\, and transcriptome completeness based on evolutionarily informed expectations of gene content from near\-universal single\-copy orthologs selected from OrthoDB.


.. conda:package:: busco

   |downloads_busco| |docker_busco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.0-2</code>,  <code>6.0.0-1</code>,  <code>6.0.0-0</code>,  <code>5.8.3-1</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  <code>5.8.1-0</code>,  <code>5.8.0-0</code>,  <code>5.7.1-1</code>,  </span></summary>
      

      ``6.0.0-2``,  ``6.0.0-1``,  ``6.0.0-0``,  ``5.8.3-1``,  ``5.8.3-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.8.0-0``,  ``5.7.1-1``,  ``5.7.1-0``,  ``5.7.0-1``,  ``5.7.0-0``,  ``5.6.1-0``,  ``5.6.0-0``,  ``5.5.0-0``,  ``5.4.7-0``,  ``5.4.6-0``,  ``5.4.5-0``,  ``5.4.4-0``,  ``5.4.3-0``,  ``5.4.2-0``,  ``5.4.1-0``,  ``5.4.0-2``,  ``5.4.0-1``,  ``5.4.0-0``,  ``5.3.2-0``,  ``5.3.1-0``,  ``5.3.0-0``,  ``5.2.2-0``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.3-0``,  ``5.1.2-0``,  ``5.1.1-1``,  ``5.1.1-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.1.4-2``,  ``4.1.4-1``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-3``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``4.0.beta1-0``,  ``3.0.2-13``,  ``3.0.2-12``,  ``3.0.2-11``,  ``3.0.2-10``,  ``3.0.2-9``,  ``3.0.2-8``,  ``3.0.2-7``,  ``3.0.2-6``,  ``3.0.2-5``,  ``3.0.2-4``,  ``3.0.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on augustus: ``>=3.3``
   :depends on bbmap: 
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.10.1``
   :depends on fonts-conda-ecosystem: 
   :depends on hmmer: ``>=3.1b2``
   :depends on matplotlib-base: 
   :depends on metaeuk: ``>=6.a5d39d9``
   :depends on miniprot: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on python: ``>=3.3``
   :depends on requests: 
   :depends on sepp: ``4.5.5``
   :depends on wget: 

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

    pixi global install busco

to add into an existing workspace instead, run::

    pixi add busco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install busco

Alternatively, to install into a new environment, run::

    conda create -n envname busco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/busco:<tag>

(see `busco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_busco| image:: https://img.shields.io/conda/dn/bioconda/busco.svg?style=flat
   :target: https://anaconda.org/bioconda/busco
   :alt:   (downloads)
.. |docker_busco| image:: https://quay.io/repository/biocontainers/busco/status
   :target: https://quay.io/repository/biocontainers/busco
.. _`busco/tags`: https://quay.io/repository/biocontainers/busco?tab=tags


.. raw:: html

    <script>
        var package = "busco";
        var versions = ["6.0.0","6.0.0","6.0.0","5.8.3","5.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/busco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/busco/README.html