:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitp'
.. highlight: bash

splitp
======

.. conda:recipe:: splitp
   :replaces_section_title:
   :noindex:

   splitp is a streaming read pre\-preprocessor.

   :homepage: https://github.com/COMBINE-lab/splitp
   :license: BSD / BSD-3-Clause
   :recipe: /`splitp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitp/meta.yaml>`_

   


.. conda:package:: splitp

   |downloads_splitp| |docker_splitp|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install splitp

   and update with::

      mamba update splitp

  To create a new environment, run::

      mamba create --name myenvname splitp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/splitp:<tag>

   (see `splitp/tags`_ for valid values for ``<tag>``)


.. |downloads_splitp| image:: https://img.shields.io/conda/dn/bioconda/splitp.svg?style=flat
   :target: https://anaconda.org/bioconda/splitp
   :alt:   (downloads)
.. |docker_splitp| image:: https://quay.io/repository/biocontainers/splitp/status
   :target: https://quay.io/repository/biocontainers/splitp
.. _`splitp/tags`: https://quay.io/repository/biocontainers/splitp?tab=tags


.. raw:: html

    <script>
        var package = "splitp";
        var versions = ["0.2.0","0.2.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitp/README.html