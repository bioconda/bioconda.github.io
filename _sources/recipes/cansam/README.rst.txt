:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansam'
.. highlight: bash

cansam
======

.. conda:recipe:: cansam
   :replaces_section_title:
   :noindex:

   C\+\+ binding for SAM\/BAM files

   :homepage: https://github.com/jmarshall/cansam/
   :license: BSD / BSD-3-Clause
   :recipe: /`cansam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam/meta.yaml>`_

   


.. conda:package:: cansam

   |downloads_cansam| |docker_cansam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3489bc1-1</code>,  <code>3489bc1-0</code>,  <code>21d64bb-8</code>,  <code>21d64bb-7</code>,  <code>21d64bb-6</code>,  <code>21d64bb-5</code>,  <code>21d64bb-4</code>,  <code>21d64bb-3</code>,  <code>21d64bb-2</code>,  </span></summary>
      

      ``3489bc1-1``,  ``3489bc1-0``,  ``21d64bb-8``,  ``21d64bb-7``,  ``21d64bb-6``,  ``21d64bb-5``,  ``21d64bb-4``,  ``21d64bb-3``,  ``21d64bb-2``,  ``21d64bb-1``,  ``21d64bb-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install cansam

to add into an existing workspace instead, run::

    pixi add cansam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cansam

Alternatively, to install into a new environment, run::

    conda create -n envname cansam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cansam:<tag>

(see `cansam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cansam| image:: https://img.shields.io/conda/dn/bioconda/cansam.svg?style=flat
   :target: https://anaconda.org/bioconda/cansam
   :alt:   (downloads)
.. |docker_cansam| image:: https://quay.io/repository/biocontainers/cansam/status
   :target: https://quay.io/repository/biocontainers/cansam
.. _`cansam/tags`: https://quay.io/repository/biocontainers/cansam?tab=tags


.. raw:: html

    <script>
        var package = "cansam";
        var versions = ["3489bc1","3489bc1","21d64bb","21d64bb","21d64bb"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansam/README.html