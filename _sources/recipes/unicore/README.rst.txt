:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unicore'
.. highlight: bash

unicore
=======

.. conda:recipe:: unicore
   :replaces_section_title:
   :noindex:

   Universal and efficient core gene phylogeny with Foldseek and ProstT5

   :homepage: https://github.com/steineggerlab/unicore
   :license: GPL3 / GNU-3.0-or-later
   :recipe: /`unicore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicore/meta.yaml>`_

   


.. conda:package:: unicore

   |downloads_unicore| |docker_unicore|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0c-1``,  ``1.0.0c-0``

      

   
   :depends fasttree: 
   :depends foldmason: 
   :depends foldseek: ``>=10.941cd33``
   :depends iqtree: 
   :depends mafft: 
   :depends openssl: ``>=3.5.0,<4.0a0``
   :depends raxml: 
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

      mamba install unicore

   and update with::

      mamba update unicore

  To create a new environment, run::

      mamba create --name myenvname unicore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unicore:<tag>

   (see `unicore/tags`_ for valid values for ``<tag>``)


.. |downloads_unicore| image:: https://img.shields.io/conda/dn/bioconda/unicore.svg?style=flat
   :target: https://anaconda.org/bioconda/unicore
   :alt:   (downloads)
.. |docker_unicore| image:: https://quay.io/repository/biocontainers/unicore/status
   :target: https://quay.io/repository/biocontainers/unicore
.. _`unicore/tags`: https://quay.io/repository/biocontainers/unicore?tab=tags


.. raw:: html

    <script>
        var package = "unicore";
        var versions = ["1.1.1","1.1.0","1.0.2","1.0.1","1.0.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicore/README.html