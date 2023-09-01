:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnp-mapping'
.. highlight: bash

dnp-mapping
===========

.. conda:recipe:: dnp-mapping
   :replaces_section_title:
   :noindex:

   Mapping of a nuclesome position in sequence by  pattern

   :homepage: https://github.com/erinijapranckeviciene/mapping_CC
   :license: MIT
   :recipe: /`dnp-mapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-mapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-mapping/meta.yaml>`_

   


.. conda:package:: dnp-mapping

   |downloads_dnp-mapping| |docker_dnp-mapping|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install dnp-mapping

   and update with::

      mamba update dnp-mapping

  To create a new environment, run::

      mamba create --name myenvname dnp-mapping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnp-mapping:<tag>

   (see `dnp-mapping/tags`_ for valid values for ``<tag>``)


.. |downloads_dnp-mapping| image:: https://img.shields.io/conda/dn/bioconda/dnp-mapping.svg?style=flat
   :target: https://anaconda.org/bioconda/dnp-mapping
   :alt:   (downloads)
.. |docker_dnp-mapping| image:: https://quay.io/repository/biocontainers/dnp-mapping/status
   :target: https://quay.io/repository/biocontainers/dnp-mapping
.. _`dnp-mapping/tags`: https://quay.io/repository/biocontainers/dnp-mapping?tab=tags


.. raw:: html

    <script>
        var package = "dnp-mapping";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnp-mapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnp-mapping/README.html