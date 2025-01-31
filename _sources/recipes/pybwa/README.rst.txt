:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybwa'
.. highlight: bash

pybwa
=====

.. conda:recipe:: pybwa
   :replaces_section_title:
   :noindex:

   Pybwa is a python module that makes it easy to align sequence data. It is a lightweight wrapper of bwa.

   :homepage: https://github.com/fulcrumgenomics/pybwa
   :documentation: https://pybwa.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`pybwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybwa/meta.yaml>`_

   


.. conda:package:: pybwa

   |downloads_pybwa| |docker_pybwa|

   :versions:
      
      

      ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.3.4-0``

      

   
   :depends fgpyo: ``>=0.7.0``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pysam: ``>=0.22.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends typing-extensions: ``>=3.7.4``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pybwa

   and update with::

      mamba update pybwa

  To create a new environment, run::

      mamba create --name myenvname pybwa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybwa:<tag>

   (see `pybwa/tags`_ for valid values for ``<tag>``)


.. |downloads_pybwa| image:: https://img.shields.io/conda/dn/bioconda/pybwa.svg?style=flat
   :target: https://anaconda.org/bioconda/pybwa
   :alt:   (downloads)
.. |docker_pybwa| image:: https://quay.io/repository/biocontainers/pybwa/status
   :target: https://quay.io/repository/biocontainers/pybwa
.. _`pybwa/tags`: https://quay.io/repository/biocontainers/pybwa?tab=tags


.. raw:: html

    <script>
        var package = "pybwa";
        var versions = ["1.4.5","1.4.4","1.4.3","1.4.0","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybwa/README.html