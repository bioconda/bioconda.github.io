:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forked-path'
.. highlight: bash

forked-path
===========

.. conda:recipe:: forked-path
   :replaces_section_title:
   :noindex:

   An object oriented file path module

   :homepage: http://github.com/Singletoned/forked-path
   :license: Public Domain
   :recipe: /`forked-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path/meta.yaml>`_

   


.. conda:package:: forked-path

   |downloads_forked-path| |docker_forked-path|

   :versions:
      
      

      ``0.2.3-2``,  ``0.2.3-0``

      

   
   :depends on python: ``>=2.7,<2.8.0a0``

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

    pixi global install forked-path

to add into an existing workspace instead, run::

    pixi add forked-path

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install forked-path

Alternatively, to install into a new environment, run::

    conda create -n envname forked-path

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/forked-path:<tag>

(see `forked-path/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_forked-path| image:: https://img.shields.io/conda/dn/bioconda/forked-path.svg?style=flat
   :target: https://anaconda.org/bioconda/forked-path
   :alt:   (downloads)
.. |docker_forked-path| image:: https://quay.io/repository/biocontainers/forked-path/status
   :target: https://quay.io/repository/biocontainers/forked-path
.. _`forked-path/tags`: https://quay.io/repository/biocontainers/forked-path?tab=tags


.. raw:: html

    <script>
        var package = "forked-path";
        var versions = ["0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forked-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forked-path/README.html