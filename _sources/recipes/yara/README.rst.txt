:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yara'
.. highlight: bash

yara
====

.. conda:recipe:: yara
   :replaces_section_title:
   :noindex:

   Yara is an exact tool for aligning DNA sequencing reads to reference genomes.

   :homepage: https://github.com/seqan/seqan/tree/seqan-v2.5.1/apps/yara/README.rst
   :license: BSD / BSD 3-Clause
   :recipe: /`yara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara/meta.yaml>`_
   :links: biotools: :biotools:`yara`, doi: :doi:`10.1093/nar/gkt005`

   


.. conda:package:: yara

   |downloads_yara| |docker_yara|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-3</code>,  <code>1.0.2-2</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>0.9.10-1</code>,  <code>0.9.10-0</code>,  <code>0.9.9-0</code>,  </span></summary>
      

      ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
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

    pixi global install yara

to add into an existing workspace instead, run::

    pixi add yara

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yara

Alternatively, to install into a new environment, run::

    conda create -n envname yara

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yara:<tag>

(see `yara/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yara| image:: https://img.shields.io/conda/dn/bioconda/yara.svg?style=flat
   :target: https://anaconda.org/bioconda/yara
   :alt:   (downloads)
.. |docker_yara| image:: https://quay.io/repository/biocontainers/yara/status
   :target: https://quay.io/repository/biocontainers/yara
.. _`yara/tags`: https://quay.io/repository/biocontainers/yara?tab=tags


.. raw:: html

    <script>
        var package = "yara";
        var versions = ["1.0.5","1.0.3","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yara/README.html