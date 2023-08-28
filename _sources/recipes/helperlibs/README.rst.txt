:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'helperlibs'
.. highlight: bash

helperlibs
==========

.. conda:recipe:: helperlibs
   :replaces_section_title:
   :noindex:

   A collection of bioinformatics\-related helper functions

   :homepage: https://github.com/kblin/bioinf-helperlibs
   :license: GPL / GPL-3.0
   :recipe: /`helperlibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helperlibs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/helperlibs/meta.yaml>`_

   


.. conda:package:: helperlibs

   |downloads_helperlibs| |docker_helperlibs|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``

      

   
   :depends biopython: ``>=1.76``
   :depends python: ``>=3.6``
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

      mamba install helperlibs

   and update with::

      mamba update helperlibs

  To create a new environment, run::

      mamba create --name myenvname helperlibs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/helperlibs:<tag>

   (see `helperlibs/tags`_ for valid values for ``<tag>``)


.. |downloads_helperlibs| image:: https://img.shields.io/conda/dn/bioconda/helperlibs.svg?style=flat
   :target: https://anaconda.org/bioconda/helperlibs
   :alt:   (downloads)
.. |docker_helperlibs| image:: https://quay.io/repository/biocontainers/helperlibs/status
   :target: https://quay.io/repository/biocontainers/helperlibs
.. _`helperlibs/tags`: https://quay.io/repository/biocontainers/helperlibs?tab=tags


.. raw:: html

    <script>
        var package = "helperlibs";
        var versions = ["0.2.1","0.1.9","0.1.8","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/helperlibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/helperlibs/README.html