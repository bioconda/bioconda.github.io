:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoop'
.. highlight: bash

scoop
=====

.. conda:recipe:: scoop
   :replaces_section_title:
   :noindex:

   Scalable COncurrent Operations in Python.

   :homepage: https://github.com/soravux/scoop
   :documentation: https://scoop.readthedocs.io
   
   :license: LGPL / LGPL-3.0-only
   :recipe: /`scoop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop/meta.yaml>`_

   


.. conda:package:: scoop

   |downloads_scoop| |docker_scoop|

   :versions:
      
      

      ``0.7.2.0-0``,  ``0.7.1.1-4``,  ``0.7.1.1-3``,  ``0.7.1.1-2``,  ``0.7.1.1-1``,  ``0.7.1.1-0``

      

   
   :depends on greenlet: ``>=0.3.4``
   :depends on psutil: 
   :depends on python: ``>=3``
   :depends on pyzmq: ``>=13.1.0``

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

    pixi global install scoop

to add into an existing workspace instead, run::

    pixi add scoop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scoop

Alternatively, to install into a new environment, run::

    conda create -n envname scoop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scoop:<tag>

(see `scoop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scoop| image:: https://img.shields.io/conda/dn/bioconda/scoop.svg?style=flat
   :target: https://anaconda.org/bioconda/scoop
   :alt:   (downloads)
.. |docker_scoop| image:: https://quay.io/repository/biocontainers/scoop/status
   :target: https://quay.io/repository/biocontainers/scoop
.. _`scoop/tags`: https://quay.io/repository/biocontainers/scoop?tab=tags


.. raw:: html

    <script>
        var package = "scoop";
        var versions = ["0.7.2.0","0.7.1.1","0.7.1.1","0.7.1.1","0.7.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoop/README.html