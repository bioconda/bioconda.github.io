:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jclusterfunk'
.. highlight: bash

jclusterfunk
============

.. conda:recipe:: jclusterfunk
   :replaces_section_title:
   :noindex:

   A command line tool with a bunch of functions for trees

   :homepage: https://github.com/snake-flu/jclusterfunk
   :license: `GPL3 / GPL-3.0-only <https://github.com/snake-flu/jclusterfunk/blob/master/LICENSE>`_
   :recipe: /`jclusterfunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jclusterfunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jclusterfunk/meta.yaml>`_

   


.. conda:package:: jclusterfunk

   |downloads_jclusterfunk| |docker_jclusterfunk|

   :versions:
      
      

      ``0.0.25-0``

      

   
   :depends on openjdk: 

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

    pixi global install jclusterfunk

to add into an existing workspace instead, run::

    pixi add jclusterfunk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jclusterfunk

Alternatively, to install into a new environment, run::

    conda create -n envname jclusterfunk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jclusterfunk:<tag>

(see `jclusterfunk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jclusterfunk| image:: https://img.shields.io/conda/dn/bioconda/jclusterfunk.svg?style=flat
   :target: https://anaconda.org/bioconda/jclusterfunk
   :alt:   (downloads)
.. |docker_jclusterfunk| image:: https://quay.io/repository/biocontainers/jclusterfunk/status
   :target: https://quay.io/repository/biocontainers/jclusterfunk
.. _`jclusterfunk/tags`: https://quay.io/repository/biocontainers/jclusterfunk?tab=tags


.. raw:: html

    <script>
        var package = "jclusterfunk";
        var versions = ["0.0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jclusterfunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jclusterfunk/README.html