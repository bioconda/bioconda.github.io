:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hgtools'
.. highlight: bash

hgtools
=======

.. conda:recipe:: hgtools
   :replaces_section_title:
   :noindex:

   Classes and setuptools plugin for Mercurial and Git repositories

   :homepage: https://github.com/jaraco/hgtools
   :license: GNU General Public License (GPL)
   :recipe: /`hgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools/meta.yaml>`_

   


.. conda:package:: hgtools

   |downloads_hgtools| |docker_hgtools|

   :versions:
      
      

      ``8.2.1-0``,  ``8.2.0-0``,  ``8.1.1-2``,  ``8.1.1-1``,  ``8.1.1-0``,  ``6.5.1-2``,  ``6.5.1-0``

      

   
   :depends backports.unittest_mock: 
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

      mamba install hgtools

   and update with::

      mamba update hgtools

  To create a new environment, run::

      mamba create --name myenvname hgtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hgtools:<tag>

   (see `hgtools/tags`_ for valid values for ``<tag>``)


.. |downloads_hgtools| image:: https://img.shields.io/conda/dn/bioconda/hgtools.svg?style=flat
   :target: https://anaconda.org/bioconda/hgtools
   :alt:   (downloads)
.. |docker_hgtools| image:: https://quay.io/repository/biocontainers/hgtools/status
   :target: https://quay.io/repository/biocontainers/hgtools
.. _`hgtools/tags`: https://quay.io/repository/biocontainers/hgtools?tab=tags


.. raw:: html

    <script>
        var package = "hgtools";
        var versions = ["8.2.1","8.2.0","8.1.1","8.1.1","8.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgtools/README.html