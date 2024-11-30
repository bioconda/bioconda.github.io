:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megalodon'
.. highlight: bash

megalodon
=========

.. conda:recipe:: megalodon
   :replaces_section_title:
   :noindex:

   Nanopore modified base and sequence variant detection.

   :homepage: https://github.com/nanoporetech/megalodon
   :documentation: https://nanoporetech.github.io/megalodon/index.html
   
   :license: OTHER / Oxford Nanopore Technologies PLC. Public License Version 1.0
   :recipe: /`megalodon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon/meta.yaml>`_

   


.. conda:package:: megalodon

   |downloads_megalodon| |docker_megalodon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-2</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.5-0</code>,  <code>2.3.4-0</code>,  </span></summary>
      

      ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.10-0``,  ``2.2.9-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.2.1``
   :depends libgcc-ng: ``>=12``
   :depends mappy: ``>=2.16``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends numpy: ``>=1.9.0``
   :depends ont-fast5-api: ``>=3.2``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :depends scipy: ``>=1.1.0``
   :depends seaborn: 
   :depends tqdm: ``>=2.17``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install megalodon

   and update with::

      mamba update megalodon

  To create a new environment, run::

      mamba create --name myenvname megalodon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megalodon:<tag>

   (see `megalodon/tags`_ for valid values for ``<tag>``)


.. |downloads_megalodon| image:: https://img.shields.io/conda/dn/bioconda/megalodon.svg?style=flat
   :target: https://anaconda.org/bioconda/megalodon
   :alt:   (downloads)
.. |docker_megalodon| image:: https://quay.io/repository/biocontainers/megalodon/status
   :target: https://quay.io/repository/biocontainers/megalodon
.. _`megalodon/tags`: https://quay.io/repository/biocontainers/megalodon?tab=tags


.. raw:: html

    <script>
        var package = "megalodon";
        var versions = ["2.5.0","2.5.0","2.5.0","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megalodon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megalodon/README.html