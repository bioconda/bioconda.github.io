:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'percolator'
.. highlight: bash

percolator
==========

.. conda:recipe:: percolator
   :replaces_section_title:
   :noindex:

   Semi\-supervised learning for peptide identification from shotgun proteomics datasets.

   :homepage: https://github.com/percolator/percolator
   :documentation: http://percolator.ms
   
   :license: APACHE / Apache-2.0
   :recipe: /`percolator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator/meta.yaml>`_
   :links: biotools: :biotools:`Percolator`, doi: :doi:`10.1007/s13361-016-1460-7`, usegalaxy-eu: :usegalaxy-eu:`percolator`

   


.. conda:package:: percolator

   |downloads_percolator| |docker_percolator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.1-2</code>,  <code>3.7.1-0</code>,  <code>3.6.5-0</code>,  <code>3.5-1</code>,  <code>3.5-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.1-4</code>,  <code>3.1-3</code>,  </span></summary>
      

      ``3.7.1-2``,  ``3.7.1-0``,  ``3.6.5-0``,  ``3.5-1``,  ``3.5-0``,  ``3.4-1``,  ``3.4-0``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.49.1,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on sqlite: 
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``
   :depends on xsd: ``>=4.0.0.0dep,<5.0a0``
   :depends on zlib: 

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

    pixi global install percolator

to add into an existing workspace instead, run::

    pixi add percolator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install percolator

Alternatively, to install into a new environment, run::

    conda create -n envname percolator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/percolator:<tag>

(see `percolator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_percolator| image:: https://img.shields.io/conda/dn/bioconda/percolator.svg?style=flat
   :target: https://anaconda.org/bioconda/percolator
   :alt:   (downloads)
.. |docker_percolator| image:: https://quay.io/repository/biocontainers/percolator/status
   :target: https://quay.io/repository/biocontainers/percolator
.. _`percolator/tags`: https://quay.io/repository/biocontainers/percolator?tab=tags


.. raw:: html

    <script>
        var package = "percolator";
        var versions = ["3.7.1","3.7.1","3.6.5","3.5","3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/percolator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/percolator/README.html