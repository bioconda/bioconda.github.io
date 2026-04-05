:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slclust'
.. highlight: bash

slclust
=======

.. conda:recipe:: slclust
   :replaces_section_title:
   :noindex:

   A utility that performs single\-linkage clustering with the option of applying a Jaccard similarity coefficient to break weakly bound clusters into distinct clusters.

   :homepage: https://sourceforge.net/projects/slclust
   :license: Artistic License
   :recipe: /`slclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust/meta.yaml>`_

   


.. conda:package:: slclust

   |downloads_slclust| |docker_slclust|

   :versions:
      
      

      ``02022010-6``,  ``02022010-5``,  ``02022010-4``,  ``02022010-3``,  ``02022010-2``,  ``02022010-1``,  ``02022010-0``

      

   
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

    pixi global install slclust

to add into an existing workspace instead, run::

    pixi add slclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install slclust

Alternatively, to install into a new environment, run::

    conda create -n envname slclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/slclust:<tag>

(see `slclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_slclust| image:: https://img.shields.io/conda/dn/bioconda/slclust.svg?style=flat
   :target: https://anaconda.org/bioconda/slclust
   :alt:   (downloads)
.. |docker_slclust| image:: https://quay.io/repository/biocontainers/slclust/status
   :target: https://quay.io/repository/biocontainers/slclust
.. _`slclust/tags`: https://quay.io/repository/biocontainers/slclust?tab=tags


.. raw:: html

    <script>
        var package = "slclust";
        var versions = ["02022010","02022010","02022010","02022010","02022010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slclust/README.html