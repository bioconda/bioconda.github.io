:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamutil'
.. highlight: bash

bamutil
=======

.. conda:recipe:: bamutil
   :replaces_section_title:
   :noindex:

   Programs that perform operations on SAM\/BAM files\, all built into a single executable\, bam.

   :homepage: https://genome.sph.umich.edu/wiki/BamUtil
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bamutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil/meta.yaml>`_
   :links: biotools: :biotools:`Bamutil`

   


.. conda:package:: bamutil

   |downloads_bamutil| |docker_bamutil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-7</code>,  <code>1.0.15-6</code>,  <code>1.0.15-5</code>,  <code>1.0.15-4</code>,  <code>1.0.15-3</code>,  <code>1.0.15-2</code>,  <code>1.0.15-1</code>,  <code>1.0.15-0</code>,  <code>1.0.14-5</code>,  </span></summary>
      

      ``1.0.15-7``,  ``1.0.15-6``,  ``1.0.15-5``,  ``1.0.15-4``,  ``1.0.15-3``,  ``1.0.15-2``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-5``,  ``1.0.14-4``,  ``1.0.14-3``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``

      
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

    pixi global install bamutil

to add into an existing workspace instead, run::

    pixi add bamutil

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamutil

Alternatively, to install into a new environment, run::

    conda create -n envname bamutil

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamutil:<tag>

(see `bamutil/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamutil| image:: https://img.shields.io/conda/dn/bioconda/bamutil.svg?style=flat
   :target: https://anaconda.org/bioconda/bamutil
   :alt:   (downloads)
.. |docker_bamutil| image:: https://quay.io/repository/biocontainers/bamutil/status
   :target: https://quay.io/repository/biocontainers/bamutil
.. _`bamutil/tags`: https://quay.io/repository/biocontainers/bamutil?tab=tags


.. raw:: html

    <script>
        var package = "bamutil";
        var versions = ["1.0.15","1.0.15","1.0.15","1.0.15","1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamutil/README.html