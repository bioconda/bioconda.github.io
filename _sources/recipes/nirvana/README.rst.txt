:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nirvana'
.. highlight: bash

nirvana
=======

.. conda:recipe:: nirvana
   :replaces_section_title:
   :noindex:

   Clinical\-grade annotation of genomic variants \(SNVs\, MNVs\, insertions\, deletions\, indels\, and SVs\)

   :homepage: https://github.com/Illumina/Nirvana
   :documentation: https://illumina.github.io/NirvanaDocumentation/
   
   :license: GPL / GPL-3.0-only
   :recipe: /`nirvana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nirvana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nirvana/meta.yaml>`_

   Nirvana provides clinical\-grade annotation of genomic variants. It processes VCF files
   and outputs structured JSON representations of variant annotations. While this open\-source
   version is no longer actively maintained\, users are directed to Illumina Connected Annotations
   for the current maintained version.



.. conda:package:: nirvana

   |downloads_nirvana| |docker_nirvana|

   :versions:
      
      

      ``3.18.1-1``,  ``3.18.1-0``

      

   
   :depends dotnet-runtime: ``>=6.0,<7.0a0``
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

      mamba install nirvana

   and update with::

      mamba update nirvana

  To create a new environment, run::

      mamba create --name myenvname nirvana

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nirvana:<tag>

   (see `nirvana/tags`_ for valid values for ``<tag>``)


.. |downloads_nirvana| image:: https://img.shields.io/conda/dn/bioconda/nirvana.svg?style=flat
   :target: https://anaconda.org/bioconda/nirvana
   :alt:   (downloads)
.. |docker_nirvana| image:: https://quay.io/repository/biocontainers/nirvana/status
   :target: https://quay.io/repository/biocontainers/nirvana
.. _`nirvana/tags`: https://quay.io/repository/biocontainers/nirvana?tab=tags


.. raw:: html

    <script>
        var package = "nirvana";
        var versions = ["3.18.1","3.18.1"];
    </script>





Notes
-----
This tool is no longer actively maintained. Users should consider Illumina Connected Annotations
for the current maintained version.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nirvana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nirvana/README.html