:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteowizard'
.. highlight: bash

proteowizard
============

.. conda:recipe:: proteowizard
   :replaces_section_title:
   :noindex:

   Tools for dealing with mass spectrometry files \(e.g.\, mzML\, mzXML\, mzIdentML\, MGF\)

   :homepage: https://proteowizard.sourceforge.net
   :license: Apache 2.0
   :recipe: /`proteowizard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard/meta.yaml>`_
   :links: biotools: :biotools:`proteowizard`, doi: :doi:`10.1038/nbt.2377`

   


.. conda:package:: proteowizard

   |downloads_proteowizard| |docker_proteowizard|

   :versions:
      
      

      ``3_0_9992-2``,  ``3_0_9992-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install proteowizard

   and update with::

      mamba update proteowizard

  To create a new environment, run::

      mamba create --name myenvname proteowizard

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proteowizard:<tag>

   (see `proteowizard/tags`_ for valid values for ``<tag>``)


.. |downloads_proteowizard| image:: https://img.shields.io/conda/dn/bioconda/proteowizard.svg?style=flat
   :target: https://anaconda.org/bioconda/proteowizard
   :alt:   (downloads)
.. |docker_proteowizard| image:: https://quay.io/repository/biocontainers/proteowizard/status
   :target: https://quay.io/repository/biocontainers/proteowizard
.. _`proteowizard/tags`: https://quay.io/repository/biocontainers/proteowizard?tab=tags


.. raw:: html

    <script>
        var package = "proteowizard";
        var versions = ["3_0_9992","3_0_9992"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteowizard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteowizard/README.html