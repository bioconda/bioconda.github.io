:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapcut2'
.. highlight: bash

hapcut2
=======

.. conda:recipe:: hapcut2
   :replaces_section_title:
   :noindex:

   Tools for haplotype assembly from sequence data.

   :homepage: https://github.com/vibansal/HapCUT2
   :documentation: https://github.com/vibansal/HapCUT2/blob/v1.3.4/README.md
   
   :license: BSD / BSD-2-Clause
   :recipe: /`hapcut2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.213462.116`

   


.. conda:package:: hapcut2

   |downloads_hapcut2| |docker_hapcut2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-2</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.3-5</code>,  <code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  </span></summary>
      

      ``1.3.4-2``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-5``,  ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pysam: 
   :depends on python: ``>=3.5``

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

    pixi global install hapcut2

to add into an existing workspace instead, run::

    pixi add hapcut2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hapcut2

Alternatively, to install into a new environment, run::

    conda create -n envname hapcut2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hapcut2:<tag>

(see `hapcut2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hapcut2| image:: https://img.shields.io/conda/dn/bioconda/hapcut2.svg?style=flat
   :target: https://anaconda.org/bioconda/hapcut2
   :alt:   (downloads)
.. |docker_hapcut2| image:: https://quay.io/repository/biocontainers/hapcut2/status
   :target: https://quay.io/repository/biocontainers/hapcut2
.. _`hapcut2/tags`: https://quay.io/repository/biocontainers/hapcut2?tab=tags


.. raw:: html

    <script>
        var package = "hapcut2";
        var versions = ["1.3.4","1.3.4","1.3.4","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapcut2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapcut2/README.html