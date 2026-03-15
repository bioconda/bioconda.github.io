:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trust4'
.. highlight: bash

trust4
======

.. conda:recipe:: trust4
   :replaces_section_title:
   :noindex:

   TCR and BCR assembly from bulk or single\-cell RNA\-seq data.

   :homepage: https://github.com/liulab-dfci/TRUST4
   :documentation: https://github.com/liulab-dfci/TRUST4/blob/v1.1.8/README.md
   
   :license: MIT / MIT
   :recipe: /`trust4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trust4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trust4/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01142-2`, biotools: :biotools:`trust4`

   


.. conda:package:: trust4

   |downloads_trust4| |docker_trust4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.8-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6.1-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  </span></summary>
      

      ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6.1-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5.1-0``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 

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

    pixi global install trust4

to add into an existing workspace instead, run::

    pixi add trust4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trust4

Alternatively, to install into a new environment, run::

    conda create -n envname trust4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trust4:<tag>

(see `trust4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trust4| image:: https://img.shields.io/conda/dn/bioconda/trust4.svg?style=flat
   :target: https://anaconda.org/bioconda/trust4
   :alt:   (downloads)
.. |docker_trust4| image:: https://quay.io/repository/biocontainers/trust4/status
   :target: https://quay.io/repository/biocontainers/trust4
.. _`trust4/tags`: https://quay.io/repository/biocontainers/trust4?tab=tags


.. raw:: html

    <script>
        var package = "trust4";
        var versions = ["1.1.8","1.1.7","1.1.6.1","1.1.6","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trust4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trust4/README.html