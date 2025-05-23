:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepvariant'
.. highlight: bash

deepvariant
===========

.. conda:recipe:: deepvariant
   :replaces_section_title:
   :noindex:

   DeepVariant is an analysis pipeline that uses a deep neural network to call genetic variants from next\-generation DNA sequencing data.

   :homepage: https://github.com/google/deepvariant
   :documentation: https://github.com/google/deepvariant/blob/v1.8.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`deepvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant/meta.yaml>`_

   


.. conda:package:: deepvariant

   |downloads_deepvariant| |docker_deepvariant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends absl-py: 
   :depends altair: 
   :depends boost-cpp: 
   :depends contextlib2: 
   :depends crcmod: 
   :depends google-cloud-sdk: 
   :depends htslib: 
   :depends intervaltree: 
   :depends mock: 
   :depends numpy: ``>=1.21.2``
   :depends oauth2client: 
   :depends openjdk: ``11.0.*``
   :depends parallel: 
   :depends protobuf: 
   :depends psutil: 
   :depends python: ``<3.11``
   :depends requests: 
   :depends scipy: 
   :depends six: 
   :depends tensorflow: ``2.11.*``
   :depends tensorflow-estimator: ``2.11.*``
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

      mamba install deepvariant

   and update with::

      mamba update deepvariant

  To create a new environment, run::

      mamba create --name myenvname deepvariant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepvariant:<tag>

   (see `deepvariant/tags`_ for valid values for ``<tag>``)


.. |downloads_deepvariant| image:: https://img.shields.io/conda/dn/bioconda/deepvariant.svg?style=flat
   :target: https://anaconda.org/bioconda/deepvariant
   :alt:   (downloads)
.. |docker_deepvariant| image:: https://quay.io/repository/biocontainers/deepvariant/status
   :target: https://quay.io/repository/biocontainers/deepvariant
.. _`deepvariant/tags`: https://quay.io/repository/biocontainers/deepvariant?tab=tags


.. raw:: html

    <script>
        var package = "deepvariant";
        var versions = ["1.8.0","1.5.0","1.4.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepvariant/README.html