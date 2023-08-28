:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-sortedcontainers'
.. highlight: bash

python-sortedcontainers
=======================

.. conda:recipe:: python-sortedcontainers
   :replaces_section_title:
   :noindex:

   sorted collections library\, written in pure\-Python\, and fast as C\-extensions

   :homepage: https://pypi.org/project/sortedcontainers/#description
   :license: Apache 2.0
   :recipe: /`python-sortedcontainers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-sortedcontainers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-sortedcontainers/meta.yaml>`_

   


.. conda:package:: python-sortedcontainers

   |downloads_python-sortedcontainers| |docker_python-sortedcontainers|

   :versions:
      
      

      ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install python-sortedcontainers

   and update with::

      mamba update python-sortedcontainers

  To create a new environment, run::

      mamba create --name myenvname python-sortedcontainers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-sortedcontainers:<tag>

   (see `python-sortedcontainers/tags`_ for valid values for ``<tag>``)


.. |downloads_python-sortedcontainers| image:: https://img.shields.io/conda/dn/bioconda/python-sortedcontainers.svg?style=flat
   :target: https://anaconda.org/bioconda/python-sortedcontainers
   :alt:   (downloads)
.. |docker_python-sortedcontainers| image:: https://quay.io/repository/biocontainers/python-sortedcontainers/status
   :target: https://quay.io/repository/biocontainers/python-sortedcontainers
.. _`python-sortedcontainers/tags`: https://quay.io/repository/biocontainers/python-sortedcontainers?tab=tags


.. raw:: html

    <script>
        var package = "python-sortedcontainers";
        var versions = ["2.4.0","2.3.0","2.2.2","2.2.2","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-sortedcontainers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-sortedcontainers/README.html