:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncocnv'
.. highlight: bash

oncocnv
=======

.. conda:recipe:: oncocnv
   :replaces_section_title:
   :noindex:

   a package to detect copy number changes in Deep Sequencing data

   :homepage: https://github.com/BoevaLab/ONCOCNV/blob/master/README.md
   :license: GNU GPLv3
   :recipe: /`oncocnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncocnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncocnv/meta.yaml>`_

   


.. conda:package:: oncocnv

   |downloads_oncocnv| |docker_oncocnv|

   :versions:
      
      

      ``7.0-2``,  ``7.0-1``,  ``7.0-0``

      

   
   :depends on bedtools: ``>=2.27.1``
   :depends on bioconductor-dnacopy: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-digest: 
   :depends on r-fastica: 
   :depends on r-mass: 
   :depends on r-mclust: 
   :depends on r-pscbs: 
   :depends on r-remotes: 
   :depends on r-scales: 
   :depends on samtools: ``>=1.16.1``

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

    pixi global install oncocnv

to add into an existing workspace instead, run::

    pixi add oncocnv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oncocnv

Alternatively, to install into a new environment, run::

    conda create -n envname oncocnv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oncocnv:<tag>

(see `oncocnv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oncocnv| image:: https://img.shields.io/conda/dn/bioconda/oncocnv.svg?style=flat
   :target: https://anaconda.org/bioconda/oncocnv
   :alt:   (downloads)
.. |docker_oncocnv| image:: https://quay.io/repository/biocontainers/oncocnv/status
   :target: https://quay.io/repository/biocontainers/oncocnv
.. _`oncocnv/tags`: https://quay.io/repository/biocontainers/oncocnv?tab=tags


.. raw:: html

    <script>
        var package = "oncocnv";
        var versions = ["7.0","7.0","7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncocnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncocnv/README.html