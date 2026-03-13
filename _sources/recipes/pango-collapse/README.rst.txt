:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango-collapse'
.. highlight: bash

pango-collapse
==============

.. conda:recipe:: pango-collapse
   :replaces_section_title:
   :noindex:

   Collapse Pango sublineages up to user defined parent lineages.

   :homepage: https://github.com/MDU-PHL/pango-collapse
   :license: GPL-3.0-or-later
   :recipe: /`pango-collapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-collapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-collapse/meta.yaml>`_

   


.. conda:package:: pango-collapse

   |downloads_pango-collapse| |docker_pango-collapse|

   :versions:
      
      

      ``0.8.2-0``

      

   
   :depends on numpy: ``>=1.19.5,<1.27.0``
   :depends on pandas: ``>=1.3,<=1.5.3``
   :depends on pango_aliasor: ``>=0.3.0,<0.4.0``
   :depends on python: ``>=3.8,<4.0``
   :depends on typer: ``>=0.6.1,<0.7.0``

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

    pixi global install pango-collapse

to add into an existing workspace instead, run::

    pixi add pango-collapse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pango-collapse

Alternatively, to install into a new environment, run::

    conda create -n envname pango-collapse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pango-collapse:<tag>

(see `pango-collapse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pango-collapse| image:: https://img.shields.io/conda/dn/bioconda/pango-collapse.svg?style=flat
   :target: https://anaconda.org/bioconda/pango-collapse
   :alt:   (downloads)
.. |docker_pango-collapse| image:: https://quay.io/repository/biocontainers/pango-collapse/status
   :target: https://quay.io/repository/biocontainers/pango-collapse
.. _`pango-collapse/tags`: https://quay.io/repository/biocontainers/pango-collapse?tab=tags


.. raw:: html

    <script>
        var package = "pango-collapse";
        var versions = ["0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango-collapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango-collapse/README.html