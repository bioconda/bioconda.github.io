:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-fakemp'
.. highlight: bash

python-fakemp
=============

.. conda:recipe:: python-fakemp
   :replaces_section_title:
   :noindex:

   Fake multiprocessing pool objects

   :homepage: https://github.com/nlhepler/fakemp
   :license: GPL-3
   :recipe: /`python-fakemp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-fakemp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-fakemp/meta.yaml>`_

   


.. conda:package:: python-fakemp

   |downloads_python-fakemp| |docker_python-fakemp|

   :versions:
      
      

      ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends python: 
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

      mamba install python-fakemp

   and update with::

      mamba update python-fakemp

  To create a new environment, run::

      mamba create --name myenvname python-fakemp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-fakemp:<tag>

   (see `python-fakemp/tags`_ for valid values for ``<tag>``)


.. |downloads_python-fakemp| image:: https://img.shields.io/conda/dn/bioconda/python-fakemp.svg?style=flat
   :target: https://anaconda.org/bioconda/python-fakemp
   :alt:   (downloads)
.. |docker_python-fakemp| image:: https://quay.io/repository/biocontainers/python-fakemp/status
   :target: https://quay.io/repository/biocontainers/python-fakemp
.. _`python-fakemp/tags`: https://quay.io/repository/biocontainers/python-fakemp?tab=tags


.. raw:: html

    <script>
        var package = "python-fakemp";
        var versions = ["0.9.1","0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-fakemp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-fakemp/README.html