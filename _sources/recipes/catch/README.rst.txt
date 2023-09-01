:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'catch'
.. highlight: bash

catch
=====

.. conda:recipe:: catch
   :replaces_section_title:
   :noindex:

   A package for designing compact and comprehensive capture probe sets.

   :homepage: https://github.com/broadinstitute/catch
   :license: MIT / MIT
   :recipe: /`catch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-018-0006-x`

   


.. conda:package:: catch

   |downloads_catch| |docker_catch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``1.22.*``
   :depends python: ``>3.7``
   :depends scipy: ``1.8.0.*``
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

      mamba install catch

   and update with::

      mamba update catch

  To create a new environment, run::

      mamba create --name myenvname catch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/catch:<tag>

   (see `catch/tags`_ for valid values for ``<tag>``)


.. |downloads_catch| image:: https://img.shields.io/conda/dn/bioconda/catch.svg?style=flat
   :target: https://anaconda.org/bioconda/catch
   :alt:   (downloads)
.. |docker_catch| image:: https://quay.io/repository/biocontainers/catch/status
   :target: https://quay.io/repository/biocontainers/catch
.. _`catch/tags`: https://quay.io/repository/biocontainers/catch?tab=tags


.. raw:: html

    <script>
        var package = "catch";
        var versions = ["1.5.1","1.5.0","1.4.1","1.4.0","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catch/README.html