:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arb-bio'
.. highlight: bash

arb-bio
=======

.. conda:recipe:: arb-bio
   :replaces_section_title:
   :noindex:

   ARB 6 Sequence Analysis Suite

   :homepage: http://www.arb-home.de
   :documentation: http://www.arb-home.de/documentation.html
   
   :developer docs: http://bugs.arb-home.de/
   :license: ARB
   :recipe: /`arb-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arb-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arb-bio/meta.yaml>`_
   :links: biotools: :biotools:`arb`, doi: :doi:`10.1002/9781118010518.ch46`

   \"ARB \(ARBor\, Latin\: tree\)\: A software environment for maintaining
   databases of molecular sequences and additional information\, and
   for analyzing the sequence data\, with emphasis on phylogeny
   reconstruction.

   The programs have primarily been developed for ribosomal
   ribonucleic acid \(rRNA\) sequences and\, therefore\, contain special
   tools for alignment and analysis of these structures. However\,
   other molecular sequence data can also be handled. Protein gene
   sequences and predicted protein primary structures as well as
   protein secondary structures can be stored in the same database.

   The ARB package is designed for graphical user interface. Program
   control and data display are available in a hierarchical set of
   windows and subwindows. The majority of operations can be
   controlled using the mouse for moving the pointer and the left
   mouse button for initiating and performing operations\"



.. conda:package:: arb-bio

   |downloads_arb-bio| |docker_arb-bio|

   :versions:
      
      

      ``6.0.6-8``,  ``6.0.6-7``,  ``6.0.6-6``,  ``6.0.6-5``,  ``6.0.6-4``,  ``6.0.6-3``,  ``6.0.6-1``,  ``6.0.6-0``

      

   
   :depends on arb-bio-tools: ``6.0.6 haa8b8d8_8``
   :depends on fasttree: 
   :depends on fig2dev: 
   :depends on gettext: ``>=0.19.8.1,<1.0a0``
   :depends on glib: ``>=2.58.2,<3.0a0``
   :depends on gnuplot: 
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libpng: ``>=1.6.35,<1.7.0a0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on libtiff: ``>=4.0.9,<5.0a0``
   :depends on libxslt: ``>=1.1.32,<2.0a0``
   :depends on mafft: 
   :depends on mrbayes: 
   :depends on muscle: 
   :depends on openmotif: 
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on phylip: 
   :depends on phyml: ``3.2.0.*``
   :depends on raxml: 
   :depends on sed: ``>=4.4``
   :depends on xerces-c: ``>=3.2.2,<3.2.3.0a0``
   :depends on xfig: 
   :depends on xorg-libxaw: 
   :depends on xorg-libxft: 
   :depends on xorg-libxi: 
   :depends on xorg-libxmu: 
   :depends on xorg-libxp: 
   :depends on xorg-libxpm: 
   :depends on xorg-libxt: 

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

    pixi global install arb-bio

to add into an existing workspace instead, run::

    pixi add arb-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arb-bio

Alternatively, to install into a new environment, run::

    conda create -n envname arb-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arb-bio:<tag>

(see `arb-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arb-bio| image:: https://img.shields.io/conda/dn/bioconda/arb-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/arb-bio
   :alt:   (downloads)
.. |docker_arb-bio| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio
.. _`arb-bio/tags`: https://quay.io/repository/biocontainers/arb-bio?tab=tags


.. raw:: html

    <script>
        var package = "arb-bio";
        var versions = ["6.0.6","6.0.6","6.0.6","6.0.6","6.0.6"];
    </script>


.. conda:package:: arb-bio-devel

   |downloads_arb-bio-devel| |docker_arb-bio-devel|

   :versions:
      
      

      ``6.0.6-8``,  ``6.0.6-7``,  ``6.0.6-6``,  ``6.0.6-5``,  ``6.0.6-4``,  ``6.0.6-3``

      

   
   :depends on arb-bio: ``6.0.6 pl526h7ded70a_8``
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on openmotif-dev: 

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

    pixi global install arb-bio-devel

to add into an existing workspace instead, run::

    pixi add arb-bio-devel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arb-bio-devel

Alternatively, to install into a new environment, run::

    conda create -n envname arb-bio-devel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arb-bio-devel:<tag>

(see `arb-bio-devel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arb-bio-devel| image:: https://img.shields.io/conda/dn/bioconda/arb-bio-devel.svg?style=flat
   :target: https://anaconda.org/bioconda/arb-bio-devel
   :alt:   (downloads)
.. |docker_arb-bio-devel| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio
.. _`arb-bio-devel/tags`: https://quay.io/repository/biocontainers/arb-bio-devel?tab=tags


.. raw:: html

    <script>
        var package = "arb-bio";
        var versions = ["6.0.6","6.0.6","6.0.6","6.0.6","6.0.6"];
    </script>


.. conda:package:: arb-bio-tools

   |downloads_arb-bio-tools| |docker_arb-bio-tools|

   :versions:
      
      

      ``6.0.6-8``,  ``6.0.6-7``,  ``6.0.6-6``,  ``6.0.6-5``,  ``6.0.6-4``,  ``6.0.6-3``

      

   
   :depends on glib: ``>=2.58.2,<3.0a0``
   :depends on libarbdb: ``6.0.6 haa8b8d8_8``
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``

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

    pixi global install arb-bio-tools

to add into an existing workspace instead, run::

    pixi add arb-bio-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arb-bio-tools

Alternatively, to install into a new environment, run::

    conda create -n envname arb-bio-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arb-bio-tools:<tag>

(see `arb-bio-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arb-bio-tools| image:: https://img.shields.io/conda/dn/bioconda/arb-bio-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/arb-bio-tools
   :alt:   (downloads)
.. |docker_arb-bio-tools| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio
.. _`arb-bio-tools/tags`: https://quay.io/repository/biocontainers/arb-bio-tools?tab=tags


.. raw:: html

    <script>
        var package = "arb-bio";
        var versions = ["6.0.6","6.0.6","6.0.6","6.0.6","6.0.6"];
    </script>


.. conda:package:: libarbdb

   |downloads_libarbdb| |docker_libarbdb|

   :versions:
      
      

      ``6.0.6-8``,  ``6.0.6-7``,  ``6.0.6-6``,  ``6.0.6-5``,  ``6.0.6-4``,  ``6.0.6-3``

      

   
   :depends on gettext: 
   :depends on glib: ``>=2.58.2,<3.0a0``
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``

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

    pixi global install libarbdb

to add into an existing workspace instead, run::

    pixi add libarbdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libarbdb

Alternatively, to install into a new environment, run::

    conda create -n envname libarbdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libarbdb:<tag>

(see `libarbdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libarbdb| image:: https://img.shields.io/conda/dn/bioconda/libarbdb.svg?style=flat
   :target: https://anaconda.org/bioconda/libarbdb
   :alt:   (downloads)
.. |docker_libarbdb| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio
.. _`libarbdb/tags`: https://quay.io/repository/biocontainers/libarbdb?tab=tags


.. raw:: html

    <script>
        var package = "arb-bio";
        var versions = ["6.0.6","6.0.6","6.0.6","6.0.6","6.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arb-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arb-bio/README.html