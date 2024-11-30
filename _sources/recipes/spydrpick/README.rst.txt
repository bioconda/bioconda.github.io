:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spydrpick'
.. highlight: bash

spydrpick
=========

.. conda:recipe:: spydrpick
   :replaces_section_title:
   :noindex:

   Mutual information based detection of pairs of genomic loci co\-evolving under a shared selective pressure

   :homepage: https://github.com/santeripuranen/SpydrPick
   :license: GNU Affero General Public License
   :recipe: /`spydrpick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spydrpick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spydrpick/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz656`

   


.. conda:package:: spydrpick

   |downloads_spydrpick| |docker_spydrpick|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends pthread-stubs: 
   :depends tbb: ``>=2019.9,<2021.0.0a0``
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

      mamba install spydrpick

   and update with::

      mamba update spydrpick

  To create a new environment, run::

      mamba create --name myenvname spydrpick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spydrpick:<tag>

   (see `spydrpick/tags`_ for valid values for ``<tag>``)


.. |downloads_spydrpick| image:: https://img.shields.io/conda/dn/bioconda/spydrpick.svg?style=flat
   :target: https://anaconda.org/bioconda/spydrpick
   :alt:   (downloads)
.. |docker_spydrpick| image:: https://quay.io/repository/biocontainers/spydrpick/status
   :target: https://quay.io/repository/biocontainers/spydrpick
.. _`spydrpick/tags`: https://quay.io/repository/biocontainers/spydrpick?tab=tags


.. raw:: html

    <script>
        var package = "spydrpick";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spydrpick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spydrpick/README.html