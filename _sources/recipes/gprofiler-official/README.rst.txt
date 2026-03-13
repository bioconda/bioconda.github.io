:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gprofiler-official'
.. highlight: bash

gprofiler-official
==================

.. conda:recipe:: gprofiler-official
   :replaces_section_title:
   :noindex:

   Functional enrichment analysis and more via the g\:Profiler toolkit

   :homepage: http://biit.cs.ut.ee/gprofiler
   :license: BSD / BSD License
   :recipe: /`gprofiler-official <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gprofiler-official/meta.yaml>`_

   


.. conda:package:: gprofiler-official

   |downloads_gprofiler-official| |docker_gprofiler-official|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends on python: 
   :depends on requests: 

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

    pixi global install gprofiler-official

to add into an existing workspace instead, run::

    pixi add gprofiler-official

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gprofiler-official

Alternatively, to install into a new environment, run::

    conda create -n envname gprofiler-official

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gprofiler-official:<tag>

(see `gprofiler-official/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gprofiler-official| image:: https://img.shields.io/conda/dn/bioconda/gprofiler-official.svg?style=flat
   :target: https://anaconda.org/bioconda/gprofiler-official
   :alt:   (downloads)
.. |docker_gprofiler-official| image:: https://quay.io/repository/biocontainers/gprofiler-official/status
   :target: https://quay.io/repository/biocontainers/gprofiler-official
.. _`gprofiler-official/tags`: https://quay.io/repository/biocontainers/gprofiler-official?tab=tags


.. raw:: html

    <script>
        var package = "gprofiler-official";
        var versions = ["1.0.0","1.0.0","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gprofiler-official/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gprofiler-official/README.html