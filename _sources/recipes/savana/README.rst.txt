:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savana'
.. highlight: bash

savana
======

.. conda:recipe:: savana
   :replaces_section_title:
   :noindex:

   SAVANA\: a somatic structural variant caller for long\-read data

   :homepage: https://github.com/cortes-ciriano-lab/savana
   :license: Apache-2.0
   :recipe: /`savana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana/meta.yaml>`_

   


.. conda:package:: savana

   |downloads_savana| |docker_savana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cyvcf2: ``>=0.30.16``
   :depends matplotlib-base: ``>=3.7.1``
   :depends pandas: ``>=2.0.0``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``1.2.2.*``
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

      mamba install savana

   and update with::

      mamba update savana

  To create a new environment, run::

      mamba create --name myenvname savana

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/savana:<tag>

   (see `savana/tags`_ for valid values for ``<tag>``)


.. |downloads_savana| image:: https://img.shields.io/conda/dn/bioconda/savana.svg?style=flat
   :target: https://anaconda.org/bioconda/savana
   :alt:   (downloads)
.. |docker_savana| image:: https://quay.io/repository/biocontainers/savana/status
   :target: https://quay.io/repository/biocontainers/savana
.. _`savana/tags`: https://quay.io/repository/biocontainers/savana?tab=tags


.. raw:: html

    <script>
        var package = "savana";
        var versions = ["1.2.3","1.2.2","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savana/README.html