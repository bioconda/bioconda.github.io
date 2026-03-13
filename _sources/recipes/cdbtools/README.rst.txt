:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdbtools'
.. highlight: bash

cdbtools
========

.. conda:recipe:: cdbtools
   :replaces_section_title:
   :noindex:

   CDB \(Constant DataBase\) indexing and retrieval tools for FASTA files.

   :homepage: http://compbio.dfci.harvard.edu/tgi
   :license: Public Domain
   :recipe: /`cdbtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdbtools/meta.yaml>`_

   


.. conda:package:: cdbtools

   |downloads_cdbtools| |docker_cdbtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99-12</code>,  <code>0.99-10</code>,  <code>0.99-9</code>,  <code>0.99-8</code>,  <code>0.99-7</code>,  <code>0.99-6</code>,  <code>0.99-5</code>,  <code>0.99-4</code>,  <code>0.99-3</code>,  </span></summary>
      

      ``0.99-12``,  ``0.99-10``,  ``0.99-9``,  ``0.99-8``,  ``0.99-7``,  ``0.99-6``,  ``0.99-5``,  ``0.99-4``,  ``0.99-3``,  ``0.99-2``,  ``0.99-1``,  ``0.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install cdbtools

to add into an existing workspace instead, run::

    pixi add cdbtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cdbtools

Alternatively, to install into a new environment, run::

    conda create -n envname cdbtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cdbtools:<tag>

(see `cdbtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cdbtools| image:: https://img.shields.io/conda/dn/bioconda/cdbtools.svg?style=flat
   :target: https://anaconda.org/bioconda/cdbtools
   :alt:   (downloads)
.. |docker_cdbtools| image:: https://quay.io/repository/biocontainers/cdbtools/status
   :target: https://quay.io/repository/biocontainers/cdbtools
.. _`cdbtools/tags`: https://quay.io/repository/biocontainers/cdbtools?tab=tags


.. raw:: html

    <script>
        var package = "cdbtools";
        var versions = ["0.99","0.99","0.99","0.99","0.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdbtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdbtools/README.html