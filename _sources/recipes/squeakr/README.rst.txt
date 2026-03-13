:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squeakr'
.. highlight: bash

squeakr
=======

.. conda:recipe:: squeakr
   :replaces_section_title:
   :noindex:

   An Exact and Approximate k\-mer Counting System.

   :homepage: https://github.com/splatlab/squeakr
   :license: BSD / BSD-3-Clause
   :recipe: /`squeakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr/meta.yaml>`_

   


.. conda:package:: squeakr

   |downloads_squeakr| |docker_squeakr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8-0</code>,  <code>0.7-1</code>,  <code>0.7-0</code>,  <code>0.6-5</code>,  <code>0.6-4</code>,  <code>0.6-3</code>,  <code>0.6-2</code>,  <code>0.6-1</code>,  <code>0.6-0</code>,  </span></summary>
      

      ``0.8-0``,  ``0.7-1``,  ``0.7-0``,  ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.3,<4.0a0``
   :depends on pthread-stubs: 

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

    pixi global install squeakr

to add into an existing workspace instead, run::

    pixi add squeakr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install squeakr

Alternatively, to install into a new environment, run::

    conda create -n envname squeakr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/squeakr:<tag>

(see `squeakr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_squeakr| image:: https://img.shields.io/conda/dn/bioconda/squeakr.svg?style=flat
   :target: https://anaconda.org/bioconda/squeakr
   :alt:   (downloads)
.. |docker_squeakr| image:: https://quay.io/repository/biocontainers/squeakr/status
   :target: https://quay.io/repository/biocontainers/squeakr
.. _`squeakr/tags`: https://quay.io/repository/biocontainers/squeakr?tab=tags


.. raw:: html

    <script>
        var package = "squeakr";
        var versions = ["0.8","0.7","0.7","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeakr/README.html