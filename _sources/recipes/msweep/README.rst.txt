:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msweep'
.. highlight: bash

msweep
======

.. conda:recipe:: msweep
   :replaces_section_title:
   :noindex:

   mSWEEP \- bacterial community composition estimation from pseudoalignments

   :homepage: https://github.com/PROBIC/mSWEEP
   :license: MIT
   :recipe: /`msweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep/meta.yaml>`_
   :links: doi: :doi:`10.12688/wellcomeopenres.15639.2`

   


.. conda:package:: msweep

   |downloads_msweep| |docker_msweep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.6.3-2</code>,  </span></summary>
      

      ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
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

    pixi global install msweep

to add into an existing workspace instead, run::

    pixi add msweep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msweep

Alternatively, to install into a new environment, run::

    conda create -n envname msweep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msweep:<tag>

(see `msweep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msweep| image:: https://img.shields.io/conda/dn/bioconda/msweep.svg?style=flat
   :target: https://anaconda.org/bioconda/msweep
   :alt:   (downloads)
.. |docker_msweep| image:: https://quay.io/repository/biocontainers/msweep/status
   :target: https://quay.io/repository/biocontainers/msweep
.. _`msweep/tags`: https://quay.io/repository/biocontainers/msweep?tab=tags


.. raw:: html

    <script>
        var package = "msweep";
        var versions = ["2.2.1","2.2.1","2.2.0","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msweep/README.html