:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meneco'
.. highlight: bash

meneco
======

.. conda:recipe:: meneco/1.5.2
   :replaces_section_title:
   :noindex:

   Metabolic Network Completion. Compute minimal completions to your draft network with reactions from a repair network.

   :homepage: http://bioasp.github.io/meneco/
   :license: GPLv3+
   :recipe: /`meneco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco>`_/`1.5.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco/1.5.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco/1.5.2/meta.yaml>`_

   


.. conda:package:: meneco

   |downloads_meneco| |docker_meneco|

   :versions:
      
      

      ``1.5.2-0``

      

   
   :depends pyasp: ``>=1.4.3``
   :depends python: ``3.5*``
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

      mamba install meneco

   and update with::

      mamba update meneco

  To create a new environment, run::

      mamba create --name myenvname meneco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meneco:<tag>

   (see `meneco/tags`_ for valid values for ``<tag>``)


.. |downloads_meneco| image:: https://img.shields.io/conda/dn/bioconda/meneco.svg?style=flat
   :target: https://anaconda.org/bioconda/meneco
   :alt:   (downloads)
.. |docker_meneco| image:: https://quay.io/repository/biocontainers/meneco/status
   :target: https://quay.io/repository/biocontainers/meneco
.. _`meneco/tags`: https://quay.io/repository/biocontainers/meneco?tab=tags


.. raw:: html

    <script>
        var package = "meneco";
        var versions = ["1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meneco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meneco/README.html