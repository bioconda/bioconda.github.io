:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tgtools'
.. highlight: bash

tgtools
=======

.. conda:recipe:: tgtools
   :replaces_section_title:
   :noindex:

   A command\-line tool to help manipulate transjson files which are used to store transmission\/relatedness networks.

   :homepage: https://github.com/jodyphelan/tgtools
   :documentation: https://github.com/jodyphelan/tgtools/blob/v0.0.4/README.md
   
   :license: MIT / MIT
   :recipe: /`tgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgtools/meta.yaml>`_

   


.. conda:package:: tgtools

   |downloads_tgtools| |docker_tgtools|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends networkx: 
   :depends pydantic: ``>=2.0``
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install tgtools

   and update with::

      mamba update tgtools

  To create a new environment, run::

      mamba create --name myenvname tgtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tgtools:<tag>

   (see `tgtools/tags`_ for valid values for ``<tag>``)


.. |downloads_tgtools| image:: https://img.shields.io/conda/dn/bioconda/tgtools.svg?style=flat
   :target: https://anaconda.org/bioconda/tgtools
   :alt:   (downloads)
.. |docker_tgtools| image:: https://quay.io/repository/biocontainers/tgtools/status
   :target: https://quay.io/repository/biocontainers/tgtools
.. _`tgtools/tags`: https://quay.io/repository/biocontainers/tgtools?tab=tags


.. raw:: html

    <script>
        var package = "tgtools";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tgtools/README.html