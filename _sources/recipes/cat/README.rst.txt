:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cat'
.. highlight: bash

cat
===

.. conda:recipe:: cat
   :replaces_section_title:
   :noindex:

   CAT\/BAT\: tool for taxonomic classification of contigs and metagenome\-assembled genomes \(MAGs\)


   :homepage: https://github.com/MGXlab/CAT_pack
   :license: MIT / MIT
   :recipe: /`cat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat/meta.yaml>`_

   


.. conda:package:: cat

   |downloads_cat| |docker_cat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.1-1</code>,  <code>6.0.1-0</code>,  <code>5.3-0</code>,  <code>5.2.3-1</code>,  <code>5.2.3-0</code>,  <code>5.2.2-0</code>,  <code>5.2.1-0</code>,  <code>5.2-0</code>,  <code>5.1.2-0</code>,  </span></summary>
      

      ``6.0.1-1``,  ``6.0.1-0``,  ``5.3-0``,  ``5.2.3-1``,  ``5.2.3-0``,  ``5.2.2-0``,  ``5.2.1-0``,  ``5.2-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0-0``,  ``4.6-0``,  ``4.3.3-0``,  ``4.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: 
   :depends on diamond: 
   :depends on prodigal: 
   :depends on python: ``>=3``
   :depends on samtools: 

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

    pixi global install cat

to add into an existing workspace instead, run::

    pixi add cat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cat

Alternatively, to install into a new environment, run::

    conda create -n envname cat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cat:<tag>

(see `cat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cat| image:: https://img.shields.io/conda/dn/bioconda/cat.svg?style=flat
   :target: https://anaconda.org/bioconda/cat
   :alt:   (downloads)
.. |docker_cat| image:: https://quay.io/repository/biocontainers/cat/status
   :target: https://quay.io/repository/biocontainers/cat
.. _`cat/tags`: https://quay.io/repository/biocontainers/cat?tab=tags


.. raw:: html

    <script>
        var package = "cat";
        var versions = ["6.0.1","6.0.1","5.3","5.2.3","5.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cat/README.html