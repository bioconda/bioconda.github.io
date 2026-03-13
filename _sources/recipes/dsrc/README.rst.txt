:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsrc'
.. highlight: bash

dsrc
====

.. conda:recipe:: dsrc
   :replaces_section_title:
   :noindex:

   High\-performance compression of sequencing reads stored in FASTQ format.

   :homepage: https://github.com/refresh-bio/DSRC
   :license: GPL-2.0-or-later
   :recipe: /`dsrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc/meta.yaml>`_
   :links: biotools: :biotools:`dsrc`

   


.. conda:package:: dsrc

   |downloads_dsrc| |docker_dsrc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2015.06.04-10</code>,  <code>2015.06.04-9</code>,  <code>2015.06.04-8</code>,  <code>2015.06.04-7</code>,  <code>2015.06.04-6</code>,  <code>2015.06.04-5</code>,  <code>2015.06.04-4</code>,  <code>2015.06.04-3</code>,  <code>2015.06.04-2</code>,  </span></summary>
      

      ``2015.06.04-10``,  ``2015.06.04-9``,  ``2015.06.04-8``,  ``2015.06.04-7``,  ``2015.06.04-6``,  ``2015.06.04-5``,  ``2015.06.04-4``,  ``2015.06.04-3``,  ``2015.06.04-2``,  ``2015.06.04-1``,  ``2015.06.04-0``,  ``2014.12.17-2``,  ``2014.12.17-1``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
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

    pixi global install dsrc

to add into an existing workspace instead, run::

    pixi add dsrc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dsrc

Alternatively, to install into a new environment, run::

    conda create -n envname dsrc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dsrc:<tag>

(see `dsrc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dsrc| image:: https://img.shields.io/conda/dn/bioconda/dsrc.svg?style=flat
   :target: https://anaconda.org/bioconda/dsrc
   :alt:   (downloads)
.. |docker_dsrc| image:: https://quay.io/repository/biocontainers/dsrc/status
   :target: https://quay.io/repository/biocontainers/dsrc
.. _`dsrc/tags`: https://quay.io/repository/biocontainers/dsrc?tab=tags


.. raw:: html

    <script>
        var package = "dsrc";
        var versions = ["2015.06.04","2015.06.04","2015.06.04","2015.06.04","2015.06.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsrc/README.html