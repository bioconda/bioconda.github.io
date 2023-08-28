:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hyphy-python'
.. highlight: bash

python-hyphy-python
===================

.. conda:recipe:: python-hyphy-python
   :replaces_section_title:
   :noindex:

   HyPhy package interface library

   :homepage: https://github.com/veg/hyphy-python
   :license: MIT
   :recipe: /`python-hyphy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python/meta.yaml>`_

   


.. conda:package:: python-hyphy-python

   |downloads_python-hyphy-python| |docker_python-hyphy-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.11-1</code>,  <code>0.1.11-0</code>,  <code>0.1.10-5</code>,  <code>0.1.10-3</code>,  <code>0.1.10-2</code>,  <code>0.1.10-1</code>,  <code>0.1.10-0</code>,  <code>0.1.9-4</code>,  <code>0.1.9-3</code>,  </span></summary>
      

      ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-5``,  ``0.1.10-3``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libcurl: ``>=8.1.2,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install python-hyphy-python

   and update with::

      mamba update python-hyphy-python

  To create a new environment, run::

      mamba create --name myenvname python-hyphy-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-hyphy-python:<tag>

   (see `python-hyphy-python/tags`_ for valid values for ``<tag>``)


.. |downloads_python-hyphy-python| image:: https://img.shields.io/conda/dn/bioconda/python-hyphy-python.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hyphy-python
   :alt:   (downloads)
.. |docker_python-hyphy-python| image:: https://quay.io/repository/biocontainers/python-hyphy-python/status
   :target: https://quay.io/repository/biocontainers/python-hyphy-python
.. _`python-hyphy-python/tags`: https://quay.io/repository/biocontainers/python-hyphy-python?tab=tags


.. raw:: html

    <script>
        var package = "python-hyphy-python";
        var versions = ["0.1.11","0.1.11","0.1.10","0.1.10","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hyphy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hyphy-python/README.html