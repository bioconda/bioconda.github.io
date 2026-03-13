:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-mark-dups'
.. highlight: bash

hmftools-mark-dups
==================

.. conda:recipe:: hmftools-mark-dups
   :replaces_section_title:
   :noindex:

   Mark read duplicates and form consenus sequences

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/mark-dups
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-mark-dups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-mark-dups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-mark-dups/meta.yaml>`_

   


.. conda:package:: hmftools-mark-dups

   |downloads_hmftools-mark-dups| |docker_hmftools-mark-dups|

   :versions:
      
      

      ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on sambamba: ``>=1.0.1``
   :depends on samtools: ``>=1.17``

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

    pixi global install hmftools-mark-dups

to add into an existing workspace instead, run::

    pixi add hmftools-mark-dups

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-mark-dups

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-mark-dups

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-mark-dups:<tag>

(see `hmftools-mark-dups/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-mark-dups| image:: https://img.shields.io/conda/dn/bioconda/hmftools-mark-dups.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-mark-dups
   :alt:   (downloads)
.. |docker_hmftools-mark-dups| image:: https://quay.io/repository/biocontainers/hmftools-mark-dups/status
   :target: https://quay.io/repository/biocontainers/hmftools-mark-dups
.. _`hmftools-mark-dups/tags`: https://quay.io/repository/biocontainers/hmftools-mark-dups?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-mark-dups";
        var versions = ["1.1.7","1.1.6","1.1.5","1.1.5","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-mark-dups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-mark-dups/README.html