:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cami-opal'
.. highlight: bash

cami-opal
=========

.. conda:recipe:: cami-opal
   :replaces_section_title:
   :noindex:

   OPAL assesses and compares the performance of taxonomic metagenome profilers.

   :homepage: http://cami-challenge.org
   :developer docs: https://github.com/CAMI-challenge/OPAL
   :license: Apache-2.0
   :recipe: /`cami-opal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal/meta.yaml>`_

   


.. conda:package:: cami-opal

   |downloads_cami-opal| |docker_cami-opal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.8.post0-0</code>,  <code>1.0.5-2</code>,  <code>1.0.5-0</code>,  <code>1.0.2-1</code>,  </span></summary>
      

      ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8.post0-0``,  ``1.0.5-2``,  ``1.0.5-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bokeh: ``3.1.0``
   :depends dendropy: ``>=4.4.0``
   :depends docker-py: ``>=6.1.2``
   :depends h5py: ``>=2.9.0``
   :depends jinja2: ``<3.0.1``
   :depends markupsafe: ``<2.1``
   :depends matplotlib-base: ``>=3.7.1``
   :depends numpy: ``>=1.24.2``
   :depends pandas: ``>=1.5.3``
   :depends python: ``>=3.6``
   :depends scikit-bio: ``>=0.5.5``
   :depends scipy: ``>=1.10.1``
   :depends seaborn: ``>=0.12.2``
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

      mamba install cami-opal

   and update with::

      mamba update cami-opal

  To create a new environment, run::

      mamba create --name myenvname cami-opal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cami-opal:<tag>

   (see `cami-opal/tags`_ for valid values for ``<tag>``)


.. |downloads_cami-opal| image:: https://img.shields.io/conda/dn/bioconda/cami-opal.svg?style=flat
   :target: https://anaconda.org/bioconda/cami-opal
   :alt:   (downloads)
.. |docker_cami-opal| image:: https://quay.io/repository/biocontainers/cami-opal/status
   :target: https://quay.io/repository/biocontainers/cami-opal
.. _`cami-opal/tags`: https://quay.io/repository/biocontainers/cami-opal?tab=tags


.. raw:: html

    <script>
        var package = "cami-opal";
        var versions = ["1.0.12","1.0.11","1.0.10","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cami-opal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cami-opal/README.html