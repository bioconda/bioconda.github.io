:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringmlst'
.. highlight: bash

stringmlst
==========

.. conda:recipe:: stringmlst
   :replaces_section_title:
   :noindex:

   Fast k\-mer based tool for multi locus sequence typing \(MLST\) directly from genome sequencing reads

   :homepage: https://github.com/jordanlab/stringMLST
   :license: CC BY-NC-SA 4.0
   :recipe: /`stringmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst/meta.yaml>`_

   


.. conda:package:: stringmlst

   |downloads_stringmlst| |docker_stringmlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-0</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.5.1-0</code>,  <code>0.5.1a-1</code>,  <code>0.5.1a-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1-0``,  ``0.5.1a-1``,  ``0.5.1a-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3.7-0``,  ``0.3.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on bwa: 
   :depends on lxml: 
   :depends on pyfaidx: 
   :depends on python: ``>=3``
   :depends on samtools: ``>=1.0``

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

    pixi global install stringmlst

to add into an existing workspace instead, run::

    pixi add stringmlst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stringmlst

Alternatively, to install into a new environment, run::

    conda create -n envname stringmlst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stringmlst:<tag>

(see `stringmlst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stringmlst| image:: https://img.shields.io/conda/dn/bioconda/stringmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/stringmlst
   :alt:   (downloads)
.. |docker_stringmlst| image:: https://quay.io/repository/biocontainers/stringmlst/status
   :target: https://quay.io/repository/biocontainers/stringmlst
.. _`stringmlst/tags`: https://quay.io/repository/biocontainers/stringmlst?tab=tags


.. raw:: html

    <script>
        var package = "stringmlst";
        var versions = ["0.6.3","0.6.2","0.6.2","0.6.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmlst/README.html