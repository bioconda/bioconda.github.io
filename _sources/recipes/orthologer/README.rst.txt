:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthologer'
.. highlight: bash

orthologer
==========

.. conda:recipe:: orthologer
   :replaces_section_title:
   :noindex:

   Ortholog detection for comparative genomics and fast functional annotation behind OrthoDB and BUSCO.

   :homepage: https://orthologer.ezlab.org
   :documentation: https://orthologer.ezlab.org/#on-orthodb-data
   
   :developer docs: https://gitlab.com/ezlab/orthologer_container
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`orthologer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthologer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthologer/meta.yaml>`_
   :links: biotools: :biotools:`orthologer`, doi: :doi:`10.1093/nar/gkae987`, PMID: :PMID:`39535043`

   Ortholog detection for comparative genomics and fast functional annotation behind OrthoDB and BUSCO.


.. conda:package:: orthologer

   |downloads_orthologer| |docker_orthologer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.0-0</code>,  <code>3.8.2-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.1-0</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  </span></summary>
      

      ``3.9.0-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bash: ``>=4.1``
   :depends on biopython: 
   :depends on blast: 
   :depends on boost-cpp: 
   :depends on busco: ``>=5.7.0``
   :depends on cd-hit: 
   :depends on diamond: 
   :depends on ete3: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on mmseqs2: 
   :depends on numpy: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on rsync: 
   :depends on spdlog: ``>=1.12.0,<1.13.0a0``
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

    pixi global install orthologer

to add into an existing workspace instead, run::

    pixi add orthologer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthologer

Alternatively, to install into a new environment, run::

    conda create -n envname orthologer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthologer:<tag>

(see `orthologer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthologer| image:: https://img.shields.io/conda/dn/bioconda/orthologer.svg?style=flat
   :target: https://anaconda.org/bioconda/orthologer
   :alt:   (downloads)
.. |docker_orthologer| image:: https://quay.io/repository/biocontainers/orthologer/status
   :target: https://quay.io/repository/biocontainers/orthologer
.. _`orthologer/tags`: https://quay.io/repository/biocontainers/orthologer?tab=tags


.. raw:: html

    <script>
        var package = "orthologer";
        var versions = ["3.9.0","3.8.2","3.8.1","3.8.0","3.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthologer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthologer/README.html