:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motifraptor'
.. highlight: bash

motifraptor
===========

.. conda:recipe:: motifraptor
   :replaces_section_title:
   :noindex:

   Motif\-centric analysis on GWAS data

   :homepage: https://github.com/pinellolab/MotifRaptor
   :license: Partners
   :recipe: /`motifraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifraptor/meta.yaml>`_

   


.. conda:package:: motifraptor

   |downloads_motifraptor| |docker_motifraptor|

   :versions:
      
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17.5,<2.0a0``
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: 
   :depends seaborn: ``0.9.0.*``
   :depends twobitreader: 
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

      mamba install motifraptor

   and update with::

      mamba update motifraptor

  To create a new environment, run::

      mamba create --name myenvname motifraptor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/motifraptor:<tag>

   (see `motifraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_motifraptor| image:: https://img.shields.io/conda/dn/bioconda/motifraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/motifraptor
   :alt:   (downloads)
.. |docker_motifraptor| image:: https://quay.io/repository/biocontainers/motifraptor/status
   :target: https://quay.io/repository/biocontainers/motifraptor
.. _`motifraptor/tags`: https://quay.io/repository/biocontainers/motifraptor?tab=tags


.. raw:: html

    <script>
        var package = "motifraptor";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motifraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motifraptor/README.html