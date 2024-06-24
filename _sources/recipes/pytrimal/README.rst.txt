:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytrimal'
.. highlight: bash

pytrimal
========

.. conda:recipe:: pytrimal
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to trimAl\, a tool for automated alignment trimming.

   :homepage: https://github.com/althonos/pytrimal
   :documentation: https://pytrimal.readthedocs.org/
   
   :license: GPL / GPL-3
   :recipe: /`pytrimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytrimal/meta.yaml>`_

   


.. conda:package:: pytrimal

   |downloads_pytrimal| |docker_pytrimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.5-2</code>,  <code>0.5.5-1</code>,  <code>0.5.5-0</code>,  <code>0.5.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends archspec: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
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

      mamba install pytrimal

   and update with::

      mamba update pytrimal

  To create a new environment, run::

      mamba create --name myenvname pytrimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytrimal:<tag>

   (see `pytrimal/tags`_ for valid values for ``<tag>``)


.. |downloads_pytrimal| image:: https://img.shields.io/conda/dn/bioconda/pytrimal.svg?style=flat
   :target: https://anaconda.org/bioconda/pytrimal
   :alt:   (downloads)
.. |docker_pytrimal| image:: https://quay.io/repository/biocontainers/pytrimal/status
   :target: https://quay.io/repository/biocontainers/pytrimal
.. _`pytrimal/tags`: https://quay.io/repository/biocontainers/pytrimal?tab=tags


.. raw:: html

    <script>
        var package = "pytrimal";
        var versions = ["0.7.0","0.7.0","0.6.0","0.5.5","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytrimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytrimal/README.html