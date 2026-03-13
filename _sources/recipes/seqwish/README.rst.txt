:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqwish'
.. highlight: bash

seqwish
=======

.. conda:recipe:: seqwish
   :replaces_section_title:
   :noindex:

   Alignment to variation graph inducer

   :homepage: https://github.com/ekg/seqwish
   :license: MIT
   :recipe: /`seqwish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish/meta.yaml>`_

   


.. conda:package:: seqwish

   |downloads_seqwish| |docker_seqwish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.11-1</code>,  <code>0.7.11-0</code>,  <code>0.7.10-1</code>,  <code>0.7.10-0</code>,  <code>0.7.9-2</code>,  <code>0.7.9-1</code>,  <code>0.7.9-0</code>,  <code>0.7.8-0</code>,  <code>0.7.7-1</code>,  </span></summary>
      

      ``0.7.11-1``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-2``,  ``0.7.9-1``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.6``

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

    pixi global install seqwish

to add into an existing workspace instead, run::

    pixi add seqwish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqwish

Alternatively, to install into a new environment, run::

    conda create -n envname seqwish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqwish:<tag>

(see `seqwish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqwish| image:: https://img.shields.io/conda/dn/bioconda/seqwish.svg?style=flat
   :target: https://anaconda.org/bioconda/seqwish
   :alt:   (downloads)
.. |docker_seqwish| image:: https://quay.io/repository/biocontainers/seqwish/status
   :target: https://quay.io/repository/biocontainers/seqwish
.. _`seqwish/tags`: https://quay.io/repository/biocontainers/seqwish?tab=tags


.. raw:: html

    <script>
        var package = "seqwish";
        var versions = ["0.7.11","0.7.11","0.7.10","0.7.10","0.7.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqwish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqwish/README.html