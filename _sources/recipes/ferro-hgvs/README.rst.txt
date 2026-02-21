:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ferro-hgvs'
.. highlight: bash

ferro-hgvs
==========

.. conda:recipe:: ferro-hgvs
   :replaces_section_title:
   :noindex:

   HGVS variant parser and normalizer.

   :homepage: https://github.com/fulcrumgenomics/ferro-hgvs
   :documentation: https://github.com/fulcrumgenomics/ferro-hgvs/blob/v0.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`ferro-hgvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ferro-hgvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ferro-hgvs/meta.yaml>`_

   


.. conda:package:: ferro-hgvs

   |downloads_ferro-hgvs| |docker_ferro-hgvs|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc: ``>=14``
   :depends libsqlite: ``>=3.51.2,<4.0a0``
   :depends openssl: ``>=3.5.5,<4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ferro-hgvs

   and update with::

      mamba update ferro-hgvs

  To create a new environment, run::

      mamba create --name myenvname ferro-hgvs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ferro-hgvs:<tag>

   (see `ferro-hgvs/tags`_ for valid values for ``<tag>``)


.. |downloads_ferro-hgvs| image:: https://img.shields.io/conda/dn/bioconda/ferro-hgvs.svg?style=flat
   :target: https://anaconda.org/bioconda/ferro-hgvs
   :alt:   (downloads)
.. |docker_ferro-hgvs| image:: https://quay.io/repository/biocontainers/ferro-hgvs/status
   :target: https://quay.io/repository/biocontainers/ferro-hgvs
.. _`ferro-hgvs/tags`: https://quay.io/repository/biocontainers/ferro-hgvs?tab=tags


.. raw:: html

    <script>
        var package = "ferro-hgvs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ferro-hgvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ferro-hgvs/README.html