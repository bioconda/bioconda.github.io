:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sevenbridges-python'
.. highlight: bash

sevenbridges-python
===================

.. conda:recipe:: sevenbridges-python
   :replaces_section_title:
   :noindex:

   SBG API python client bindings

   :homepage: https://github.com/sbg/sevenbridges-python
   :license: APACHE / Apache-2.0
   :recipe: /`sevenbridges-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python/meta.yaml>`_

   sevenbridges\-python is a Python library that provides an interface for the Seven Bridges Platform the Cancer Genomics Cloud and Cavatica public APIs. It works with Python versions 2.6\+ and supports Python 3.


.. conda:package:: sevenbridges-python

   |downloads_sevenbridges-python| |docker_sevenbridges-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.2-0</code>,  <code>2.10.1-0</code>,  <code>2.10.0-0</code>,  <code>2.9.2-0</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-0</code>,  <code>2.7.0-0</code>,  </span></summary>
      

      ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.0-0``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.3-0``,  ``0.20.2-0``,  ``0.20.0-0``,  ``0.18.2-1``,  ``0.18.2-0``,  ``0.17.7-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.0-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3``
   :depends requests: ``>=2.25.1``
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

      mamba install sevenbridges-python

   and update with::

      mamba update sevenbridges-python

  To create a new environment, run::

      mamba create --name myenvname sevenbridges-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sevenbridges-python:<tag>

   (see `sevenbridges-python/tags`_ for valid values for ``<tag>``)


.. |downloads_sevenbridges-python| image:: https://img.shields.io/conda/dn/bioconda/sevenbridges-python.svg?style=flat
   :target: https://anaconda.org/bioconda/sevenbridges-python
   :alt:   (downloads)
.. |docker_sevenbridges-python| image:: https://quay.io/repository/biocontainers/sevenbridges-python/status
   :target: https://quay.io/repository/biocontainers/sevenbridges-python
.. _`sevenbridges-python/tags`: https://quay.io/repository/biocontainers/sevenbridges-python?tab=tags


.. raw:: html

    <script>
        var package = "sevenbridges-python";
        var versions = ["2.10.2","2.10.1","2.10.0","2.9.2","2.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sevenbridges-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sevenbridges-python/README.html