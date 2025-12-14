:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jalview'
.. highlight: bash

jalview
=======

.. conda:recipe:: jalview
   :replaces_section_title:
   :noindex:

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.

   :homepage: https://www.jalview.org/
   :license: GPL-3.0-only
   :recipe: /`jalview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview/meta.yaml>`_

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.
   Use it to view and edit sequence alignments\, analyse them with phylogenetic trees and principal
   components analysis \(PCA\) plots and explore molecular structures and annotation. It is also able
   to import and annotate DNA and Protein products from VCF files and retrieve data and annotation from
   3D\-Beacons\, Uniprot\, Ensembl\, ENA\, Rfam\, Pfam and the PDBe.



.. conda:package:: jalview

   |downloads_jalview| |docker_jalview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.5.1-0</code>,  <code>2.11.5.0-0</code>,  <code>2.11.4.1-0</code>,  <code>2.11.4.0-0</code>,  <code>2.11.3.3-0</code>,  <code>2.11.3.2-0</code>,  <code>2.11.3.1-0</code>,  <code>2.11.3.0-0</code>,  <code>2.11.2.7-0</code>,  </span></summary>
      

      ``2.11.5.1-0``,  ``2.11.5.0-0``,  ``2.11.4.1-0``,  ``2.11.4.0-0``,  ``2.11.3.3-0``,  ``2.11.3.2-0``,  ``2.11.3.1-0``,  ``2.11.3.0-0``,  ``2.11.2.7-0``,  ``2.11.2.6-0``,  ``2.11.2.4-0``,  ``2.11.2.3-0``,  ``2.11.2.1-0``,  ``2.11.1.5-0``,  ``2.11.1.4-2``,  ``2.11.1.4-1``,  ``2.11.1.4-0``,  ``2.11.1.3-0``,  ``2.11.1.2-0``,  ``2.11.1.0-1``,  ``2.11.1.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.5-3``,  ``2.10.4-0``,  ``2.10.4b1-2``,  ``2.10.4b1-0``,  ``2.10.3-1``,  ``2.10.3-0``,  ``2.10.3b1-0``,  ``2.10.2b2-2``,  ``2.10.2b2-1``,  ``2.10.2b2-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8.0.192,!=9.*,!=10.*,!=11.0.9.*,<12``
   :depends psutil: 
   :depends xorg-libxtst: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jalview

   and update with::

      mamba update jalview

  To create a new environment, run::

      mamba create --name myenvname jalview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jalview:<tag>

   (see `jalview/tags`_ for valid values for ``<tag>``)


.. |downloads_jalview| image:: https://img.shields.io/conda/dn/bioconda/jalview.svg?style=flat
   :target: https://anaconda.org/bioconda/jalview
   :alt:   (downloads)
.. |docker_jalview| image:: https://quay.io/repository/biocontainers/jalview/status
   :target: https://quay.io/repository/biocontainers/jalview
.. _`jalview/tags`: https://quay.io/repository/biocontainers/jalview?tab=tags


.. raw:: html

    <script>
        var package = "jalview";
        var versions = ["2.11.5.1","2.11.5.0","2.11.4.1","2.11.4.0","2.11.3.3"];
    </script>





Notes
-----
This wrapper and installation is primarily for commandline use.
Set JALVIEW\_JRE\=j1.8 or JALVIEW\_JRE\=j11 to specify the java runtime if you need jalview to start up as quickly as possible
Set JALVIEW\_MAXMEM\=2g to restrict jalviews maximal memory consumption \(here to 2G RAM\). Otherwise 90\% of physical memory
\(capped at 32G\) is allocated.  Memory allocation can also be set in Tools\-\>Preferences\-\>Startup or specified with command\-
line arguments \-\-jvmmempc\=90 \(percentage of total physical memory\, default 90\) and \-\-jvmmemmax\=2g \(set a different cap\,
default 32G if total physical memory can be detected or 8G if total physical memory cannot be detected\).


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jalview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jalview/README.html