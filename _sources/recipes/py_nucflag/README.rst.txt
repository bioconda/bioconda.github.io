:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'py_nucflag'
.. highlight: bash

py_nucflag
==========

.. conda:recipe:: py_nucflag
   :replaces_section_title:
   :noindex:

   Library to call misassemblies in genome assemblies from long\-read alignments.

   :homepage: https://github.com/logsdon-lab/rs-nucflag
   :license: MIT
   :recipe: /`py_nucflag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_nucflag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_nucflag/meta.yaml>`_

   


.. conda:package:: py_nucflag

   |downloads_py_nucflag| |docker_py_nucflag|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends polars: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install py_nucflag

   and update with::

      mamba update py_nucflag

  To create a new environment, run::

      mamba create --name myenvname py_nucflag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/py_nucflag:<tag>

   (see `py_nucflag/tags`_ for valid values for ``<tag>``)


.. |downloads_py_nucflag| image:: https://img.shields.io/conda/dn/bioconda/py_nucflag.svg?style=flat
   :target: https://anaconda.org/bioconda/py_nucflag
   :alt:   (downloads)
.. |docker_py_nucflag| image:: https://quay.io/repository/biocontainers/py_nucflag/status
   :target: https://quay.io/repository/biocontainers/py_nucflag
.. _`py_nucflag/tags`: https://quay.io/repository/biocontainers/py_nucflag?tab=tags


.. raw:: html

    <script>
        var package = "py_nucflag";
        var versions = ["0.1.7","0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py_nucflag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py_nucflag/README.html