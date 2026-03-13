:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitem'
.. highlight: bash

unitem
======

.. conda:recipe:: unitem
   :replaces_section_title:
   :noindex:

   Ensemble binning strategies for combining the output of multiple binning methods.

   :homepage: https://github.com/dparks1134/UniteM
   :license: GPL3 / GPL-3.0-only
   :recipe: /`unitem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem/meta.yaml>`_

   


.. conda:package:: unitem

   |downloads_unitem| |docker_unitem|

   :versions:
      
      

      ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``0.0.18-0``

      

   
   :depends on maxbin2: ``>=2.2.7``
   :depends on metabat2: ``>=2.15``
   :depends on numpy: ``>=1.24``
   :depends on python: ``>=3``
   :depends on svgwrite: ``>=1.4.1``

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

    pixi global install unitem

to add into an existing workspace instead, run::

    pixi add unitem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unitem

Alternatively, to install into a new environment, run::

    conda create -n envname unitem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unitem:<tag>

(see `unitem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unitem| image:: https://img.shields.io/conda/dn/bioconda/unitem.svg?style=flat
   :target: https://anaconda.org/bioconda/unitem
   :alt:   (downloads)
.. |docker_unitem| image:: https://quay.io/repository/biocontainers/unitem/status
   :target: https://quay.io/repository/biocontainers/unitem
.. _`unitem/tags`: https://quay.io/repository/biocontainers/unitem?tab=tags


.. raw:: html

    <script>
        var package = "unitem";
        var versions = ["1.2.6","1.2.5","1.2.4","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitem/README.html