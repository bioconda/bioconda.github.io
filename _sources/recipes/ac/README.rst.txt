:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ac'
.. highlight: bash

ac
==

.. conda:recipe:: ac
   :replaces_section_title:
   :noindex:

   A lossless compression tool for Amino Acid sequences

   :homepage: https://github.com/cobilab/ac
   :license: GPL / GPL3
   :recipe: /`ac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac/meta.yaml>`_

   


.. conda:package:: ac

   |downloads_ac| |docker_ac|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
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

      mamba install ac

   and update with::

      mamba update ac

  To create a new environment, run::

      mamba create --name myenvname ac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ac:<tag>

   (see `ac/tags`_ for valid values for ``<tag>``)


.. |downloads_ac| image:: https://img.shields.io/conda/dn/bioconda/ac.svg?style=flat
   :target: https://anaconda.org/bioconda/ac
   :alt:   (downloads)
.. |docker_ac| image:: https://quay.io/repository/biocontainers/ac/status
   :target: https://quay.io/repository/biocontainers/ac
.. _`ac/tags`: https://quay.io/repository/biocontainers/ac?tab=tags


.. raw:: html

    <script>
        var package = "ac";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac/README.html