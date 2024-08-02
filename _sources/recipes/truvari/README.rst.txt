:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'truvari'
.. highlight: bash

truvari
=======

.. conda:recipe:: truvari
   :replaces_section_title:
   :noindex:

   Structural variant comparison tool for VCFs

   :homepage: https://github.com/ACEnglish/truvari
   :documentation: https://github.com/acenglish/truvari/wiki
   
   :license: MIT / MIT
   :recipe: /`truvari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/truvari/meta.yaml>`_

   


.. conda:package:: truvari

   |downloads_truvari| |docker_truvari|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-0</code>,  <code>4.2.2-0</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.5.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``4.3.0-0``,  ``4.2.2-0``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``0.1.2018.08.10-2``,  ``0.1.2018.08.10-1``,  ``0.1.2018.08.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwapy: ``>=0.1.4``
   :depends intervaltree: ``>=3.1``
   :depends joblib: ``>=1.2.0``
   :depends mafft: ``>=7.515``
   :depends pandas: ``>=1.5.3``
   :depends pyabpoa: ``>=1.4.3``
   :depends pysam: ``>=0.22``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.8``
   :depends python-edlib: ``>=1.3.9``
   :depends pywfa: ``>=0.5.1``
   :depends rich: ``>=12.5.1``
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

      mamba install truvari

   and update with::

      mamba update truvari

  To create a new environment, run::

      mamba create --name myenvname truvari

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/truvari:<tag>

   (see `truvari/tags`_ for valid values for ``<tag>``)


.. |downloads_truvari| image:: https://img.shields.io/conda/dn/bioconda/truvari.svg?style=flat
   :target: https://anaconda.org/bioconda/truvari
   :alt:   (downloads)
.. |docker_truvari| image:: https://quay.io/repository/biocontainers/truvari/status
   :target: https://quay.io/repository/biocontainers/truvari
.. _`truvari/tags`: https://quay.io/repository/biocontainers/truvari?tab=tags


.. raw:: html

    <script>
        var package = "truvari";
        var versions = ["4.3.0","4.2.2","4.1.0","4.1.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/truvari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/truvari/README.html