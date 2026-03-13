:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emmtyper'
.. highlight: bash

emmtyper
========

.. conda:recipe:: emmtyper
   :replaces_section_title:
   :noindex:

   Streptococcus pyogenes in silico EMM typer

   :homepage: https://github.com/MDUPHL/emmtyper
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`emmtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmtyper/meta.yaml>`_

   


.. conda:package:: emmtyper

   |downloads_emmtyper| |docker_emmtyper|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on blast: ``>=2.6.0``
   :depends on click: 
   :depends on ispcr: 
   :depends on numpy: ``>=1.15.0``
   :depends on python: ``>=3``
   :depends on python-dateutil: 
   :depends on scipy: ``>=1.1.0``

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

    pixi global install emmtyper

to add into an existing workspace instead, run::

    pixi add emmtyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emmtyper

Alternatively, to install into a new environment, run::

    conda create -n envname emmtyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emmtyper:<tag>

(see `emmtyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emmtyper| image:: https://img.shields.io/conda/dn/bioconda/emmtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/emmtyper
   :alt:   (downloads)
.. |docker_emmtyper| image:: https://quay.io/repository/biocontainers/emmtyper/status
   :target: https://quay.io/repository/biocontainers/emmtyper
.. _`emmtyper/tags`: https://quay.io/repository/biocontainers/emmtyper?tab=tags


.. raw:: html

    <script>
        var package = "emmtyper";
        var versions = ["0.2.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emmtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emmtyper/README.html