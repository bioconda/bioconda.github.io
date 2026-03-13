:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alv'
.. highlight: bash

alv
===

.. conda:recipe:: alv
   :replaces_section_title:
   :noindex:

   A console\-based sequence alignment viewer

   :homepage: https://github.com/arvestad/alv
   :license: GPL3 / GPL-3.0-only
   :recipe: /`alv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv/meta.yaml>`_

   


.. conda:package:: alv

   |downloads_alv| |docker_alv|

   :versions:
      
      

      ``1.8.1-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on colorama: ``>=0.3.8``
   :depends on python: ``>=3.6``

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

    pixi global install alv

to add into an existing workspace instead, run::

    pixi add alv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alv

Alternatively, to install into a new environment, run::

    conda create -n envname alv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alv:<tag>

(see `alv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alv| image:: https://img.shields.io/conda/dn/bioconda/alv.svg?style=flat
   :target: https://anaconda.org/bioconda/alv
   :alt:   (downloads)
.. |docker_alv| image:: https://quay.io/repository/biocontainers/alv/status
   :target: https://quay.io/repository/biocontainers/alv
.. _`alv/tags`: https://quay.io/repository/biocontainers/alv?tab=tags


.. raw:: html

    <script>
        var package = "alv";
        var versions = ["1.8.1","1.7.2","1.7.1","1.7.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alv/README.html