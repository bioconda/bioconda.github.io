:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suchtree'
.. highlight: bash

suchtree
========

.. conda:recipe:: suchtree
   :replaces_section_title:
   :noindex:

   A python library for doing fast\, thread\-safe computations on phylogenetic trees

   :homepage: https://github.com/ryneches/SuchTree/
   :documentation: https://github.com/ryneches/SuchTree/blob/master/README.md
   
   :license: BSD / BSD
   :recipe: /`suchtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suchtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suchtree/meta.yaml>`_
   :links: biotools: :biotools:`suchtree`, doi: :doi:`10.21105/joss.00678`

   


.. conda:package:: suchtree

   |downloads_suchtree| |docker_suchtree|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends dendropy: 
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=2.0``
   :depends pandas: ``>=2.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install suchtree

   and update with::

      mamba update suchtree

  To create a new environment, run::

      mamba create --name myenvname suchtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/suchtree:<tag>

   (see `suchtree/tags`_ for valid values for ``<tag>``)


.. |downloads_suchtree| image:: https://img.shields.io/conda/dn/bioconda/suchtree.svg?style=flat
   :target: https://anaconda.org/bioconda/suchtree
   :alt:   (downloads)
.. |docker_suchtree| image:: https://quay.io/repository/biocontainers/suchtree/status
   :target: https://quay.io/repository/biocontainers/suchtree
.. _`suchtree/tags`: https://quay.io/repository/biocontainers/suchtree?tab=tags


.. raw:: html

    <script>
        var package = "suchtree";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suchtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suchtree/README.html