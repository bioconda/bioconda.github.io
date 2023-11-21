:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varvamp'
.. highlight: bash

varvamp
=======

.. conda:recipe:: varvamp
   :replaces_section_title:
   :noindex:

   Variable VirusAMPlicons \(varVAMP\) is a tool to design primers for highly diverse viruses

   :homepage: https://github.com/jonas-fuchs/varVAMP
   :license: GPL-3.0-or-later
   :recipe: /`varvamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varvamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varvamp/meta.yaml>`_

   


.. conda:package:: varvamp

   |downloads_varvamp| |docker_varvamp|

   :versions:
      
      

      ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8.3-0``,  ``0.4-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.13.0``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.23.3``
   :depends pandas: ``>=1.4.4``
   :depends primer3-py: ``>=1.1.0``
   :depends python: ``>=3.9``
   :depends seqfold: ``>=0.7.15``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install varvamp

   and update with::

      mamba update varvamp

  To create a new environment, run::

      mamba create --name myenvname varvamp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varvamp:<tag>

   (see `varvamp/tags`_ for valid values for ``<tag>``)


.. |downloads_varvamp| image:: https://img.shields.io/conda/dn/bioconda/varvamp.svg?style=flat
   :target: https://anaconda.org/bioconda/varvamp
   :alt:   (downloads)
.. |docker_varvamp| image:: https://quay.io/repository/biocontainers/varvamp/status
   :target: https://quay.io/repository/biocontainers/varvamp
.. _`varvamp/tags`: https://quay.io/repository/biocontainers/varvamp?tab=tags


.. raw:: html

    <script>
        var package = "varvamp";
        var versions = ["0.9.5","0.9.4","0.9.3","0.9.2","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varvamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varvamp/README.html