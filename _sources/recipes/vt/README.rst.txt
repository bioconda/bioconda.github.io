:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vt'
.. highlight: bash

vt
==

.. conda:recipe:: vt
   :replaces_section_title:
   :noindex:

   A tool set for manipulating and generating VCF files

   :homepage: https://genome.sph.umich.edu/wiki/Vt
   :license: MIT
   :recipe: /`vt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt/meta.yaml>`_

   


.. conda:package:: vt

   |downloads_vt| |docker_vt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2015.11.10-4</code>,  <code>2015.11.10-3</code>,  <code>2015.11.10-2</code>,  <code>2015.11.10-1</code>,  <code>2015.11.10-0</code>,  <code>0.57721-11</code>,  <code>0.57721-10</code>,  <code>0.57721-9</code>,  <code>0.57721-8</code>,  </span></summary>
      

      ``2015.11.10-4``,  ``2015.11.10-3``,  ``2015.11.10-2``,  ``2015.11.10-1``,  ``2015.11.10-0``,  ``0.57721-11``,  ``0.57721-10``,  ``0.57721-9``,  ``0.57721-8``,  ``0.57721-7``,  ``0.57721-6``,  ``0.57721-5``,  ``0.57721-4``,  ``0.57721-3``,  ``0.57721-2``,  ``0.57721-1``,  ``0.57721-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.10.2,<1.21.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pcre2: ``>=10.35,<10.36.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install vt

   and update with::

      mamba update vt

  To create a new environment, run::

      mamba create --name myenvname vt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vt:<tag>

   (see `vt/tags`_ for valid values for ``<tag>``)


.. |downloads_vt| image:: https://img.shields.io/conda/dn/bioconda/vt.svg?style=flat
   :target: https://anaconda.org/bioconda/vt
   :alt:   (downloads)
.. |docker_vt| image:: https://quay.io/repository/biocontainers/vt/status
   :target: https://quay.io/repository/biocontainers/vt
.. _`vt/tags`: https://quay.io/repository/biocontainers/vt?tab=tags


.. raw:: html

    <script>
        var package = "vt";
        var versions = ["2015.11.10","2015.11.10","2015.11.10","2015.11.10","2015.11.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vt/README.html