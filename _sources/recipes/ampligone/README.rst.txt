:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampligone'
.. highlight: bash

ampligone
=========

.. conda:recipe:: ampligone
   :replaces_section_title:
   :noindex:

   Ampligone is a tool which accurately removes primer sequences from FastQ NGS reads in an amplicon sequencing experiment

   :homepage: https://rivm-bioinformatics.github.io/AmpliGone/
   :developer docs: https://github.com/RIVM-bioinformatics/AmpliGone
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`ampligone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampligone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampligone/meta.yaml>`_

   


.. conda:package:: ampligone

   |downloads_ampligone| |docker_ampligone|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on biopython: ``1.84``
   :depends on mappy: ``2.28``
   :depends on pandas: ``2.2.*``
   :depends on parasail-python: ``1.3.4``
   :depends on parmap: ``1.7.*``
   :depends on pgzip: ``0.3.4``
   :depends on pysam: ``0.22.*``
   :depends on python: ``>=3.10``
   :depends on rich: ``13.7.*``

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

    pixi global install ampligone

to add into an existing workspace instead, run::

    pixi add ampligone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ampligone

Alternatively, to install into a new environment, run::

    conda create -n envname ampligone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ampligone:<tag>

(see `ampligone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ampligone| image:: https://img.shields.io/conda/dn/bioconda/ampligone.svg?style=flat
   :target: https://anaconda.org/bioconda/ampligone
   :alt:   (downloads)
.. |docker_ampligone| image:: https://quay.io/repository/biocontainers/ampligone/status
   :target: https://quay.io/repository/biocontainers/ampligone
.. _`ampligone/tags`: https://quay.io/repository/biocontainers/ampligone?tab=tags


.. raw:: html

    <script>
        var package = "ampligone";
        var versions = ["2.0.2","2.0.1","1.3.1","1.3.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampligone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampligone/README.html