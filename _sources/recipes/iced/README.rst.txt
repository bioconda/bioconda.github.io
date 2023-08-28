:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iced'
.. highlight: bash

iced
====

.. conda:recipe:: iced
   :replaces_section_title:
   :noindex:

   The python module iced implements the ICE normalization of hic data.

   :homepage: https://github.com/hiclib/iced
   :license: BSD / new BSD
   :recipe: /`iced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced/meta.yaml>`_

   


.. conda:package:: iced

   |downloads_iced| |docker_iced|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.10-2</code>,  <code>0.5.10-1</code>,  <code>0.5.10-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-1</code>,  <code>0.5.8-0</code>,  <code>0.5.6-3</code>,  <code>0.5.6-2</code>,  <code>0.5.6-1</code>,  </span></summary>
      

      ``0.5.10-2``,  ``0.5.10-1``,  ``0.5.10-0``,  ``0.5.9-0``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :depends scipy: ``>=0.13.3``
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

      mamba install iced

   and update with::

      mamba update iced

  To create a new environment, run::

      mamba create --name myenvname iced

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iced:<tag>

   (see `iced/tags`_ for valid values for ``<tag>``)


.. |downloads_iced| image:: https://img.shields.io/conda/dn/bioconda/iced.svg?style=flat
   :target: https://anaconda.org/bioconda/iced
   :alt:   (downloads)
.. |docker_iced| image:: https://quay.io/repository/biocontainers/iced/status
   :target: https://quay.io/repository/biocontainers/iced
.. _`iced/tags`: https://quay.io/repository/biocontainers/iced?tab=tags


.. raw:: html

    <script>
        var package = "iced";
        var versions = ["0.5.10","0.5.10","0.5.10","0.5.9","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iced/README.html