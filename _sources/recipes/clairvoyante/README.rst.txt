:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clairvoyante'
.. highlight: bash

clairvoyante
============

.. conda:recipe:: clairvoyante
   :replaces_section_title:
   :noindex:

   Identifying the variants of DNA sequences sensitively and accurately is an important but challenging task in the field of genomics. This task is particularly difficult when dealing with Single Molecule Sequencing\, the error rate of which is still tens to hundreds of times higher than Next Generation Sequencing. With the increasing prevalence of Single Molecule Sequencing\, an efficient variant caller will not only expedite basic research but also enable various downstream applications. To meet this demand\, we developed Clairvoyante\, a multi\-task five\-layer convolutional neural network model for predicting variant type\, zygosity\, alternative allele and Indel length. On NA12878\, Clairvoyante achieved 99.73\%\, 97.68\% and 95.36\% accuracy on known variants\, and achieved 98.65\%\, 92.57\%\, 77.89\% F1 score on the whole genome\, in Illumina\, PacBio\, and Oxford Nanopore data\, respectively. Training Clairvoyante with a sample and call variant on another shows that Clairvoyante is sample agnostic and general for variant calling. A slim version of Clairvoyante with reduced model parameters produced a much lower F1\, suggesting the full model\'s power in disentangling subtle details in read alignment. Clairvoyante is the first method for Single Molecule Sequencing to finish a whole genome variant calling in two hours on a 28 CPU\-core machine\, with top\-tier accuracy and sensitivity. A toolset was developed to train\, utilize and visualize the Clairvoyante model easily\, and is publically available here is this repo.

   :homepage: https://github.com/aquaskyline/Clairvoyante
   :license: AGPLv3
   :recipe: /`clairvoyante <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clairvoyante>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clairvoyante/meta.yaml>`_

   


.. conda:package:: clairvoyante

   |downloads_clairvoyante| |docker_clairvoyante|

   :versions:
      
      

      ``1.02-2``,  ``1.02-1``,  ``1.02-0``,  ``1.01-1``,  ``1.01-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on intervaltree: ``2.1.0``
   :depends on numpy: ``1.16.2``
   :depends on pypy2.7: ``5.10.0``
   :depends on python: ``2.7.*``
   :depends on python-blosc: ``1.8.1``
   :depends on tensorflow: ``1.9.0.*``
   :depends on zlib: ``1.2.11.*``

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

    pixi global install clairvoyante

to add into an existing workspace instead, run::

    pixi add clairvoyante

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clairvoyante

Alternatively, to install into a new environment, run::

    conda create -n envname clairvoyante

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clairvoyante:<tag>

(see `clairvoyante/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clairvoyante| image:: https://img.shields.io/conda/dn/bioconda/clairvoyante.svg?style=flat
   :target: https://anaconda.org/bioconda/clairvoyante
   :alt:   (downloads)
.. |docker_clairvoyante| image:: https://quay.io/repository/biocontainers/clairvoyante/status
   :target: https://quay.io/repository/biocontainers/clairvoyante
.. _`clairvoyante/tags`: https://quay.io/repository/biocontainers/clairvoyante?tab=tags


.. raw:: html

    <script>
        var package = "clairvoyante";
        var versions = ["1.02","1.02","1.02","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clairvoyante/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clairvoyante/README.html