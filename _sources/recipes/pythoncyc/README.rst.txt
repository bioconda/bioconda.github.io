:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pythoncyc'
.. highlight: bash

pythoncyc
=========

.. conda:recipe:: pythoncyc
   :replaces_section_title:
   :noindex:

   A Python interface to Pathway Tools\, 2019 update

   :homepage: https://github.com/networkbiolab/PythonCyc
   :license: MIT
   :recipe: /`pythoncyc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythoncyc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythoncyc/meta.yaml>`_

   


.. conda:package:: pythoncyc

   |downloads_pythoncyc| |docker_pythoncyc|

   :versions:
      
      

      ``2.0.2-0``

      

   
   :depends python: ``>=3.0``
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

      mamba install pythoncyc

   and update with::

      mamba update pythoncyc

  To create a new environment, run::

      mamba create --name myenvname pythoncyc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pythoncyc:<tag>

   (see `pythoncyc/tags`_ for valid values for ``<tag>``)


.. |downloads_pythoncyc| image:: https://img.shields.io/conda/dn/bioconda/pythoncyc.svg?style=flat
   :target: https://anaconda.org/bioconda/pythoncyc
   :alt:   (downloads)
.. |docker_pythoncyc| image:: https://quay.io/repository/biocontainers/pythoncyc/status
   :target: https://quay.io/repository/biocontainers/pythoncyc
.. _`pythoncyc/tags`: https://quay.io/repository/biocontainers/pythoncyc?tab=tags


.. raw:: html

    <script>
        var package = "pythoncyc";
        var versions = ["2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythoncyc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythoncyc/README.html