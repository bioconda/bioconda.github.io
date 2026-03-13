:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbuffer'
.. highlight: bash

mbuffer
=======

.. conda:recipe:: mbuffer
   :replaces_section_title:
   :noindex:

   mbuffer is a tool for buffering data streams with a large set of unique features

   :homepage: http://www.maier-komor.de/mbuffer.html
   :license: GPLv3
   :recipe: /`mbuffer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbuffer/meta.yaml>`_

   


.. conda:package:: mbuffer

   |downloads_mbuffer| |docker_mbuffer|

   :versions:
      
      

      ``20160228-8``,  ``20160228-7``,  ``20160228-6``,  ``20160228-5``,  ``20160228-4``,  ``20160228-3``,  ``20160228-2``,  ``20160228-1``,  ``20160228-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install mbuffer

to add into an existing workspace instead, run::

    pixi add mbuffer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mbuffer

Alternatively, to install into a new environment, run::

    conda create -n envname mbuffer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mbuffer:<tag>

(see `mbuffer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mbuffer| image:: https://img.shields.io/conda/dn/bioconda/mbuffer.svg?style=flat
   :target: https://anaconda.org/bioconda/mbuffer
   :alt:   (downloads)
.. |docker_mbuffer| image:: https://quay.io/repository/biocontainers/mbuffer/status
   :target: https://quay.io/repository/biocontainers/mbuffer
.. _`mbuffer/tags`: https://quay.io/repository/biocontainers/mbuffer?tab=tags


.. raw:: html

    <script>
        var package = "mbuffer";
        var versions = ["20160228","20160228","20160228","20160228","20160228"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbuffer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbuffer/README.html