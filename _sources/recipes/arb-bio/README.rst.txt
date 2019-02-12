.. title:: Package Recipe 'arb-bio'
.. highlight: bash


arb-bio
=======

.. conda:recipe:: arb-bio
   :replaces_section_title:

   ARB 6 Sequence Analysis Suite

   :homepage: http://www.arb-home.de
   :license: ARB
   :recipe: /`arb-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arb-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arb-bio/meta.yaml>`_

   


.. conda:package:: arb-bio

   |downloads_arb-bio| |docker_arb-bio|

   :versions: 6.0.6

   :depends: :conda:package:`fasttree`  :conda:package:`fig2dev`  :conda:package:`gettext` !=0.19.8 :conda:package:`glib` 2.51.* :conda:package:`gnuplot`  :conda:package:`libgcc`  :conda:package:`mafft`  :conda:package:`mrbayes`  :conda:package:`muscle`  :conda:package:`openmotif`  :conda:package:`perl` !=5.22.0.1-0,!=5.22.2.1-0 :conda:package:`phylip`  :conda:package:`phyml` 3.2.0 :conda:package:`raxml`  :conda:package:`sed` >=4.4 :conda:package:`xfig`  :conda:package:`xorg-libxaw`  :conda:package:`xorg-libxi`  :conda:package:`xorg-libxmu`  :conda:package:`xorg-libxp`  :conda:package:`xorg-libxpm`  

   :required~by: |required_by_arb-bio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio

   and update with::

      conda update arb-bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arb-bio


.. |required_by_arb-bio| conda:required_by:: arb-bio
.. |downloads_arb-bio| image:: https://img.shields.io/conda/dn/bioconda/arb-bio.svg?style=flat
   :alt:   (downloads)
.. |docker_arb-bio| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio



.. conda:package:: arb-bio-devel

   |downloads_arb-bio-devel| |docker_arb-bio-devel|

   :versions: 6.0.6

   :depends: :conda:package:`arb-bio` 6.0.6 hdec243e_3 

   :required~by: |required_by_arb-bio-devel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio-devel

   and update with::

      conda update arb-bio-devel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arb-bio-devel


.. |required_by_arb-bio-devel| conda:required_by:: arb-bio-devel
.. |downloads_arb-bio-devel| image:: https://img.shields.io/conda/dn/bioconda/arb-bio-devel.svg?style=flat
   :alt:   (downloads)
.. |docker_arb-bio-devel| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio



.. conda:package:: arb-bio-tools

   |downloads_arb-bio-tools| |docker_arb-bio-tools|

   :versions: 6.0.6

   :depends: :conda:package:`libarbdb` 6.0.6 3 

   :required~by: |required_by_arb-bio-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arb-bio-tools

   and update with::

      conda update arb-bio-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arb-bio-tools


.. |required_by_arb-bio-tools| conda:required_by:: arb-bio-tools
.. |downloads_arb-bio-tools| image:: https://img.shields.io/conda/dn/bioconda/arb-bio-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_arb-bio-tools| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio



.. conda:package:: libarbdb

   |downloads_libarbdb| |docker_libarbdb|

   :versions: 6.0.6

   :depends: :conda:package:`gettext`  :conda:package:`glib`  

   :required~by: |required_by_libarbdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libarbdb

   and update with::

      conda update libarbdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libarbdb


.. |required_by_libarbdb| conda:required_by:: libarbdb
.. |downloads_libarbdb| image:: https://img.shields.io/conda/dn/bioconda/libarbdb.svg?style=flat
   :alt:   (downloads)
.. |docker_libarbdb| image:: https://quay.io/repository/biocontainers/arb-bio/status
   :target: https://quay.io/repository/biocontainers/arb-bio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arb-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arb-bio/README.html

