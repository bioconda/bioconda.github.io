:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dia_umpire'
.. highlight: bash

dia_umpire
==========

.. conda:recipe:: dia_umpire
   :replaces_section_title:
   :noindex:

   DIA\-Umpire is an open source Java program for computational analysis of data independent acquisition \(DIA\)
   mass spectrometry\-based proteomics data. It enables untargeted peptide and protein identification and quantitation
   using DIA data\, and also incorporates targeted extraction to reduce the number of cases of missing quantitation.


   :homepage: https://github.com/Nesvilab/DIA-Umpire
   :license: Apache License, Version 2.0
   :recipe: /`dia_umpire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dia_umpire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dia_umpire/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3255`

   


.. conda:package:: dia_umpire

   |downloads_dia_umpire| |docker_dia_umpire|

   :versions:
      
      

      ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``

      

   
   :depends openjdk: ``>=7``
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

      mamba install dia_umpire

   and update with::

      mamba update dia_umpire

  To create a new environment, run::

      mamba create --name myenvname dia_umpire

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dia_umpire:<tag>

   (see `dia_umpire/tags`_ for valid values for ``<tag>``)


.. |downloads_dia_umpire| image:: https://img.shields.io/conda/dn/bioconda/dia_umpire.svg?style=flat
   :target: https://anaconda.org/bioconda/dia_umpire
   :alt:   (downloads)
.. |docker_dia_umpire| image:: https://quay.io/repository/biocontainers/dia_umpire/status
   :target: https://quay.io/repository/biocontainers/dia_umpire
.. _`dia_umpire/tags`: https://quay.io/repository/biocontainers/dia_umpire?tab=tags


.. raw:: html

    <script>
        var package = "dia_umpire";
        var versions = ["2.1.6","2.1.6","2.1.3","2.1.3","2.1.2"];
    </script>





Notes
-----
DIA\-Umpire is a Java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dia_umpire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dia_umpire/README.html