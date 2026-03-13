:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magetab-curation-scripts'
.. highlight: bash

magetab-curation-scripts
========================

.. conda:recipe:: magetab-curation-scripts
   :replaces_section_title:
   :noindex:

   Perl\-based scripts for ArrayExpress and Expression Atlas curation of MAGE\-TAB files

   :homepage: https://github.com/ebi-gene-expression-group/perl-curation-scripts
   :license: APACHE / Apache Software License
   :recipe: /`magetab-curation-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts/meta.yaml>`_

   The scripts are used by ArrayExpress and Expression Atlas curators for
   validating and processing experiments and array designs in MAGE\-TAB format.



.. conda:package:: magetab-curation-scripts

   |downloads_magetab-curation-scripts| |docker_magetab-curation-scripts|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on perl: 
   :depends on perl-atlas-modules: ``>=0.2.0``

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

    pixi global install magetab-curation-scripts

to add into an existing workspace instead, run::

    pixi add magetab-curation-scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magetab-curation-scripts

Alternatively, to install into a new environment, run::

    conda create -n envname magetab-curation-scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magetab-curation-scripts:<tag>

(see `magetab-curation-scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magetab-curation-scripts| image:: https://img.shields.io/conda/dn/bioconda/magetab-curation-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/magetab-curation-scripts
   :alt:   (downloads)
.. |docker_magetab-curation-scripts| image:: https://quay.io/repository/biocontainers/magetab-curation-scripts/status
   :target: https://quay.io/repository/biocontainers/magetab-curation-scripts
.. _`magetab-curation-scripts/tags`: https://quay.io/repository/biocontainers/magetab-curation-scripts?tab=tags


.. raw:: html

    <script>
        var package = "magetab-curation-scripts";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magetab-curation-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magetab-curation-scripts/README.html