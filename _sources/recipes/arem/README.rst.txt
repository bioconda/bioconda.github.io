:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arem'
.. highlight: bash

arem
====

.. conda:recipe:: arem
   :replaces_section_title:
   :noindex:

   Aligning Reads by Expectation\-Maximization.\\nBased on MACS \(Model Based Analysis for ChIP\-Seq data\)

   :homepage: http://cbcl.ics.uci.edu/AREM
   :license: OTHER / Artistic License
   :recipe: /`arem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arem/meta.yaml>`_
   :links: biotools: :biotools:`arem`

   


.. conda:package:: arem

   |downloads_arem| |docker_arem|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends python: ``<3``
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

      mamba install arem

   and update with::

      mamba update arem

  To create a new environment, run::

      mamba create --name myenvname arem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arem:<tag>

   (see `arem/tags`_ for valid values for ``<tag>``)


.. |downloads_arem| image:: https://img.shields.io/conda/dn/bioconda/arem.svg?style=flat
   :target: https://anaconda.org/bioconda/arem
   :alt:   (downloads)
.. |docker_arem| image:: https://quay.io/repository/biocontainers/arem/status
   :target: https://quay.io/repository/biocontainers/arem
.. _`arem/tags`: https://quay.io/repository/biocontainers/arem?tab=tags


.. raw:: html

    <script>
        var package = "arem";
        var versions = ["1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arem/README.html