:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraphase'
.. highlight: bash

paraphase
=========

.. conda:recipe:: paraphase
   :replaces_section_title:
   :noindex:

   HiFi\-based caller for highly homologous genes

   :homepage: https://github.com/PacificBiosciences/paraphase
   :license: BSD-3-Clause-Clear
   :recipe: /`paraphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase/meta.yaml>`_

   


.. conda:package:: paraphase

   |downloads_paraphase| |docker_paraphase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: 
   :depends networkx: ``>=2.8.2``
   :depends numpy: ``>=1.16``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends scipy: ``>=1.2``
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

      mamba install paraphase

   and update with::

      mamba update paraphase

  To create a new environment, run::

      mamba create --name myenvname paraphase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paraphase:<tag>

   (see `paraphase/tags`_ for valid values for ``<tag>``)


.. |downloads_paraphase| image:: https://img.shields.io/conda/dn/bioconda/paraphase.svg?style=flat
   :target: https://anaconda.org/bioconda/paraphase
   :alt:   (downloads)
.. |docker_paraphase| image:: https://quay.io/repository/biocontainers/paraphase/status
   :target: https://quay.io/repository/biocontainers/paraphase
.. _`paraphase/tags`: https://quay.io/repository/biocontainers/paraphase?tab=tags


.. raw:: html

    <script>
        var package = "paraphase";
        var versions = ["3.3.0","3.2.1","3.2.0","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraphase/README.html