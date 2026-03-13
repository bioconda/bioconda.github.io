:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gaas'
.. highlight: bash

gaas
====

.. conda:recipe:: gaas
   :replaces_section_title:
   :noindex:

   Suite of tools related to Genome Assembly Annotation Service tasks at NBIS.

   :homepage: https://github.com/NBISweden/GAAS
   :license: GPL / GPLv3
   :recipe: /`gaas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaas/meta.yaml>`_

   


.. conda:package:: gaas

   |downloads_gaas| |docker_gaas|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends on libdb: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl: ``>=5.8``
   :depends on perl-bio-eutilities: 
   :depends on perl-bioperl: ``>=1.7``
   :depends on perl-clone: 
   :depends on perl-extutils-makemaker: 
   :depends on perl-file-share: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-graph: 
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-simple: 
   :depends on perl-moose: 
   :depends on perl-sort-naturally: 
   :depends on perl-statistics-r: 
   :depends on r-base: ``>=4.2,<4.3.0a0``

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

    pixi global install gaas

to add into an existing workspace instead, run::

    pixi add gaas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gaas

Alternatively, to install into a new environment, run::

    conda create -n envname gaas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gaas:<tag>

(see `gaas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gaas| image:: https://img.shields.io/conda/dn/bioconda/gaas.svg?style=flat
   :target: https://anaconda.org/bioconda/gaas
   :alt:   (downloads)
.. |docker_gaas| image:: https://quay.io/repository/biocontainers/gaas/status
   :target: https://quay.io/repository/biocontainers/gaas
.. _`gaas/tags`: https://quay.io/repository/biocontainers/gaas?tab=tags


.. raw:: html

    <script>
        var package = "gaas";
        var versions = ["1.2.0","1.2.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gaas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gaas/README.html