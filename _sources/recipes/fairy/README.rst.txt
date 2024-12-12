:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fairy'
.. highlight: bash

fairy
=====

.. conda:recipe:: fairy
   :replaces_section_title:
   :noindex:

   fairy calculates all\-to\-all approximate coverage for multi\-sample metagenomic binning \> 100x faster than alignment.

   :homepage: https://github.com/bluenote-1577/fairy
   :license: MIT
   :recipe: /`fairy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairy/meta.yaml>`_

   


.. conda:package:: fairy

   |downloads_fairy| |docker_fairy|

   :versions:
      
      

      ``0.5.7-2``,  ``0.5.7-1``,  ``0.5.7-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install fairy

   and update with::

      mamba update fairy

  To create a new environment, run::

      mamba create --name myenvname fairy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fairy:<tag>

   (see `fairy/tags`_ for valid values for ``<tag>``)


.. |downloads_fairy| image:: https://img.shields.io/conda/dn/bioconda/fairy.svg?style=flat
   :target: https://anaconda.org/bioconda/fairy
   :alt:   (downloads)
.. |docker_fairy| image:: https://quay.io/repository/biocontainers/fairy/status
   :target: https://quay.io/repository/biocontainers/fairy
.. _`fairy/tags`: https://quay.io/repository/biocontainers/fairy?tab=tags


.. raw:: html

    <script>
        var package = "fairy";
        var versions = ["0.5.7","0.5.7","0.5.7","0.5.5","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fairy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fairy/README.html