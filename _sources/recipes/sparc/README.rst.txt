:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparc'
.. highlight: bash

sparc
=====

.. conda:recipe:: sparc
   :replaces_section_title:
   :noindex:

   A sparsity\-based consensus algorithm for long erroneous sequencing reads.

   :homepage: https://github.com/yechengxi/Sparc
   :license: MIT / MIT
   :recipe: /`sparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc/meta.yaml>`_

   


.. conda:package:: sparc

   |downloads_sparc| |docker_sparc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20160205-13</code>,  <code>20160205-12</code>,  <code>20160205-11</code>,  <code>20160205-10</code>,  <code>20160205-9</code>,  <code>20160205-8</code>,  <code>20160205-7</code>,  <code>20160205-6</code>,  <code>20160205-5</code>,  </span></summary>
      

      ``20160205-13``,  ``20160205-12``,  ``20160205-11``,  ``20160205-10``,  ``20160205-9``,  ``20160205-8``,  ``20160205-7``,  ``20160205-6``,  ``20160205-5``,  ``20160205-4``,  ``20160205-3``,  ``20160205-2``,  ``20160205-1``,  ``20160205-0``

      
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

    pixi global install sparc

to add into an existing workspace instead, run::

    pixi add sparc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sparc

Alternatively, to install into a new environment, run::

    conda create -n envname sparc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sparc:<tag>

(see `sparc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sparc| image:: https://img.shields.io/conda/dn/bioconda/sparc.svg?style=flat
   :target: https://anaconda.org/bioconda/sparc
   :alt:   (downloads)
.. |docker_sparc| image:: https://quay.io/repository/biocontainers/sparc/status
   :target: https://quay.io/repository/biocontainers/sparc
.. _`sparc/tags`: https://quay.io/repository/biocontainers/sparc?tab=tags


.. raw:: html

    <script>
        var package = "sparc";
        var versions = ["20160205","20160205","20160205","20160205","20160205"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparc/README.html