:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemoma'
.. highlight: bash

gemoma
======

.. conda:recipe:: gemoma
   :replaces_section_title:
   :noindex:

   Gene Model Mapper \(GeMoMa\) is a homology\-based gene prediction program.
   GeMoMa uses the annotation of protein\-coding genes in a reference genome to infer the annotation of protein\-coding genes in a target genome.
   Thereby\, GeMoMa utilizes amino acid sequence and intron position conservation.
   In addition\, GeMoMa allows to incorporate RNA\-seq evidence for splice site prediction.


   :homepage: http://www.jstacs.de/index.php/GeMoMa
   :license: GPL3
   :recipe: /`gemoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemoma/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw092`, doi: :doi:`10.1186/s12859-018-2203-5`

   


.. conda:package:: gemoma

   |downloads_gemoma| |docker_gemoma|

   :versions:
      
      

      ``1.9-0``,  ``1.7.1-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends blast: ``>=2.12.0``
   :depends mmseqs2: ``>=14.7e284``
   :depends openjdk: ``>=8,<12``
   :depends python: ``>=3.7``
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

      mamba install gemoma

   and update with::

      mamba update gemoma

  To create a new environment, run::

      mamba create --name myenvname gemoma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gemoma:<tag>

   (see `gemoma/tags`_ for valid values for ``<tag>``)


.. |downloads_gemoma| image:: https://img.shields.io/conda/dn/bioconda/gemoma.svg?style=flat
   :target: https://anaconda.org/bioconda/gemoma
   :alt:   (downloads)
.. |docker_gemoma| image:: https://quay.io/repository/biocontainers/gemoma/status
   :target: https://quay.io/repository/biocontainers/gemoma
.. _`gemoma/tags`: https://quay.io/repository/biocontainers/gemoma?tab=tags


.. raw:: html

    <script>
        var package = "gemoma";
        var versions = ["1.9","1.7.1","1.6.4","1.6.4"];
    </script>





Notes
-----
GeMoMa is Java program that comes with a custom wrapper python script. By default
\"\-Xms3g \-Xmx6g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemoma/README.html