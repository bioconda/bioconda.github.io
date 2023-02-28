:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binspreader'
.. highlight: bash

binspreader
===========

.. conda:recipe:: binspreader
   :replaces_section_title:
   :noindex:

   BinSPreader is a tool for improving existing binning using assembly
   graph and other sources of connectivity information


   :homepage: https://cab.spbu.ru/software/binspreader/
   :license: GPL2 / GPL-2.0-only
   :recipe: /`binspreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader/meta.yaml>`_
   :links: biotools: :biotools:`binspreader`, doi: :doi:`10.1016/j.isci.2022.104770`

   BinSPreader is a novel tool that attempts to refine metagenome\-assembled
   genomes \(MAGs\) obtained from existing tools. BinSPreader exploits the
   assembly graph topology and other connectivity information\, such as
   paired\-end and Hi\-C reads\, to refine the existing binning\, correct binning
   errors\, propagate binning from longer contigs to shorter contigs and infer
   contigs belonging to multiple bins.



.. conda:package:: binspreader

   |downloads_binspreader| |docker_binspreader|

   :versions:
      
      

      ``3.16.0.dev-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmp: 
   :depends sysroot_linux-64: ``>=2.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install binspreader

   and update with::

      conda update binspreader

   or use the docker container::

      docker pull quay.io/biocontainers/binspreader:<tag>

   (see `binspreader/tags`_ for valid values for ``<tag>``)


.. |downloads_binspreader| image:: https://img.shields.io/conda/dn/bioconda/binspreader.svg?style=flat
   :target: https://anaconda.org/bioconda/binspreader
   :alt:   (downloads)
.. |docker_binspreader| image:: https://quay.io/repository/biocontainers/binspreader/status
   :target: https://quay.io/repository/biocontainers/binspreader
.. _`binspreader/tags`: https://quay.io/repository/biocontainers/binspreader?tab=tags


.. raw:: html

    <script>
        var package = "binspreader";
        var versions = ["3.16.0.dev"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binspreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binspreader/README.html