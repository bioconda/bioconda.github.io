:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trtools'
.. highlight: bash

trtools
=======

.. conda:recipe:: trtools
   :replaces_section_title:
   :noindex:

   Toolkit for genome\-wide analysis of tandem repeats https\:\/\/trtools.readthedocs.io\/

   :homepage: http://github.com/gymreklab/TRTools
   :documentation: https://trtools.readthedocs.io/
   
   :developer docs: https://github.com/gymreklab/TRTools
   :license: MIT / MIT
   :recipe: /`trtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools/meta.yaml>`_

   


.. conda:package:: trtools

   |downloads_trtools| |docker_trtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.2-0</code>,  <code>5.0.1-0</code>,  <code>4.2.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  </span></summary>
      

      ``5.0.2-0``,  ``5.0.1-0``,  ``4.2.1-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``2.0.18-1``,  ``2.0.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends cyvcf2: ``>=0.30.1``
   :depends matplotlib-base: ``>=3.2.2``
   :depends numpy: ``>=1.18.5``
   :depends pandas: ``>=1.0.5``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.5``
   :depends scikit-learn: ``>=0.23.1``
   :depends scipy: ``>=1.4.1``
   :depends statsmodels: ``>=0.13.5``
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

      mamba install trtools

   and update with::

      mamba update trtools

  To create a new environment, run::

      mamba create --name myenvname trtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trtools:<tag>

   (see `trtools/tags`_ for valid values for ``<tag>``)


.. |downloads_trtools| image:: https://img.shields.io/conda/dn/bioconda/trtools.svg?style=flat
   :target: https://anaconda.org/bioconda/trtools
   :alt:   (downloads)
.. |docker_trtools| image:: https://quay.io/repository/biocontainers/trtools/status
   :target: https://quay.io/repository/biocontainers/trtools
.. _`trtools/tags`: https://quay.io/repository/biocontainers/trtools?tab=tags


.. raw:: html

    <script>
        var package = "trtools";
        var versions = ["5.0.2","5.0.1","4.2.1","4.1.0","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trtools/README.html