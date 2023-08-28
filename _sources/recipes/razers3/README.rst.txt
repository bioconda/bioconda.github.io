:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'razers3'
.. highlight: bash

razers3
=======

.. conda:recipe:: razers3
   :replaces_section_title:
   :noindex:

   RazerS 3 \- Faster\, fully sensitive read mapping

   :homepage: http://www.seqan.de/projects/razers/
   :license: GPLv3
   :recipe: /`razers3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3/meta.yaml>`_

   


.. conda:package:: razers3

   |downloads_razers3| |docker_razers3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.8-4</code>,  <code>3.5.8-3</code>,  <code>3.5.8-2</code>,  <code>3.5.8-1</code>,  <code>3.5.8-0</code>,  <code>3.5.3-3</code>,  <code>3.5.3-2</code>,  <code>3.5.3-1</code>,  <code>3.5.3-0</code>,  </span></summary>
      

      ``3.5.8-4``,  ``3.5.8-3``,  ``3.5.8-2``,  ``3.5.8-1``,  ``3.5.8-0``,  ``3.5.3-3``,  ``3.5.3-2``,  ``3.5.3-1``,  ``3.5.3-0``,  ``3.5.0-1``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install razers3

   and update with::

      mamba update razers3

  To create a new environment, run::

      mamba create --name myenvname razers3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/razers3:<tag>

   (see `razers3/tags`_ for valid values for ``<tag>``)


.. |downloads_razers3| image:: https://img.shields.io/conda/dn/bioconda/razers3.svg?style=flat
   :target: https://anaconda.org/bioconda/razers3
   :alt:   (downloads)
.. |docker_razers3| image:: https://quay.io/repository/biocontainers/razers3/status
   :target: https://quay.io/repository/biocontainers/razers3
.. _`razers3/tags`: https://quay.io/repository/biocontainers/razers3?tab=tags


.. raw:: html

    <script>
        var package = "razers3";
        var versions = ["3.5.8","3.5.8","3.5.8","3.5.8","3.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/razers3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/razers3/README.html