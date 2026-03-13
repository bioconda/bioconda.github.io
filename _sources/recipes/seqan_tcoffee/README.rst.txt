:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan_tcoffee'
.. highlight: bash

seqan_tcoffee
=============

.. conda:recipe:: seqan_tcoffee
   :replaces_section_title:
   :noindex:

   SeqAn\:\:T\-Coffee \- Multiple Sequence Alignment.

   :homepage: http://www.seqan.de/apps/seqan-t-coffee
   :developer docs: https://github.com/seqan/seqan/tree/master/apps/seqan_tcoffee
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`seqan_tcoffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan_tcoffee/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn281`

   


.. conda:package:: seqan_tcoffee

   |downloads_seqan_tcoffee| |docker_seqan_tcoffee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13.8-6</code>,  <code>1.13.8-5</code>,  <code>1.13.8-4</code>,  <code>1.13.8-3</code>,  <code>1.13.8-2</code>,  <code>1.13.8-1</code>,  <code>1.13.8-0</code>,  <code>1.13.3-2</code>,  <code>1.13.3-1</code>,  </span></summary>
      

      ``1.13.8-6``,  ``1.13.8-5``,  ``1.13.8-4``,  ``1.13.8-3``,  ``1.13.8-2``,  ``1.13.8-1``,  ``1.13.8-0``,  ``1.13.3-2``,  ``1.13.3-1``,  ``1.13.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install seqan_tcoffee

to add into an existing workspace instead, run::

    pixi add seqan_tcoffee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqan_tcoffee

Alternatively, to install into a new environment, run::

    conda create -n envname seqan_tcoffee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqan_tcoffee:<tag>

(see `seqan_tcoffee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqan_tcoffee| image:: https://img.shields.io/conda/dn/bioconda/seqan_tcoffee.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan_tcoffee
   :alt:   (downloads)
.. |docker_seqan_tcoffee| image:: https://quay.io/repository/biocontainers/seqan_tcoffee/status
   :target: https://quay.io/repository/biocontainers/seqan_tcoffee
.. _`seqan_tcoffee/tags`: https://quay.io/repository/biocontainers/seqan_tcoffee?tab=tags


.. raw:: html

    <script>
        var package = "seqan_tcoffee";
        var versions = ["1.13.8","1.13.8","1.13.8","1.13.8","1.13.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan_tcoffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan_tcoffee/README.html