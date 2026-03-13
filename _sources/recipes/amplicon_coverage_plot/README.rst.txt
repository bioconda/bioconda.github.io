:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplicon_coverage_plot'
.. highlight: bash

amplicon_coverage_plot
======================

.. conda:recipe:: amplicon_coverage_plot
   :replaces_section_title:
   :noindex:

   Generate an amplicon coverage plot

   :homepage: https://github.com/chienchi/amplicon_coverage_plot
   :license: GPLv3
   :recipe: /`amplicon_coverage_plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicon_coverage_plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicon_coverage_plot/meta.yaml>`_

   generate an interactive barplot given amplicon info in bed\/bedpe format and coverage information in cov\/bam file.



.. conda:package:: amplicon_coverage_plot

   |downloads_amplicon_coverage_plot| |docker_amplicon_coverage_plot|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends on numpy: ``>=1.15.1``
   :depends on plotly: ``>=4.7.1``
   :depends on pysam: ``>=0.15.4``
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

    pixi global install amplicon_coverage_plot

to add into an existing workspace instead, run::

    pixi add amplicon_coverage_plot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amplicon_coverage_plot

Alternatively, to install into a new environment, run::

    conda create -n envname amplicon_coverage_plot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amplicon_coverage_plot:<tag>

(see `amplicon_coverage_plot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amplicon_coverage_plot| image:: https://img.shields.io/conda/dn/bioconda/amplicon_coverage_plot.svg?style=flat
   :target: https://anaconda.org/bioconda/amplicon_coverage_plot
   :alt:   (downloads)
.. |docker_amplicon_coverage_plot| image:: https://quay.io/repository/biocontainers/amplicon_coverage_plot/status
   :target: https://quay.io/repository/biocontainers/amplicon_coverage_plot
.. _`amplicon_coverage_plot/tags`: https://quay.io/repository/biocontainers/amplicon_coverage_plot?tab=tags


.. raw:: html

    <script>
        var package = "amplicon_coverage_plot";
        var versions = ["0.3.4","0.3.3","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplicon_coverage_plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplicon_coverage_plot/README.html