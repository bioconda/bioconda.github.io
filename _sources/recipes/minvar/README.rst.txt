:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minvar'
.. highlight: bash

minvar
======

.. conda:recipe:: minvar
   :replaces_section_title:
   :noindex:

   A tool to detect minority variants in HIV\-1 and HCV populations

   :homepage: https://git.io/minvar
   :license: Custom
   :recipe: /`minvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar/meta.yaml>`_

   


.. conda:package:: minvar

   |downloads_minvar| |docker_minvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  </span></summary>
      

      ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.2b-1``,  ``1.2b-0``,  ``1.2a3-1``,  ``1.2a3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on blast: ``>=2.3``
   :depends on bwa: 
   :depends on emboss: 
   :depends on htslib: 
   :depends on lofreq: ``>=2.1.3.1``
   :depends on pandas: 
   :depends on pandoc: 
   :depends on python: ``>=3``
   :depends on samtools: ``>=1.3``
   :depends on seqtk: 
   :depends on setuptools_scm_git_archive: 
   :depends on sierrapy: 

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

    pixi global install minvar

to add into an existing workspace instead, run::

    pixi add minvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minvar

Alternatively, to install into a new environment, run::

    conda create -n envname minvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minvar:<tag>

(see `minvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minvar| image:: https://img.shields.io/conda/dn/bioconda/minvar.svg?style=flat
   :target: https://anaconda.org/bioconda/minvar
   :alt:   (downloads)
.. |docker_minvar| image:: https://quay.io/repository/biocontainers/minvar/status
   :target: https://quay.io/repository/biocontainers/minvar
.. _`minvar/tags`: https://quay.io/repository/biocontainers/minvar?tab=tags


.. raw:: html

    <script>
        var package = "minvar";
        var versions = ["2.2.2","2.2.2","2.2.1","2.2","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minvar/README.html