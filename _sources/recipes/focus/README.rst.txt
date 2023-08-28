:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'focus'
.. highlight: bash

focus
=====

.. conda:recipe:: focus
   :replaces_section_title:
   :noindex:

   FOCUS is an innovative and agile model to profile and report organisms present in metagenomic samples based on composition usage without sequence length dependencies.

   :homepage: https://edwards.sdsu.edu/FOCUS
   :developer docs: https://github.com/metageni/FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focus/meta.yaml>`_

   


.. conda:package:: focus

   |downloads_focus| |docker_focus|

   :versions:
      
      

      ``1.8-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``

      

   
   :depends kmer-jellyfish: ``>=2.2.6``
   :depends numpy: ``>=1.12.1``
   :depends python: ``>=3``
   :depends scipy: ``>=0.19.0``
   :depends setuptools: ``>=38.6.0``
   :depends setuptools_scm: 
   :depends unzip: 
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

      mamba install focus

   and update with::

      mamba update focus

  To create a new environment, run::

      mamba create --name myenvname focus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/focus:<tag>

   (see `focus/tags`_ for valid values for ``<tag>``)


.. |downloads_focus| image:: https://img.shields.io/conda/dn/bioconda/focus.svg?style=flat
   :target: https://anaconda.org/bioconda/focus
   :alt:   (downloads)
.. |docker_focus| image:: https://quay.io/repository/biocontainers/focus/status
   :target: https://quay.io/repository/biocontainers/focus
.. _`focus/tags`: https://quay.io/repository/biocontainers/focus?tab=tags


.. raw:: html

    <script>
        var package = "focus";
        var versions = ["1.8","1.6","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/focus/README.html