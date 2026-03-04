:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'twinspector'
.. highlight: bash

twinspector
===========

.. conda:recipe:: twinspector
   :replaces_section_title:
   :noindex:

   TwInsPEctor\: A tool for twin prime editing analysis.

   :homepage: https://github.com/clementlab/TwInsPEctor
   :license: MIT
   :recipe: /`twinspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twinspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/twinspector/meta.yaml>`_

   


.. conda:package:: twinspector

   |downloads_twinspector| |docker_twinspector|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends crispresso2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends seaborn: 
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

      mamba install twinspector

   and update with::

      mamba update twinspector

  To create a new environment, run::

      mamba create --name myenvname twinspector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/twinspector:<tag>

   (see `twinspector/tags`_ for valid values for ``<tag>``)


.. |downloads_twinspector| image:: https://img.shields.io/conda/dn/bioconda/twinspector.svg?style=flat
   :target: https://anaconda.org/bioconda/twinspector
   :alt:   (downloads)
.. |docker_twinspector| image:: https://quay.io/repository/biocontainers/twinspector/status
   :target: https://quay.io/repository/biocontainers/twinspector
.. _`twinspector/tags`: https://quay.io/repository/biocontainers/twinspector?tab=tags


.. raw:: html

    <script>
        var package = "twinspector";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/twinspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/twinspector/README.html