:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clippy'
.. highlight: bash

clippy
======

.. conda:recipe:: clippy
   :replaces_section_title:
   :noindex:

   An intuitive and interactive peak caller for CLIP data

   :homepage: https://github.com/ulelab/clippy
   :license: GPL-3.0-only
   :recipe: /`clippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy/meta.yaml>`_

   


.. conda:package:: clippy

   |downloads_clippy| |docker_clippy|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-2``,  ``1.3.1-0``

      

   
   :depends on bedtools: ``2.26.0.*``
   :depends on dash: ``1.20.0.*``
   :depends on dash-bootstrap-components: ``0.11.3.*``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.19.0,<1.20.3``
   :depends on numpydoc: 
   :depends on openssl: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on python: ``>=3.8``
   :depends on samtools: ``1.9.*``
   :depends on scipy: 
   :depends on werkzeug: ``2.0.0.*``

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

    pixi global install clippy

to add into an existing workspace instead, run::

    pixi add clippy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clippy

Alternatively, to install into a new environment, run::

    conda create -n envname clippy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clippy:<tag>

(see `clippy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clippy| image:: https://img.shields.io/conda/dn/bioconda/clippy.svg?style=flat
   :target: https://anaconda.org/bioconda/clippy
   :alt:   (downloads)
.. |docker_clippy| image:: https://quay.io/repository/biocontainers/clippy/status
   :target: https://quay.io/repository/biocontainers/clippy
.. _`clippy/tags`: https://quay.io/repository/biocontainers/clippy?tab=tags


.. raw:: html

    <script>
        var package = "clippy";
        var versions = ["1.5.0","1.5.0","1.4.1","1.4.1","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clippy/README.html