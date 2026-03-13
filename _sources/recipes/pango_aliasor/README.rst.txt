:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango_aliasor'
.. highlight: bash

pango_aliasor
=============

.. conda:recipe:: pango_aliasor
   :replaces_section_title:
   :noindex:

   Pango lineage aliasing and dealiasing

   :homepage: https://github.com/corneliusroemer/pango_aliasor
   :license: MIT
   :recipe: /`pango_aliasor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango_aliasor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango_aliasor/meta.yaml>`_

   


.. conda:package:: pango_aliasor

   |downloads_pango_aliasor| |docker_pango_aliasor|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on python: ``>=3.7``

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

    pixi global install pango_aliasor

to add into an existing workspace instead, run::

    pixi add pango_aliasor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pango_aliasor

Alternatively, to install into a new environment, run::

    conda create -n envname pango_aliasor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pango_aliasor:<tag>

(see `pango_aliasor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pango_aliasor| image:: https://img.shields.io/conda/dn/bioconda/pango_aliasor.svg?style=flat
   :target: https://anaconda.org/bioconda/pango_aliasor
   :alt:   (downloads)
.. |docker_pango_aliasor| image:: https://quay.io/repository/biocontainers/pango_aliasor/status
   :target: https://quay.io/repository/biocontainers/pango_aliasor
.. _`pango_aliasor/tags`: https://quay.io/repository/biocontainers/pango_aliasor?tab=tags


.. raw:: html

    <script>
        var package = "pango_aliasor";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango_aliasor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango_aliasor/README.html