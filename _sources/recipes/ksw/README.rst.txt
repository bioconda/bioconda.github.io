:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ksw'
.. highlight: bash

ksw
===

.. conda:recipe:: ksw
   :replaces_section_title:
   :noindex:

   Ksw\: \(interactive\) smith\-waterman in C

   :homepage: https://github.com/nh13/ksw
   :license: MIT / MIT
   :recipe: /`ksw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw/meta.yaml>`_
   :links: biotools: :biotools:`ksw`

   


.. conda:package:: ksw

   |downloads_ksw| |docker_ksw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-0</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.2.3-0``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0a-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on zlib: 

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

    pixi global install ksw

to add into an existing workspace instead, run::

    pixi add ksw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ksw

Alternatively, to install into a new environment, run::

    conda create -n envname ksw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ksw:<tag>

(see `ksw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ksw| image:: https://img.shields.io/conda/dn/bioconda/ksw.svg?style=flat
   :target: https://anaconda.org/bioconda/ksw
   :alt:   (downloads)
.. |docker_ksw| image:: https://quay.io/repository/biocontainers/ksw/status
   :target: https://quay.io/repository/biocontainers/ksw
.. _`ksw/tags`: https://quay.io/repository/biocontainers/ksw?tab=tags


.. raw:: html

    <script>
        var package = "ksw";
        var versions = ["0.2.3","0.2.2","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ksw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ksw/README.html