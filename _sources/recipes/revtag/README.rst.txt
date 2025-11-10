:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revtag'
.. highlight: bash

revtag
======

.. conda:recipe:: revtag
   :replaces_section_title:
   :noindex:

   Reverse \(and complement\) array\-like SAM tags for negative facing alignments.

   :homepage: https://github.com/clintval/revtag
   :documentation: https://github.com/clintval/revtag/blob/1.0.0/README.md
   
   :license: MIT / MIT
   :recipe: /`revtag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtag/meta.yaml>`_

   


.. conda:package:: revtag

   |downloads_revtag| |docker_revtag|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install revtag

   and update with::

      mamba update revtag

  To create a new environment, run::

      mamba create --name myenvname revtag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/revtag:<tag>

   (see `revtag/tags`_ for valid values for ``<tag>``)


.. |downloads_revtag| image:: https://img.shields.io/conda/dn/bioconda/revtag.svg?style=flat
   :target: https://anaconda.org/bioconda/revtag
   :alt:   (downloads)
.. |docker_revtag| image:: https://quay.io/repository/biocontainers/revtag/status
   :target: https://quay.io/repository/biocontainers/revtag
.. _`revtag/tags`: https://quay.io/repository/biocontainers/revtag?tab=tags


.. raw:: html

    <script>
        var package = "revtag";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revtag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revtag/README.html