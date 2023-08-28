:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quicksect'
.. highlight: bash

quicksect
=========

.. conda:recipe:: quicksect
   :replaces_section_title:
   :noindex:

   A cythonized\, extended version of the interval search tree in bx

   :homepage: https://github.com/brentp/quicksect
   :license: MIT / MIT
   :recipe: /`quicksect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quicksect/meta.yaml>`_

   


.. conda:package:: quicksect

   |downloads_quicksect| |docker_quicksect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.2-8</code>,  <code>0.2.2-6</code>,  <code>0.2.2-5</code>,  <code>0.2.2-4</code>,  <code>0.2.2-3</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.0-2</code>,  </span></summary>
      

      ``0.2.2-8``,  ``0.2.2-6``,  ``0.2.2-5``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install quicksect

   and update with::

      mamba update quicksect

  To create a new environment, run::

      mamba create --name myenvname quicksect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quicksect:<tag>

   (see `quicksect/tags`_ for valid values for ``<tag>``)


.. |downloads_quicksect| image:: https://img.shields.io/conda/dn/bioconda/quicksect.svg?style=flat
   :target: https://anaconda.org/bioconda/quicksect
   :alt:   (downloads)
.. |docker_quicksect| image:: https://quay.io/repository/biocontainers/quicksect/status
   :target: https://quay.io/repository/biocontainers/quicksect
.. _`quicksect/tags`: https://quay.io/repository/biocontainers/quicksect?tab=tags


.. raw:: html

    <script>
        var package = "quicksect";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quicksect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quicksect/README.html