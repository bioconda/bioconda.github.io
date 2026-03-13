:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqgate'
.. highlight: bash

bioconductor-seqgate
====================

.. conda:recipe:: bioconductor-seqgate
   :replaces_section_title:
   :noindex:

   Filtering of Lowly Expressed Features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SeqGate.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-seqgate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgate/meta.yaml>`_

   Filtering of lowly expressed features \(e.g. genes\) is a common step before performing statistical analysis\, but an arbitrary threshold is generally chosen. SeqGate implements a method that rationalize this step by the analysis of the distibution of counts in replicate samples. The gate is the threshold above which sequenced features can be considered as confidently quantified.


.. conda:package:: bioconductor-seqgate

   |downloads_bioconductor-seqgate| |docker_bioconductor-seqgate|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 

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

    pixi global install bioconductor-seqgate

to add into an existing workspace instead, run::

    pixi add bioconductor-seqgate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqgate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqgate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqgate:<tag>

(see `bioconductor-seqgate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqgate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqgate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqgate
   :alt:   (downloads)
.. |docker_bioconductor-seqgate| image:: https://quay.io/repository/biocontainers/bioconductor-seqgate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqgate
.. _`bioconductor-seqgate/tags`: https://quay.io/repository/biocontainers/bioconductor-seqgate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqgate";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqgate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqgate/README.html