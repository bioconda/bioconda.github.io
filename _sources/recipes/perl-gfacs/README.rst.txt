:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gfacs'
.. highlight: bash

perl-gfacs
==========

.. conda:recipe:: perl-gfacs
   :replaces_section_title:
   :noindex:

   gFACs is a filtering\, analysis\, and conversion tool to unify genome annotations across alignment and gene prediction frameworks.

   :homepage: https://gitlab.com/PlantGenomicsLab/gFACs
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`perl-gfacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.gpb.2019.04.002`

   


.. conda:package:: perl-gfacs

   |downloads_perl-gfacs| |docker_perl-gfacs|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends on perl-bioperl: ``>=1.7.2``

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

    pixi global install perl-gfacs

to add into an existing workspace instead, run::

    pixi add perl-gfacs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-gfacs

Alternatively, to install into a new environment, run::

    conda create -n envname perl-gfacs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-gfacs:<tag>

(see `perl-gfacs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-gfacs| image:: https://img.shields.io/conda/dn/bioconda/perl-gfacs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gfacs
   :alt:   (downloads)
.. |docker_perl-gfacs| image:: https://quay.io/repository/biocontainers/perl-gfacs/status
   :target: https://quay.io/repository/biocontainers/perl-gfacs
.. _`perl-gfacs/tags`: https://quay.io/repository/biocontainers/perl-gfacs?tab=tags


.. raw:: html

    <script>
        var package = "perl-gfacs";
        var versions = ["1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gfacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gfacs/README.html