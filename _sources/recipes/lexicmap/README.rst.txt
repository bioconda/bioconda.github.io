:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lexicmap'
.. highlight: bash

lexicmap
========

.. conda:recipe:: lexicmap
   :replaces_section_title:
   :noindex:

   efficient sequence alignment against millions of prokaryotic genomes

   :homepage: https://github.com/shenwei356/LexicMap
   :license: MIT
   :recipe: /`lexicmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexicmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexicmap/meta.yaml>`_

   


.. conda:package:: lexicmap

   |downloads_lexicmap| |docker_lexicmap|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   

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

    pixi global install lexicmap

to add into an existing workspace instead, run::

    pixi add lexicmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lexicmap

Alternatively, to install into a new environment, run::

    conda create -n envname lexicmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lexicmap:<tag>

(see `lexicmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lexicmap| image:: https://img.shields.io/conda/dn/bioconda/lexicmap.svg?style=flat
   :target: https://anaconda.org/bioconda/lexicmap
   :alt:   (downloads)
.. |docker_lexicmap| image:: https://quay.io/repository/biocontainers/lexicmap/status
   :target: https://quay.io/repository/biocontainers/lexicmap
.. _`lexicmap/tags`: https://quay.io/repository/biocontainers/lexicmap?tab=tags


.. raw:: html

    <script>
        var package = "lexicmap";
        var versions = ["0.9.0","0.8.1","0.8.1","0.8.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexicmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexicmap/README.html