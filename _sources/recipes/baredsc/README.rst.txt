:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baredsc'
.. highlight: bash

baredsc
=======

.. conda:recipe:: baredsc
   :replaces_section_title:
   :noindex:

   baredSC \(Bayesian Approach to Retreive Expression Distribution of Single Cell\) is a tool that uses a Monte\-Carlo Markov Chain to estimate a confidence interval on the probability density function \(PDF\) of expression of one or two genes from single\-cell RNA\-seq data.

   :homepage: https://github.com/lldelisle/baredSC/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`baredsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc/meta.yaml>`_

   


.. conda:package:: baredsc

   |downloads_baredsc| |docker_baredsc|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on anndata: ``>=0.7``
   :depends on corner: ``>=2.0.0``
   :depends on matplotlib-base: ``>=3.1.1``
   :depends on numpy: ``>=1.16``
   :depends on pandas: ``>=0.25.0``
   :depends on python: ``>=3.7``
   :depends on samsam: ``>=0.1.2``
   :depends on scipy: ``>=1.3.0``

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

    pixi global install baredsc

to add into an existing workspace instead, run::

    pixi add baredsc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install baredsc

Alternatively, to install into a new environment, run::

    conda create -n envname baredsc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/baredsc:<tag>

(see `baredsc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_baredsc| image:: https://img.shields.io/conda/dn/bioconda/baredsc.svg?style=flat
   :target: https://anaconda.org/bioconda/baredsc
   :alt:   (downloads)
.. |docker_baredsc| image:: https://quay.io/repository/biocontainers/baredsc/status
   :target: https://quay.io/repository/biocontainers/baredsc
.. _`baredsc/tags`: https://quay.io/repository/biocontainers/baredsc?tab=tags


.. raw:: html

    <script>
        var package = "baredsc";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baredsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baredsc/README.html