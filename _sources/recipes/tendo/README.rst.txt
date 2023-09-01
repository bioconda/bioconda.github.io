:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tendo'
.. highlight: bash

tendo
=====

.. conda:recipe:: tendo
   :replaces_section_title:
   :noindex:

   Tendo is a python module that adds basic functionality that is not \(yet\) provided by Python.

   :homepage: https://github.com/phom9/tendo
   :documentation: https://pythonhosted.org/tendo/
   
   :license: BSD / BSD
   :recipe: /`tendo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tendo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tendo/meta.yaml>`_

   


.. conda:package:: tendo

   |downloads_tendo| |docker_tendo|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.15-1``,  ``0.2.15-0``

      

   
   :depends pbr: 
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

      mamba install tendo

   and update with::

      mamba update tendo

  To create a new environment, run::

      mamba create --name myenvname tendo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tendo:<tag>

   (see `tendo/tags`_ for valid values for ``<tag>``)


.. |downloads_tendo| image:: https://img.shields.io/conda/dn/bioconda/tendo.svg?style=flat
   :target: https://anaconda.org/bioconda/tendo
   :alt:   (downloads)
.. |docker_tendo| image:: https://quay.io/repository/biocontainers/tendo/status
   :target: https://quay.io/repository/biocontainers/tendo
.. _`tendo/tags`: https://quay.io/repository/biocontainers/tendo?tab=tags


.. raw:: html

    <script>
        var package = "tendo";
        var versions = ["0.3.0","0.2.15","0.2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tendo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tendo/README.html