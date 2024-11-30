:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emboss'
.. highlight: bash

emboss
======

.. conda:recipe:: emboss
   :replaces_section_title:
   :noindex:

   The European Molecular Biology Open Software Suite

   :homepage: http://emboss.open-bio.org/
   :license: GPL
   :recipe: /`emboss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emboss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emboss/meta.yaml>`_

   


.. conda:package:: emboss

   |downloads_emboss| |docker_emboss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.6.0-10</code>,  <code>6.6.0-9</code>,  <code>6.6.0-8</code>,  <code>6.6.0-7</code>,  <code>6.6.0-6</code>,  <code>6.6.0-5</code>,  <code>6.6.0-4</code>,  <code>6.6.0-3</code>,  <code>6.6.0-2</code>,  </span></summary>
      

      ``6.6.0-10``,  ``6.6.0-9``,  ``6.6.0-8``,  ``6.6.0-7``,  ``6.6.0-6``,  ``6.6.0-5``,  ``6.6.0-4``,  ``6.6.0-3``,  ``6.6.0-2``,  ``6.6.0-1``,  ``6.6.0-0``,  ``6.5.7-5``,  ``6.5.7-4``,  ``6.5.7-3``,  ``6.5.7-2``,  ``6.5.7-1``,  ``6.5.7-0``,  ``5.0.0-5``,  ``5.0.0-4``,  ``5.0.0-3``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libgd: ``>=2.3.3,<2.4.0a0``
   :depends libharu: ``>=2.4.4,<2.5.0a0``
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends zlib: 
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

      mamba install emboss

   and update with::

      mamba update emboss

  To create a new environment, run::

      mamba create --name myenvname emboss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emboss:<tag>

   (see `emboss/tags`_ for valid values for ``<tag>``)


.. |downloads_emboss| image:: https://img.shields.io/conda/dn/bioconda/emboss.svg?style=flat
   :target: https://anaconda.org/bioconda/emboss
   :alt:   (downloads)
.. |docker_emboss| image:: https://quay.io/repository/biocontainers/emboss/status
   :target: https://quay.io/repository/biocontainers/emboss
.. _`emboss/tags`: https://quay.io/repository/biocontainers/emboss?tab=tags


.. raw:: html

    <script>
        var package = "emboss";
        var versions = ["6.6.0","6.6.0","6.6.0","6.6.0","6.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emboss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emboss/README.html