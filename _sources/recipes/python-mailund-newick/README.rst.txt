:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-mailund-newick'
.. highlight: bash

python-mailund-newick
=====================

.. conda:recipe:: python-mailund-newick
   :replaces_section_title:
   :noindex:

   Another python module to read and write the Newick format

   :homepage: http://www.daimi.au.dk/~mailund/newick.html
   :license: GPL / GNU General Public License v2
   :recipe: /`python-mailund-newick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-mailund-newick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-mailund-newick/meta.yaml>`_

   


.. conda:package:: python-mailund-newick

   |downloads_python-mailund-newick| |docker_python-mailund-newick|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install python-mailund-newick

   and update with::

      mamba update python-mailund-newick

  To create a new environment, run::

      mamba create --name myenvname python-mailund-newick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-mailund-newick:<tag>

   (see `python-mailund-newick/tags`_ for valid values for ``<tag>``)


.. |downloads_python-mailund-newick| image:: https://img.shields.io/conda/dn/bioconda/python-mailund-newick.svg?style=flat
   :target: https://anaconda.org/bioconda/python-mailund-newick
   :alt:   (downloads)
.. |docker_python-mailund-newick| image:: https://quay.io/repository/biocontainers/python-mailund-newick/status
   :target: https://quay.io/repository/biocontainers/python-mailund-newick
.. _`python-mailund-newick/tags`: https://quay.io/repository/biocontainers/python-mailund-newick?tab=tags


.. raw:: html

    <script>
        var package = "python-mailund-newick";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-mailund-newick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-mailund-newick/README.html