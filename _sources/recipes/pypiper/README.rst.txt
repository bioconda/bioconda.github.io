:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypiper'
.. highlight: bash

pypiper
=======

.. conda:recipe:: pypiper
   :replaces_section_title:
   :noindex:

   Pypiper is a lightweight python toolkit that helps you write slick pipelines in python.

   :homepage: http://pypiper.readthedocs.io/en/latest/
   :developer docs: https://github.com/epigen/pypiper
   :license: BSD / BSD-2-Clause
   :recipe: /`pypiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper/meta.yaml>`_

   


.. conda:package:: pypiper

   |downloads_pypiper| |docker_pypiper|

   :versions:
      
      

      ``0.8-0``,  ``0.7.2-2``,  ``0.7.2-0``,  ``0.6-0``

      

   
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

      mamba install pypiper

   and update with::

      mamba update pypiper

  To create a new environment, run::

      mamba create --name myenvname pypiper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypiper:<tag>

   (see `pypiper/tags`_ for valid values for ``<tag>``)


.. |downloads_pypiper| image:: https://img.shields.io/conda/dn/bioconda/pypiper.svg?style=flat
   :target: https://anaconda.org/bioconda/pypiper
   :alt:   (downloads)
.. |docker_pypiper| image:: https://quay.io/repository/biocontainers/pypiper/status
   :target: https://quay.io/repository/biocontainers/pypiper
.. _`pypiper/tags`: https://quay.io/repository/biocontainers/pypiper?tab=tags


.. raw:: html

    <script>
        var package = "pypiper";
        var versions = ["0.8","0.7.2","0.7.2","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypiper/README.html