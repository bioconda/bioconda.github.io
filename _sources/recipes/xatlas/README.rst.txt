:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xatlas'
.. highlight: bash

xatlas
======

.. conda:recipe:: xatlas
   :replaces_section_title:
   :noindex:

   xAtlas is a fast and retrainable small variant caller that has been developed at the Baylor College of Medicine Human Genome Sequencing Center.

   :homepage: https://github.com/jfarek/xatlas
   :license: BSD-3-Clause
   :recipe: /`xatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas/meta.yaml>`_
   :links: doi: :doi:`10.1101/295071`

   


.. conda:package:: xatlas

   |downloads_xatlas| |docker_xatlas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3-3</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  <code>0.2.1-5</code>,  <code>0.2.1-4</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  </span></summary>
      

      ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pthread-stubs: 
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

      mamba install xatlas

   and update with::

      mamba update xatlas

  To create a new environment, run::

      mamba create --name myenvname xatlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xatlas:<tag>

   (see `xatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_xatlas| image:: https://img.shields.io/conda/dn/bioconda/xatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/xatlas
   :alt:   (downloads)
.. |docker_xatlas| image:: https://quay.io/repository/biocontainers/xatlas/status
   :target: https://quay.io/repository/biocontainers/xatlas
.. _`xatlas/tags`: https://quay.io/repository/biocontainers/xatlas?tab=tags


.. raw:: html

    <script>
        var package = "xatlas";
        var versions = ["0.3","0.3","0.3","0.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xatlas/README.html