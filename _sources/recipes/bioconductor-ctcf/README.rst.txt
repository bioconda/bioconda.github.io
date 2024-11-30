:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctcf'
.. highlight: bash

bioconductor-ctcf
=================

.. conda:recipe:: bioconductor-ctcf
   :replaces_section_title:
   :noindex:

   Genomic coordinates of CTCF binding sites\, with orientation

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/CTCF.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf/meta.yaml>`_

   Genomic coordinates of CTCF binding sites\, with strand orientation \(directionality of binding\). Position weight matrices \(PWMs\) from JASPAR\, HOCOMOCO\, CIS\-BP\, CTCFBSDB\, SwissRegulon\, Jolma 2013\, were used to uniformly predict CTCF binding sites using FIMO \(default settings\) on human \(hg18\, hg19\, hg38\, T2T\) and mouse \(mm9\, mm10\, mm39\) genome assemblies. Extra columns include motif\/PWM name \(e.g.\, MA0139.1\)\, score\, p\-value\, q\-value\, and the motif sequence. It is recommended to filter FIMO\-predicted sites by 1e\-6 p\-value threshold instead of using the default 1e\-4 threshold. Experimentally obtained CTCF\-bound cis\-regulatory elements from ENCODE SCREEN and predicted CTCF sites from CTCFBSDB are also included. Selected data are lifted over from a different genome assembly as we demonstrated liftOver is a viable option to obtain CTCF coordinates in different genome assemblies. CTCF sites obtained using JASPAR\'s MA0139.1 PWM and filtered at 1e\-6 p\-value threshold are recommended.


.. conda:package:: bioconductor-ctcf

   |downloads_bioconductor-ctcf| |docker_bioconductor-ctcf|

   :versions:
      
      

      ``0.99.11-1``,  ``0.99.11-0``,  ``0.99.9-0``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ctcf

   and update with::

      mamba update bioconductor-ctcf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctcf:<tag>

   (see `bioconductor-ctcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctcf
   :alt:   (downloads)
.. |docker_bioconductor-ctcf| image:: https://quay.io/repository/biocontainers/bioconductor-ctcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctcf
.. _`bioconductor-ctcf/tags`: https://quay.io/repository/biocontainers/bioconductor-ctcf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctcf";
        var versions = ["0.99.11","0.99.11","0.99.9","0.99.4","0.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctcf/README.html