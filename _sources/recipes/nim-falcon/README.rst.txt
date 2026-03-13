:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nim-falcon'
.. highlight: bash

nim-falcon
==========

.. conda:recipe:: nim-falcon
   :replaces_section_title:
   :noindex:

   Nim\-based executables used by Falcon assembly workflow

   :homepage: https://github.com/bio-nim/nim-falcon
   :license: MIT
   :recipe: /`nim-falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-falcon/meta.yaml>`_

   


.. conda:package:: nim-falcon

   |downloads_nim-falcon| |docker_nim-falcon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-2</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>2.3.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.3.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``

   :additional platforms:
      

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

    pixi global install nim-falcon

to add into an existing workspace instead, run::

    pixi add nim-falcon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nim-falcon

Alternatively, to install into a new environment, run::

    conda create -n envname nim-falcon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nim-falcon:<tag>

(see `nim-falcon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nim-falcon| image:: https://img.shields.io/conda/dn/bioconda/nim-falcon.svg?style=flat
   :target: https://anaconda.org/bioconda/nim-falcon
   :alt:   (downloads)
.. |docker_nim-falcon| image:: https://quay.io/repository/biocontainers/nim-falcon/status
   :target: https://quay.io/repository/biocontainers/nim-falcon
.. _`nim-falcon/tags`: https://quay.io/repository/biocontainers/nim-falcon?tab=tags


.. raw:: html

    <script>
        var package = "nim-falcon";
        var versions = ["3.0.2","3.0.2","3.0.2","3.0.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nim-falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nim-falcon/README.html