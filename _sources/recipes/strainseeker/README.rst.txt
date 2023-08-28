:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainseeker'
.. highlight: bash

strainseeker
============

.. conda:recipe:: strainseeker
   :replaces_section_title:
   :noindex:

   A bacterial identification program for fast identification of bacterial strains from raw sequencing reads

   :homepage: http://bioinfo.ut.ee/strainseeker
   :developer docs: https://github.com/bioinfo-ut/StrainSeeker.git
   :license: BSD
   :recipe: /`strainseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainseeker/meta.yaml>`_

   


.. conda:package:: strainseeker

   |downloads_strainseeker| |docker_strainseeker|

   :versions:
      
      

      ``1.5.1-4``,  ``1.5.1-3``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install strainseeker

   and update with::

      mamba update strainseeker

  To create a new environment, run::

      mamba create --name myenvname strainseeker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strainseeker:<tag>

   (see `strainseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_strainseeker| image:: https://img.shields.io/conda/dn/bioconda/strainseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/strainseeker
   :alt:   (downloads)
.. |docker_strainseeker| image:: https://quay.io/repository/biocontainers/strainseeker/status
   :target: https://quay.io/repository/biocontainers/strainseeker
.. _`strainseeker/tags`: https://quay.io/repository/biocontainers/strainseeker?tab=tags


.. raw:: html

    <script>
        var package = "strainseeker";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainseeker/README.html