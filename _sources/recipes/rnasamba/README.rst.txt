:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasamba'
.. highlight: bash

rnasamba
========

.. conda:recipe:: rnasamba
   :replaces_section_title:
   :noindex:

   A tool for computing the coding potential of RNA transcript sequences using deep learning.

   :homepage: http://apcamargo.github.io/RNAsamba/
   :license: GPL / GPL-3
   :recipe: /`rnasamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba/meta.yaml>`_

   


.. conda:package:: rnasamba

   |downloads_rnasamba| |docker_rnasamba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends h5py: ``<3.0.0``
   :depends keras: ``>=2.1.0,<2.3.0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: ``<1.17``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends tensorflow: ``>=1.5.0,<2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rnasamba

   and update with::

      mamba update rnasamba

  To create a new environment, run::

      mamba create --name myenvname rnasamba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnasamba:<tag>

   (see `rnasamba/tags`_ for valid values for ``<tag>``)


.. |downloads_rnasamba| image:: https://img.shields.io/conda/dn/bioconda/rnasamba.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasamba
   :alt:   (downloads)
.. |docker_rnasamba| image:: https://quay.io/repository/biocontainers/rnasamba/status
   :target: https://quay.io/repository/biocontainers/rnasamba
.. _`rnasamba/tags`: https://quay.io/repository/biocontainers/rnasamba?tab=tags


.. raw:: html

    <script>
        var package = "rnasamba";
        var versions = ["0.2.5","0.2.5","0.2.4","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasamba/README.html