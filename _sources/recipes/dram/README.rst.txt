:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dram'
.. highlight: bash

dram
====

.. conda:recipe:: dram
   :replaces_section_title:
   :noindex:

   Distilled and Refined Annotation of Metabolism\: A tool for the annotation and curation of function for microbial and viral genomes

   :homepage: https://github.com/shafferm/DRAM/
   :documentation: https://github.com/shafferm/DRAM/wiki
   
   :license: GPL / GPL-3.0
   :recipe: /`dram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dram/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.29.177501`

   


.. conda:package:: dram

   |downloads_dram| |docker_dram|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on altair: ``>=4``
   :depends on barrnap: 
   :depends on curl: 
   :depends on hmmer: 
   :depends on mmseqs2: ``>10.6d92c``
   :depends on networkx: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: ``>=1.5,<2``
   :depends on parallel: 
   :depends on prodigal: 
   :depends on python: ``>=3.8``
   :depends on ruby: 
   :depends on scikit-bio: ``>=0.5.8,<0.6``
   :depends on scipy: ``>=1.9``
   :depends on sqlalchemy: 
   :depends on trnascan-se: ``>=2``
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

    pixi global install dram

to add into an existing workspace instead, run::

    pixi add dram

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dram

Alternatively, to install into a new environment, run::

    conda create -n envname dram

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dram:<tag>

(see `dram/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dram| image:: https://img.shields.io/conda/dn/bioconda/dram.svg?style=flat
   :target: https://anaconda.org/bioconda/dram
   :alt:   (downloads)
.. |docker_dram| image:: https://quay.io/repository/biocontainers/dram/status
   :target: https://quay.io/repository/biocontainers/dram
.. _`dram/tags`: https://quay.io/repository/biocontainers/dram?tab=tags


.. raw:: html

    <script>
        var package = "dram";
        var versions = ["1.5.0","1.4.6","1.4.6","1.4.6","1.4.5"];
    </script>





Notes
-----
Databases are required. Please run \'DRAM\-setup.py prepare\_databases\' with the respective options.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dram/README.html