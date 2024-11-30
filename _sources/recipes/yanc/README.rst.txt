:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yanc'
.. highlight: bash

yanc
====

.. conda:recipe:: yanc
   :replaces_section_title:
   :noindex:

   Yet another nose colorer

   :homepage: https://github.com/0compute/yanc
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`yanc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanc/meta.yaml>`_

   


.. conda:package:: yanc

   |downloads_yanc| |docker_yanc|

   :versions:
      
      

      ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``

      

   
   :depends python: 
   :depends setuptools: 
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

      mamba install yanc

   and update with::

      mamba update yanc

  To create a new environment, run::

      mamba create --name myenvname yanc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yanc:<tag>

   (see `yanc/tags`_ for valid values for ``<tag>``)


.. |downloads_yanc| image:: https://img.shields.io/conda/dn/bioconda/yanc.svg?style=flat
   :target: https://anaconda.org/bioconda/yanc
   :alt:   (downloads)
.. |docker_yanc| image:: https://quay.io/repository/biocontainers/yanc/status
   :target: https://quay.io/repository/biocontainers/yanc
.. _`yanc/tags`: https://quay.io/repository/biocontainers/yanc?tab=tags


.. raw:: html

    <script>
        var package = "yanc";
        var versions = ["0.3.3","0.3.3","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yanc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yanc/README.html