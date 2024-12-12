:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmtk'
.. highlight: bash

gmtk
====

.. conda:recipe:: gmtk
   :replaces_section_title:
   :noindex:

   A publicly available toolkit for rapidly prototyping statistical models using dynamic graphical models \(DGMs\) and dynamic Bayesian networks \(DBNs\)

   :homepage: http://melodi.ee.washington.edu/gmtk/
   :license: OSL-3.0
   :recipe: /`gmtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk/meta.yaml>`_

   


.. conda:package:: gmtk

   |downloads_gmtk| |docker_gmtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-16</code>,  <code>1.4.4-15</code>,  <code>1.4.4-14</code>,  <code>1.4.4-13</code>,  <code>1.4.4-12</code>,  <code>1.4.4-11</code>,  <code>1.4.4-10</code>,  <code>1.4.4-9</code>,  <code>1.4.4-8</code>,  </span></summary>
      

      ``1.4.4-16``,  ``1.4.4-15``,  ``1.4.4-14``,  ``1.4.4-13``,  ``1.4.4-12``,  ``1.4.4-11``,  ``1.4.4-10``,  ``1.4.4-9``,  ``1.4.4-8``,  ``1.4.4-7``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends gxx_linux-64: ``10.*``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install gmtk

   and update with::

      mamba update gmtk

  To create a new environment, run::

      mamba create --name myenvname gmtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gmtk:<tag>

   (see `gmtk/tags`_ for valid values for ``<tag>``)


.. |downloads_gmtk| image:: https://img.shields.io/conda/dn/bioconda/gmtk.svg?style=flat
   :target: https://anaconda.org/bioconda/gmtk
   :alt:   (downloads)
.. |docker_gmtk| image:: https://quay.io/repository/biocontainers/gmtk/status
   :target: https://quay.io/repository/biocontainers/gmtk
.. _`gmtk/tags`: https://quay.io/repository/biocontainers/gmtk?tab=tags


.. raw:: html

    <script>
        var package = "gmtk";
        var versions = ["1.4.4","1.4.4","1.4.4","1.4.4","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmtk/README.html