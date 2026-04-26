:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quast'
.. highlight: bash

quast
=====

.. conda:recipe:: quast
   :replaces_section_title:
   :noindex:

   Quality Assessment Tool for Genome Assemblies.

   :homepage: https://quast.sourceforge.net
   :documentation: https://quast.sourceforge.net/docs/manual.html
   
   :developer docs: https://github.com/ablab/quast
   :license: Custom
   :recipe: /`quast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast/meta.yaml>`_
   :links: biotools: :biotools:`quast`, usegalaxy-eu: :usegalaxy-eu:`quast`, doi: :doi:`10.1093/bioinformatics/btt086`

   


.. conda:package:: quast

   |downloads_quast| |docker_quast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.3.0-2</code>,  <code>5.3.0-1</code>,  <code>5.3.0-0</code>,  <code>5.2.0-4</code>,  <code>5.2.0-3</code>,  <code>5.2.0-2</code>,  <code>5.2.0-1</code>,  <code>5.2.0-0</code>,  <code>5.0.2-7</code>,  </span></summary>
      

      ``5.3.0-2``,  ``5.3.0-1``,  ``5.3.0-0``,  ``5.2.0-4``,  ``5.2.0-3``,  ``5.2.0-2``,  ``5.2.0-1``,  ``5.2.0-0``,  ``5.0.2-7``,  ``5.0.2-6``,  ``5.0.2-5``,  ``5.0.2-4``,  ``5.0.2-3``,  ``5.0.2-2``,  ``5.0.2-1``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.6.3-2``,  ``4.6.3-1``,  ``4.6.3-0``,  ``4.6.1-0``,  ``4.5-1``,  ``4.4-1``,  ``4.4-0``,  ``4.3-2``,  ``4.3-1``,  ``4.1-1``,  ``4.1-0``,  ``3.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on blast: ``>=2.16.0,<2.17.0a0``
   :depends on bwa: 
   :depends on circos: 
   :depends on glimmerhmm: 
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on minimap2: ``>=2.28,<3.0a0``
   :depends on openjdk: ``>=11.0.1``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on simplejson: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install quast

to add into an existing workspace instead, run::

    pixi add quast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quast

Alternatively, to install into a new environment, run::

    conda create -n envname quast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quast:<tag>

(see `quast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quast| image:: https://img.shields.io/conda/dn/bioconda/quast.svg?style=flat
   :target: https://anaconda.org/bioconda/quast
   :alt:   (downloads)
.. |docker_quast| image:: https://quay.io/repository/biocontainers/quast/status
   :target: https://quay.io/repository/biocontainers/quast
.. _`quast/tags`: https://quay.io/repository/biocontainers/quast?tab=tags


.. raw:: html

    <script>
        var package = "quast";
        var versions = ["5.3.0","5.3.0","5.3.0","5.2.0","5.2.0"];
    </script>





Notes
-----
\- GeneMark gene prediction software is disabled due to licensing issues



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quast/README.html