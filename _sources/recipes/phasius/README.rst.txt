:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phasius'
.. highlight: bash

phasius
=======

.. conda:recipe:: phasius
   :replaces_section_title:
   :noindex:

   A rust tool to create phase\-block maps from phased cram\/bam files.

   :homepage: https://github.com/wdecoster/phasius
   :license: MIT / MIT
   :recipe: /`phasius <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phasius>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phasius/meta.yaml>`_

   


.. conda:package:: phasius

   |downloads_phasius| |docker_phasius|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install phasius

   and update with::

      mamba update phasius

  To create a new environment, run::

      mamba create --name myenvname phasius

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phasius:<tag>

   (see `phasius/tags`_ for valid values for ``<tag>``)


.. |downloads_phasius| image:: https://img.shields.io/conda/dn/bioconda/phasius.svg?style=flat
   :target: https://anaconda.org/bioconda/phasius
   :alt:   (downloads)
.. |docker_phasius| image:: https://quay.io/repository/biocontainers/phasius/status
   :target: https://quay.io/repository/biocontainers/phasius
.. _`phasius/tags`: https://quay.io/repository/biocontainers/phasius?tab=tags


.. raw:: html

    <script>
        var package = "phasius";
        var versions = ["0.7.0","0.6.0","0.5.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phasius/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phasius/README.html