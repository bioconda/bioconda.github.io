:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsort'
.. highlight: bash

gsort
=====

.. conda:recipe:: gsort
   :replaces_section_title:
   :noindex:

   Sort genomic files according to a genomefile.

   :homepage: https://github.com/brentp/gsort
   :documentation: https://github.com/brentp/gsort/blob/v0.1.5/README.md
   
   :license: MIT / MIT
   :recipe: /`gsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsort/meta.yaml>`_

   


.. conda:package:: gsort

   |downloads_gsort| |docker_gsort|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
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

      mamba install gsort

   and update with::

      mamba update gsort

  To create a new environment, run::

      mamba create --name myenvname gsort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gsort:<tag>

   (see `gsort/tags`_ for valid values for ``<tag>``)


.. |downloads_gsort| image:: https://img.shields.io/conda/dn/bioconda/gsort.svg?style=flat
   :target: https://anaconda.org/bioconda/gsort
   :alt:   (downloads)
.. |docker_gsort| image:: https://quay.io/repository/biocontainers/gsort/status
   :target: https://quay.io/repository/biocontainers/gsort
.. _`gsort/tags`: https://quay.io/repository/biocontainers/gsort?tab=tags


.. raw:: html

    <script>
        var package = "gsort";
        var versions = ["0.1.5","0.1.4","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsort/README.html