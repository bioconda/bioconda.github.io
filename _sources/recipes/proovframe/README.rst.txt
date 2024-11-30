:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proovframe'
.. highlight: bash

proovframe
==========

.. conda:recipe:: proovframe
   :replaces_section_title:
   :noindex:

   frame\-shift correction for long read \(meta\)genomics

   :homepage: https://github.com/thackl/proovframe
   :license: MIT / MIT
   :recipe: /`proovframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe/meta.yaml>`_

   Gene prediction on long reads\, aka PacBio and Nanopore\, is often impaired by indels causing frameshift. 
   Proovframe detects and corrects frameshifts in coding sequences from raw long reads or long\-read derived assemblies.



.. conda:package:: proovframe

   |downloads_proovframe| |docker_proovframe|

   :versions:
      
      

      ``0.9.7-1``,  ``0.9.7-0``

      

   
   :depends diamond: ``>=2.0.3``
   :depends minimap2: 
   :depends perl: 
   :depends perl-data-dumper: 
   :depends perl-file-path: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-text-wrap: 
   :depends seqkit: 
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

      mamba install proovframe

   and update with::

      mamba update proovframe

  To create a new environment, run::

      mamba create --name myenvname proovframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proovframe:<tag>

   (see `proovframe/tags`_ for valid values for ``<tag>``)


.. |downloads_proovframe| image:: https://img.shields.io/conda/dn/bioconda/proovframe.svg?style=flat
   :target: https://anaconda.org/bioconda/proovframe
   :alt:   (downloads)
.. |docker_proovframe| image:: https://quay.io/repository/biocontainers/proovframe/status
   :target: https://quay.io/repository/biocontainers/proovframe
.. _`proovframe/tags`: https://quay.io/repository/biocontainers/proovframe?tab=tags


.. raw:: html

    <script>
        var package = "proovframe";
        var versions = ["0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proovframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proovframe/README.html