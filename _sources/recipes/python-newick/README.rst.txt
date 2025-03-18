:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-newick'
.. highlight: bash

python-newick
=============

.. conda:recipe:: python-newick
   :replaces_section_title:
   :noindex:

   A python module to read and write the Newick format.

   :homepage: https://github.com/glottobank/python-newick
   :license: Apache / Apache-2.0
   :recipe: /`python-newick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick/meta.yaml>`_

   


.. conda:package:: python-newick

   |downloads_python-newick| |docker_python-newick|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.10.0-0``,  ``1.9.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.2-2``,  ``0.9.2-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install python-newick

   and update with::

      mamba update python-newick

  To create a new environment, run::

      mamba create --name myenvname python-newick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-newick:<tag>

   (see `python-newick/tags`_ for valid values for ``<tag>``)


.. |downloads_python-newick| image:: https://img.shields.io/conda/dn/bioconda/python-newick.svg?style=flat
   :target: https://anaconda.org/bioconda/python-newick
   :alt:   (downloads)
.. |docker_python-newick| image:: https://quay.io/repository/biocontainers/python-newick/status
   :target: https://quay.io/repository/biocontainers/python-newick
.. _`python-newick/tags`: https://quay.io/repository/biocontainers/python-newick?tab=tags


.. raw:: html

    <script>
        var package = "python-newick";
        var versions = ["1.10.0","1.9.0","1.6.0","1.4.0","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-newick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-newick/README.html