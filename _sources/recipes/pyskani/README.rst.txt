:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyskani'
.. highlight: bash

pyskani
=======

.. conda:recipe:: pyskani
   :replaces_section_title:
   :noindex:

   PyO3 bindings and Python interface to skani\, a method for fast fast genomic identity calculation using sparse chaining.

   :homepage: https://github.com/althonos/pyskani/
   :documentation: https://pyskani.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pyskani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyskani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyskani/meta.yaml>`_

   


.. conda:package:: pyskani

   |downloads_pyskani| |docker_pyskani|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pyskani

   and update with::

      mamba update pyskani

  To create a new environment, run::

      mamba create --name myenvname pyskani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyskani:<tag>

   (see `pyskani/tags`_ for valid values for ``<tag>``)


.. |downloads_pyskani| image:: https://img.shields.io/conda/dn/bioconda/pyskani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyskani
   :alt:   (downloads)
.. |docker_pyskani| image:: https://quay.io/repository/biocontainers/pyskani/status
   :target: https://quay.io/repository/biocontainers/pyskani
.. _`pyskani/tags`: https://quay.io/repository/biocontainers/pyskani?tab=tags


.. raw:: html

    <script>
        var package = "pyskani";
        var versions = ["0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyskani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyskani/README.html