:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextgenmap'
.. highlight: bash

nextgenmap
==========

.. conda:recipe:: nextgenmap
   :replaces_section_title:
   :noindex:

   NextGenMap is a flexible highly sensitive short read mapping tool that handles much higher mismatch rates than comparable algorithms while still outperforming them in terms of runtime.

   :homepage: https://github.com/Cibiv/NextGenMap
   :license: MIT / MIT
   :recipe: /`nextgenmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextgenmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextgenmap/meta.yaml>`_

   


.. conda:package:: nextgenmap

   |downloads_nextgenmap| |docker_nextgenmap|

   :versions:
      
      

      ``0.5.5-4``,  ``0.5.5-3``,  ``0.5.5-2``,  ``0.5.5-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.4.13-1``,  ``0.4.13-0``

      

   
   :depends on binutils: 
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``

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

    pixi global install nextgenmap

to add into an existing workspace instead, run::

    pixi add nextgenmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextgenmap

Alternatively, to install into a new environment, run::

    conda create -n envname nextgenmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextgenmap:<tag>

(see `nextgenmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextgenmap| image:: https://img.shields.io/conda/dn/bioconda/nextgenmap.svg?style=flat
   :target: https://anaconda.org/bioconda/nextgenmap
   :alt:   (downloads)
.. |docker_nextgenmap| image:: https://quay.io/repository/biocontainers/nextgenmap/status
   :target: https://quay.io/repository/biocontainers/nextgenmap
.. _`nextgenmap/tags`: https://quay.io/repository/biocontainers/nextgenmap?tab=tags


.. raw:: html

    <script>
        var package = "nextgenmap";
        var versions = ["0.5.5","0.5.5","0.5.5","0.5.5","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextgenmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextgenmap/README.html