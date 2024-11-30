:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snver'
.. highlight: bash

snver
=====

.. conda:recipe:: snver
   :replaces_section_title:
   :noindex:

   SNVer is a statistical tool for calling common and rare variants in analysis of pool or individual next\-generation sequencing data.
   It reports one single overall p\-value for evaluating the significance of a candidate locus being a variant\, based on which multiplicity control can be obtained.
   Loci with any \(low\) coverage can be tested and depth of coverage will be quantitatively factored into final significance calculation.
   SNVer runs very fast\, making it feasible for analysis of whole\-exome sequencing data\, or even whole\-genome sequencing data. 


   :homepage: http://snver.sourceforge.net/
   :license: GNU General Public License version 3.0 (GPLv3)
   :recipe: /`snver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver/meta.yaml>`_

   


.. conda:package:: snver

   |downloads_snver| |docker_snver|

   :versions:
      
      

      ``0.5.3-1``,  ``0.5.3-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: 
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

      mamba install snver

   and update with::

      mamba update snver

  To create a new environment, run::

      mamba create --name myenvname snver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snver:<tag>

   (see `snver/tags`_ for valid values for ``<tag>``)


.. |downloads_snver| image:: https://img.shields.io/conda/dn/bioconda/snver.svg?style=flat
   :target: https://anaconda.org/bioconda/snver
   :alt:   (downloads)
.. |docker_snver| image:: https://quay.io/repository/biocontainers/snver/status
   :target: https://quay.io/repository/biocontainers/snver
.. _`snver/tags`: https://quay.io/repository/biocontainers/snver?tab=tags


.. raw:: html

    <script>
        var package = "snver";
        var versions = ["0.5.3","0.5.3"];
    </script>





Notes
-----
SNVer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"snver \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snver/README.html