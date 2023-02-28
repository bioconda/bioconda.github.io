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

      

   
   :depends arb-bio-tools: ``6.0.6 haa8b8d8_8``
   :depends fasttree: 
   :depends fig2dev: 
   :depends gettext: ``>=0.19.8.1,<1.0a0``
   :depends glib: ``>=2.58.2,<3.0a0``
   :depends gnuplot: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libpng: ``>=1.6.35,<1.7.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends libtiff: ``>=4.0.9,<5.0a0``
   :depends libxslt: ``>=1.1.32,<2.0a0``
   :depends mafft: 
   :depends mrbayes: 
   :depends muscle: 
   :depends openmotif: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends phylip: 
   :depends phyml: ``3.2.0.*``
   :depends raxml: 
   :depends sed: ``>=4.4``
   :depends xerces-c: ``>=3.2.2,<3.2.3.0a0``
   :depends xfig: 
   :depends xorg-libxaw: 
   :depends xorg-libxft: 
   :depends xorg-libxi: 
   :depends xorg-libxmu: 
   :depends xorg-libxp: 
   :depends xorg-libxpm: 
   :depends xorg-libxt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio

   and update with::

      conda update arb-bio

   or use the docker container::

      docker pull quay.io/biocontainers/arb-bio:<tag>

   (see `arb-bio/tags`_ for valid values for ``<tag>``)


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

      

   
   :depends arb-bio: ``6.0.6 pl526h7ded70a_8``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends openmotif-dev: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio-devel

   and update with::

      conda update arb-bio-devel

   or use the docker container::

      docker pull quay.io/biocontainers/arb-bio-devel:<tag>

   (see `arb-bio-devel/tags`_ for valid values for ``<tag>``)


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

      

   
   :depends glib: ``>=2.58.2,<3.0a0``
   :depends libarbdb: ``6.0.6 haa8b8d8_8``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio-tools

   and update with::

      conda update arb-bio-tools

   or use the docker container::

      docker pull quay.io/biocontainers/arb-bio-tools:<tag>

   (see `arb-bio-tools/tags`_ for valid values for ``<tag>``)


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

      

   
   :depends gettext: 
   :depends glib: ``>=2.58.2,<3.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libarbdb

   and update with::

      conda update libarbdb

   or use the docker container::

      docker pull quay.io/biocontainers/libarbdb:<tag>

   (see `libarbdb/tags`_ for valid values for ``<tag>``)


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