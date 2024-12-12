:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgtextutils'
.. highlight: bash

libgtextutils
=============

.. conda:recipe:: libgtextutils
   :replaces_section_title:
   :noindex:

   Gordon Text utils Library

   :homepage: https://github.com/agordon/libgtextutils
   :license: AGPL
   :recipe: /`libgtextutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils/meta.yaml>`_

   


.. conda:package:: libgtextutils

   |downloads_libgtextutils| |docker_libgtextutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7-14</code>,  <code>0.7-13</code>,  <code>0.7-12</code>,  <code>0.7-11</code>,  <code>0.7-10</code>,  <code>0.7-9</code>,  <code>0.7-8</code>,  <code>0.7-7</code>,  <code>0.7-6</code>,  </span></summary>
      

      ``0.7-14``,  ``0.7-13``,  ``0.7-12``,  ``0.7-11``,  ``0.7-10``,  ``0.7-9``,  ``0.7-8``,  ``0.7-7``,  ``0.7-6``,  ``0.7-5``,  ``0.7-4``,  ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
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

      mamba install libgtextutils

   and update with::

      mamba update libgtextutils

  To create a new environment, run::

      mamba create --name myenvname libgtextutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libgtextutils:<tag>

   (see `libgtextutils/tags`_ for valid values for ``<tag>``)


.. |downloads_libgtextutils| image:: https://img.shields.io/conda/dn/bioconda/libgtextutils.svg?style=flat
   :target: https://anaconda.org/bioconda/libgtextutils
   :alt:   (downloads)
.. |docker_libgtextutils| image:: https://quay.io/repository/biocontainers/libgtextutils/status
   :target: https://quay.io/repository/biocontainers/libgtextutils
.. _`libgtextutils/tags`: https://quay.io/repository/biocontainers/libgtextutils?tab=tags


.. raw:: html

    <script>
        var package = "libgtextutils";
        var versions = ["0.7","0.7","0.7","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgtextutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgtextutils/README.html