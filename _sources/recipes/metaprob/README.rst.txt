:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaprob'
.. highlight: bash

metaprob
========

.. conda:recipe:: metaprob
   :replaces_section_title:
   :noindex:

   assembly\-assisted tool for un\-supervised metagenomic binning

   :homepage: https://bitbucket.org/samu661/metaprob/
   :license: copyright
   :recipe: /`metaprob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprob/meta.yaml>`_

   MetaProb is a novel assembly\-assisted tool for un\-supervised metagenomic
   binning. The novelty of MetaProb derives from solving a few important
   problems\: how to divide reads into groups of independent reads\, so that
   l\-mer frequencies are not overestimated\; how to convert l\-mer counts into
   probabilistic sequence signatures\, that will correct for variable
   distribution of l\-mers\, and for unbalanced groups of reads\, in order to
   produce better estimates of the underlying genome statistic. We show that
   MetaProb is effective for both simulated and real datasets. It can
   accurately \(with F\-measures of 87 for short reads and 97 long reads\) and
   efficiently bin short and long reads with varying abundance ratios.



.. conda:package:: metaprob

   |downloads_metaprob| |docker_metaprob|

   :versions:
      
      

      ``2-1``,  ``2-0``

      

   
   :depends on boost: ``1.61*``
   :depends on eigen: 
   :depends on libgcc: 

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

    pixi global install metaprob

to add into an existing workspace instead, run::

    pixi add metaprob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaprob

Alternatively, to install into a new environment, run::

    conda create -n envname metaprob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaprob:<tag>

(see `metaprob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaprob| image:: https://img.shields.io/conda/dn/bioconda/metaprob.svg?style=flat
   :target: https://anaconda.org/bioconda/metaprob
   :alt:   (downloads)
.. |docker_metaprob| image:: https://quay.io/repository/biocontainers/metaprob/status
   :target: https://quay.io/repository/biocontainers/metaprob
.. _`metaprob/tags`: https://quay.io/repository/biocontainers/metaprob?tab=tags


.. raw:: html

    <script>
        var package = "metaprob";
        var versions = ["2","2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaprob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaprob/README.html