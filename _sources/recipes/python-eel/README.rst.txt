:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-eel'
.. highlight: bash

python-eel
==========

.. conda:recipe:: python-eel
   :replaces_section_title:
   :noindex:

   Tool for finding evolutionarily conserved mammalian enhancer elements.

   :homepage: https://github.com/kpalin/EEL
   :license: GPL
   :recipe: /`python-eel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel/meta.yaml>`_

   


.. conda:package:: python-eel

   |downloads_python-eel| |docker_python-eel|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install python-eel

   and update with::

      mamba update python-eel

  To create a new environment, run::

      mamba create --name myenvname python-eel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-eel:<tag>

   (see `python-eel/tags`_ for valid values for ``<tag>``)


.. |downloads_python-eel| image:: https://img.shields.io/conda/dn/bioconda/python-eel.svg?style=flat
   :target: https://anaconda.org/bioconda/python-eel
   :alt:   (downloads)
.. |docker_python-eel| image:: https://quay.io/repository/biocontainers/python-eel/status
   :target: https://quay.io/repository/biocontainers/python-eel
.. _`python-eel/tags`: https://quay.io/repository/biocontainers/python-eel?tab=tags


.. raw:: html

    <script>
        var package = "python-eel";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-eel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-eel/README.html