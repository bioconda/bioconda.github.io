:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmslib-metabrainz'
.. highlight: bash

nmslib-metabrainz
=================

.. conda:recipe:: nmslib-metabrainz
   :replaces_section_title:
   :noindex:

   Non\-Metric Space Library \(NMSLIB\).

   :homepage: https://github.com/nmslib/nmslib
   :license: APACHE / Apache-2.0 AND MIT
   :recipe: /`nmslib-metabrainz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmslib-metabrainz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmslib-metabrainz/meta.yaml>`_

   


.. conda:package:: nmslib-metabrainz

   |downloads_nmslib-metabrainz| |docker_nmslib-metabrainz|

   :versions:
      
      

      ``2.1.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: ``>=1.21,<3``
   :depends psutil: 
   :depends pybind11: ``>=2.2.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install nmslib-metabrainz

   and update with::

      mamba update nmslib-metabrainz

  To create a new environment, run::

      mamba create --name myenvname nmslib-metabrainz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nmslib-metabrainz:<tag>

   (see `nmslib-metabrainz/tags`_ for valid values for ``<tag>``)


.. |downloads_nmslib-metabrainz| image:: https://img.shields.io/conda/dn/bioconda/nmslib-metabrainz.svg?style=flat
   :target: https://anaconda.org/bioconda/nmslib-metabrainz
   :alt:   (downloads)
.. |docker_nmslib-metabrainz| image:: https://quay.io/repository/biocontainers/nmslib-metabrainz/status
   :target: https://quay.io/repository/biocontainers/nmslib-metabrainz
.. _`nmslib-metabrainz/tags`: https://quay.io/repository/biocontainers/nmslib-metabrainz?tab=tags


.. raw:: html

    <script>
        var package = "nmslib-metabrainz";
        var versions = ["2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmslib-metabrainz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmslib-metabrainz/README.html