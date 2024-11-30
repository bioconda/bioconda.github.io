:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoary'
.. highlight: bash

scoary
======

.. conda:recipe:: scoary
   :replaces_section_title:
   :noindex:

   Microbial pan\-GWAS using the output from Roary

   :homepage: https://github.com/AdmiralenOla/Scoary
   :license: GPL / GPL-3.0
   :recipe: /`scoary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoary/meta.yaml>`_
   :links: biotools: :biotools:`Scoary`, doi: :doi:`10.1186/s13059-016-1108-8`

   


.. conda:package:: scoary

   |downloads_scoary| |docker_scoary|

   :versions:
      
      

      ``1.6.16-2``,  ``1.6.16-1``,  ``1.6.16-0``,  ``1.6.9-0``

      

   
   :depends argparse: 
   :depends ete3: 
   :depends python: 
   :depends scipy: ``>=0.16``
   :depends six: 
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

      mamba install scoary

   and update with::

      mamba update scoary

  To create a new environment, run::

      mamba create --name myenvname scoary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scoary:<tag>

   (see `scoary/tags`_ for valid values for ``<tag>``)


.. |downloads_scoary| image:: https://img.shields.io/conda/dn/bioconda/scoary.svg?style=flat
   :target: https://anaconda.org/bioconda/scoary
   :alt:   (downloads)
.. |docker_scoary| image:: https://quay.io/repository/biocontainers/scoary/status
   :target: https://quay.io/repository/biocontainers/scoary
.. _`scoary/tags`: https://quay.io/repository/biocontainers/scoary?tab=tags


.. raw:: html

    <script>
        var package = "scoary";
        var versions = ["1.6.16","1.6.16","1.6.16","1.6.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoary/README.html