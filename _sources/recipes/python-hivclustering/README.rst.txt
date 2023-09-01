:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hivclustering'
.. highlight: bash

python-hivclustering
====================

.. conda:recipe:: python-hivclustering
   :replaces_section_title:
   :noindex:

   A Python 3 library that makes inferences on HIV\-1 transmission networks.

   :homepage: https://github.com/veg/hivclustering
   :license: MIT
   :recipe: /`python-hivclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering/meta.yaml>`_

   


.. conda:package:: python-hivclustering

   |downloads_python-hivclustering| |docker_python-hivclustering|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.7-0</code>,  <code>1.6.5-0</code>,  <code>1.5.6-0</code>,  <code>1.5.3-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.6.7-0``,  ``1.6.5-0``,  ``1.5.6-0``,  ``1.5.3-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3``
   :depends python-bioext: ``>=0.19.0``
   :depends python-hppy: ``>=0.9.9``
   :depends python-hyphy-python: ``>=0.1.11``
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

      mamba install python-hivclustering

   and update with::

      mamba update python-hivclustering

  To create a new environment, run::

      mamba create --name myenvname python-hivclustering

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-hivclustering:<tag>

   (see `python-hivclustering/tags`_ for valid values for ``<tag>``)


.. |downloads_python-hivclustering| image:: https://img.shields.io/conda/dn/bioconda/python-hivclustering.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hivclustering
   :alt:   (downloads)
.. |docker_python-hivclustering| image:: https://quay.io/repository/biocontainers/python-hivclustering/status
   :target: https://quay.io/repository/biocontainers/python-hivclustering
.. _`python-hivclustering/tags`: https://quay.io/repository/biocontainers/python-hivclustering?tab=tags


.. raw:: html

    <script>
        var package = "python-hivclustering";
        var versions = ["1.6.7","1.6.5","1.5.6","1.5.3","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hivclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hivclustering/README.html