:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strling'
.. highlight: bash

strling
=======

.. conda:recipe:: strling
   :replaces_section_title:
   :noindex:

   STRling \(pronounced like “sterling”\) is a method to detect large STR expansions from short\-read sequencing data.

   :homepage: https://github.com/quinlan-lab/STRling
   :license: MIT
   :recipe: /`strling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strling/meta.yaml>`_

   


.. conda:package:: strling

   |downloads_strling| |docker_strling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on bpipe: 
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on pandas: 
   :depends on pysam: 
   :depends on pytest: 
   :depends on pytest-runner: 
   :depends on python: ``>=3.7``
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on statsmodels: 

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

    pixi global install strling

to add into an existing workspace instead, run::

    pixi add strling

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strling

Alternatively, to install into a new environment, run::

    conda create -n envname strling

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strling:<tag>

(see `strling/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strling| image:: https://img.shields.io/conda/dn/bioconda/strling.svg?style=flat
   :target: https://anaconda.org/bioconda/strling
   :alt:   (downloads)
.. |docker_strling| image:: https://quay.io/repository/biocontainers/strling/status
   :target: https://quay.io/repository/biocontainers/strling
.. _`strling/tags`: https://quay.io/repository/biocontainers/strling?tab=tags


.. raw:: html

    <script>
        var package = "strling";
        var versions = ["0.6.0","0.5.2","0.5.2","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strling/README.html