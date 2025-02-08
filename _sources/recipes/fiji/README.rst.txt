:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji'
.. highlight: bash

fiji
====

.. conda:recipe:: fiji
   :replaces_section_title:
   :noindex:

   Fiji is an image processing package—a \"batteries\-included\" distribution of ImageJ\, bundling a lot of plugins which facilitate scientific image analysis.

   :homepage: http://fiji.sc
   :license: GPL-3.0-or-later
   :recipe: /`fiji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji/meta.yaml>`_

   


.. conda:package:: fiji

   |downloads_fiji| |docker_fiji|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20250206-0</code>,  <code>20240614-0</code>,  <code>20231211-0</code>,  <code>20220414-1</code>,  <code>20220414-0</code>,  <code>20170530-2</code>,  <code>20170530-1</code>,  <code>20170530-0</code>,  <code>20151222-2</code>,  </span></summary>
      

      ``20250206-0``,  ``20240614-0``,  ``20231211-0``,  ``20220414-1``,  ``20220414-0``,  ``20170530-2``,  ``20170530-1``,  ``20170530-0``,  ``20151222-2``,  ``20151222-1``,  ``20151222-0``,  ``20141125-6``,  ``20141125-5``,  ``20141125-4``,  ``20141125-3``,  ``20141125-2``,  ``20141125-1``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8.0``
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

      mamba install fiji

   and update with::

      mamba update fiji

  To create a new environment, run::

      mamba create --name myenvname fiji

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fiji:<tag>

   (see `fiji/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji| image:: https://img.shields.io/conda/dn/bioconda/fiji.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji
   :alt:   (downloads)
.. |docker_fiji| image:: https://quay.io/repository/biocontainers/fiji/status
   :target: https://quay.io/repository/biocontainers/fiji
.. _`fiji/tags`: https://quay.io/repository/biocontainers/fiji?tab=tags


.. raw:: html

    <script>
        var package = "fiji";
        var versions = ["20250206","20240614","20231211","20220414","20220414"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji/README.html