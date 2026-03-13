:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggd'
.. highlight: bash

ggd
===

.. conda:recipe:: ggd
   :replaces_section_title:
   :noindex:

   GoGetData \(GGD\) is a genomic data managment system. It provide simple and reproducible access to a repository of genomic data. Simply put\, it is \'Conda\' for genomic data

   :homepage: https://github.com/gogetdata/ggd-cli
   :license: MIT
   :recipe: /`ggd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggd/meta.yaml>`_

   


.. conda:package:: ggd

   |downloads_ggd| |docker_ggd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-1</code>,  </span></summary>
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on check-sort-order: ``>=0.0.7``
   :depends on conda: ``>=4.8.2,<=4.9.0``
   :depends on conda-build: ``>=3.18.12,<=3.19.3``
   :depends on cyvcf2: 
   :depends on future: 
   :depends on fuzzywuzzy: 
   :depends on git: 
   :depends on gitpython: 
   :depends on gsort: ``>=0.1.4``
   :depends on htslib: 
   :depends on krb5: 
   :depends on oyaml: 
   :depends on pysam: 
   :depends on pytest: 
   :depends on pytest-socket: 
   :depends on python: 
   :depends on python-levenshtein: 
   :depends on pyyaml: 
   :depends on requests: ``>=2.22.*``
   :depends on ripgrep: 
   :depends on samtools: ``>=1.10``
   :depends on wget: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install ggd

to add into an existing workspace instead, run::

    pixi add ggd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ggd

Alternatively, to install into a new environment, run::

    conda create -n envname ggd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ggd:<tag>

(see `ggd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ggd| image:: https://img.shields.io/conda/dn/bioconda/ggd.svg?style=flat
   :target: https://anaconda.org/bioconda/ggd
   :alt:   (downloads)
.. |docker_ggd| image:: https://quay.io/repository/biocontainers/ggd/status
   :target: https://quay.io/repository/biocontainers/ggd
.. _`ggd/tags`: https://quay.io/repository/biocontainers/ggd?tab=tags


.. raw:: html

    <script>
        var package = "ggd";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggd/README.html